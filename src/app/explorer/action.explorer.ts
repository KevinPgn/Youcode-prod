"use server"
import prisma from "@/lib/prisma"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { authenticatedAction } from "@/lib/safe-actions"

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
  state String @default("draft")

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

export const getCoursesPublished = async () => {
    const courses = await prisma.course.findMany({
        where: {
            state: "published"
        },
        select: {
            id: true,
            image: true,
            name: true,
            description: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true
                }
            },
            chapters: {
                where: {
                    state: "published"
                },
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })
    return courses
}

export const joinCourse = authenticatedAction
    .schema(z.object({
        courseId: z.string()
    }))
    .action(async ({parsedInput: {courseId}, ctx:{userId}}) => {
        const course = await prisma.course.findUnique({
            where: {
                id: courseId,
            },
            include: {
                author: true
            }
        })
        if(!course) {
            return {error: "Course not found"}
        }
        if(course.author.id === userId) {
            return {error: "You are the author of this course"}
        }
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if(!user) {
            return {error: "User not found"}
        }
        const enrollment = await prisma.enrollment.findUnique({
            where: {
                userId_courseId: {
                    userId: userId,
                    courseId: courseId
                }
            }
        })
        if(enrollment) {
            return {error: "You are already enrolled in this course"}
        }
        const newEnrollment = await prisma.enrollment.create({
            data: {
                userId: userId,
                courseId: courseId
            }
        })
        revalidatePath("/explorer")
        return newEnrollment
    })