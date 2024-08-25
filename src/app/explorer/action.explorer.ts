"use server"
import prisma from "@/lib/prisma"
import { z } from "zod"
import { revalidatePath } from "next/cache"

export const getCoursesPublished = async () => {
    const courses = await prisma.course.findMany({
        where: {
            published: true
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
            }
        }
    })
    return courses
}