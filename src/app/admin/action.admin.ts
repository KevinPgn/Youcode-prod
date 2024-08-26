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
        return courses
    });

export const createCourse = authenticatedAction
    .schema(z.object({
        name: z.string().min(3).max(100),
        description: z.string().min(10).max(500),
        image: z.string().optional(),
        state: z.enum(["draft", "published"]),
    }))
    .action(async ({parsedInput: {name, description, image, state}, ctx: {userId}}) => {
       const newCourse = await prisma.course.create({
            data: {
                name,
                description,
                image,
                state,
                authorId: userId,
            },
        });
        revalidatePath("/admin/courses");
        redirect(`/admin/courses/${newCourse.id}`);
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
            include: {
                _count: {
                    select: {
                        chapters: true,
                        enrollments: true,
                    },
                },
            },
        });
        return course;
    });

export const updateCourse = authenticatedAction
    .schema(z.object({
        courseId: z.string(),
        name: z.string().min(3).max(100).optional(),
        description: z.string().min(10).max(500).optional(),
        image: z.string().optional(),
        state: z.enum(["draft", "published"]).optional(),
    }))
    .action(async ({parsedInput: {courseId, name, description, image, state}, ctx: {userId}}) => {
        const course = await prisma.course.update({
            where: {
                id: courseId,
                authorId: userId,
            },
            data: {
                name,
                description,
                image,
                state,
            },
        });
        revalidatePath("/admin/courses");
        redirect(`/admin/courses/${course.id}`);
    });

export const getChaptersOfTheCourse = authenticatedAction
    .schema(z.object({
        courseId: z.string(),
    }))
    .action(async ({parsedInput: {courseId}, ctx: {userId}}) => {
        const chapters = await prisma.chapter.findMany({
            where: {
                courseId,
                course: {
                    authorId: userId,
                },
            },
            select: {
                id: true,
                title: true,
            },
        });
        return chapters;
    });

// get only the name of the course
export const getCourseName = authenticatedAction
    .schema(z.object({
        courseId: z.string(),
    }))
    .action(async ({parsedInput: {courseId}, ctx: {userId}}) => {
        const course = await prisma.course.findUnique({
            where: {
                id: courseId,
                authorId: userId,
            },
            select: {
                name: true,
            },
        });
        return course
    });

export const createChapter = authenticatedAction
    .schema(z.object({
        courseId: z.string(),
        title: z.string().min(3).max(100).optional(),
        content: z.string().min(10).max(500).optional(),
    }))
    .action(async ({parsedInput: {courseId, title, content}, ctx: {userId}}) => {
        const newChapter = await prisma.chapter.create({
            data: {
                title: title || "Draft Lesson",
                content: content || "Default Content",
                courseId,
            },
        });
        revalidatePath(`/admin/courses/${courseId}`);
        redirect(`/admin/courses/${courseId}/chapters/${newChapter.id}`);
    });

export const updateChapter = authenticatedAction
    .schema(z.object({
        chapterId: z.string(),
        title: z.string().min(3).max(100).optional(),
        content: z.string().min(10).max(500).optional(),
        videoUrl: z.string().optional(),
    }))
    .action(async ({parsedInput: {chapterId, title, content, videoUrl}, ctx: {userId}}) => {
        const chapter = await prisma.chapter.update({
            where: {
                id: chapterId,
                course: {
                    authorId: userId,
                },
            },
            data: {
                title,
                content,
                videoUrl,
            },
        });

        return chapter;
    });