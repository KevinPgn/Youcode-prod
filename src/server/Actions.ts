"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
/*
model Course {
  id String @id @default(cuid())
  name String
  description String
  image String?

  authorId String
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)

  chapters Chapter[]

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
*/

export const markChapterAsCompleted = authenticatedAction
    .schema(z.object({
        chapterId: z.string()
    }))
    .action(async ({parsedInput, ctx: {userId}}) => {
        
        const chapter = await prisma.chapter.findUnique({
            where: {id: parsedInput.chapterId}
        })
        if(!chapter) {
            return {error: "Chapter not found"}
        }
        const course = await prisma.course.findUnique({
            where: {id: chapter.courseId}
        })  
        if(!course) {
            return {error: "Course not found"}
        }
      await prisma.userChapterProgress.upsert({
            where: {
              authorId_chapterId: {
                authorId: userId,
                chapterId: parsedInput.chapterId,
              },
            },
            update: {
              completed: true,
            },
            create: {
              authorId: userId,
              chapterId: parsedInput.chapterId,
              completed: true,
            },
          });

          revalidatePath(`/course/${course.id}/chapter/${chapter.id}`)
    })
