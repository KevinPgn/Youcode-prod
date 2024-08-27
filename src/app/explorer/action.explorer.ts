"use server"
import prisma from "@/lib/prisma"
import { z } from "zod"
import { revalidatePath } from "next/cache"

export const getCoursesPublished = async () => {
    const courses = await prisma.course.findMany({
        where: {
            state: "published"
        },
        select: {
            id: true,
            image: true,
            name: true,
            author: {
                select: {
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