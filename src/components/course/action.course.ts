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

export const getEnrollment = authenticatedAction
    .schema(z.object({
        courseId: z.string()
    }))
    .action(async ({parsedInput: {courseId}, ctx:{userId}}) => {
        const enrollment = await prisma.enrollment.findUnique({
            where: {
                userId_courseId: {
                    userId,
                    courseId
                }
            }
        })
        return enrollment
    })

// get all courses enrolled by user
export const getEnrolledCourses = authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx:{userId}}) => {
        const courses = await prisma.course.findMany({
            where: {
                enrollments: {
                    some: {
                        userId: userId
                    }
                }
    
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
                },
            }
        })
        return courses
    })
