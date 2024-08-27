"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/lib/auth"
import { z } from "zod"
import { authenticatedAction } from "@/lib/safe-actions"

export const joinCourse = authenticatedAction
    .schema(z.object({
        courseId: z.string()
    }))
    .action(async ({parsedInput: {courseId}, ctx:{userId}}) => {
        const course = await prisma.course.findUnique({
            where: {id: courseId}
        })
        if(!course) {
            return {error: "Course not found"}
        }
        const user = await prisma.user.findUnique({
            where: {id: userId}
        })
        if(!user) {
            return {error: "User not found"}
        }
        const enrollment = await prisma.enrollment.findUnique({
            where: {userId_courseId: {userId, courseId}}
        })
        if(enrollment) {
            return {error: "You are already enrolled in this course"}
        }
        await prisma.enrollment.create({
            data: {userId, courseId}
        })
        revalidatePath(`/explorer`)
    })
