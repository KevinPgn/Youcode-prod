"use server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { authenticatedAction } from "@/lib/safe-actions";
import { redirect } from "next/navigation";
/*
model Course {
  id String @id @default(cuid())
  name String
  description String
  image String?
  state String @default("draft")
  
  authorId String
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)

  chapters Chapter[]
  enrollments Enrollment[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Chapter {
  id String @id @default(cuid())
  title String
  content String
  videoUrl String?

  userProgress UserChapterProgress[]

  courseId String
  course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model UserChapterProgress {
  id String @id @default(cuid())
  completed Boolean @default(false)
  
  authorId String
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)
  
  chapterId String
  chapter Chapter @relation(fields: [chapterId], references: [id], onDelete: Cascade)
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([authorId, chapterId])
}

model Enrollment {
  id String @id @default(cuid())
  
  userId String
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  courseId String
  course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([userId, courseId])
}
*/
// Get the number of all users in enrolled courses, the number of chapters created and the number of courses created
export const getDashboardData = authenticatedAction
    .schema(z.object({}))
    .action(async ({parsedInput: {}, ctx: {userId}}) => {
        const [users, chapters, courses] = await Promise.all([
            prisma.user.count({
                where: {
                    enrollments: {
                        some: {
                            course: {
                                authorId: userId,
                            },
                        },
                    },
                },
            }),
            prisma.chapter.count(),
            prisma.course.count(),
        ]);
        return { users, chapters, courses };
    });

export const getCoursesCreated = authenticatedAction
    .schema(z.object({}))
    .action(async ({parsedInput: {}, ctx: {userId}}) => {
        const courses = await prisma.course.findMany({
            where: {
                authorId: userId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return courses;
    });

export const createCourse = authenticatedAction
    .schema(z.object({
        name: z.string().min(3).max(100),
        description: z.string().min(10).max(500),
        image: z.string().optional(),
        state: z.enum(["draft", "published"]),
    }))
    .action(async ({parsedInput: {name, description, image, state}, ctx: {userId}}) => {
        await prisma.course.create({
            data: {
                name,
                description,
                image,
                state,
                authorId: userId,
            },
        });
        revalidatePath("/admin/courses");
        redirect("/admin/courses");
    });

export const getCourseById = authenticatedAction
    .schema(z.object({
        courseId: z.string(),
    }))
    .action(async ({parsedInput: {courseId}, ctx: {userId}}) => {
        const course = await prisma.course.findUnique({
            where: {
                id: courseId,
                authorId: userId,
            },
        });
        return course;
    });