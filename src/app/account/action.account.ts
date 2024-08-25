"use server"
import {z} from "zod"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/lib/auth"
import { authenticatedAction } from "@/lib/safe-actions"

// user can change his name or image
export const updateUser = authenticatedAction
    .schema(z.object({
        name: z.string().max(20).optional(),
        image: z.string().optional(),
    }))
    .action(async ({parsedInput: {name, image}, ctx:{userId}}) => {
        const updateData: { name?: string; image?: string } = {};
        if (name !== undefined) updateData.name = name;
        if (image !== undefined) updateData.image = image;

        if (Object.keys(updateData).length === 0) {
            return; // No fields to update
        }

        await prisma.user.update({
            where: { id: userId },
            data: updateData,
            select: null // Omit returning data for better performance
        });

        revalidatePath('/account'); // Revalidate the account page
    })