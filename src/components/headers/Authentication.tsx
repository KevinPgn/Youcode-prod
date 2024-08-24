"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { LogIn } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {User, LogOut} from "lucide-react"

export const Authentication = () => {
  const {data: session} = useSession()

  return <>
    {session ? (
        <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center border px-3 p-1 border-gray-800 cursor-pointer rounded-md gap-2">
            <img src={session.user?.image as string} alt="user image" className="w-5 h-5 rounded-full" />
            <p className="text-xs">{session.user?.name}</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black border border-gray-800 text-white">
          <DropdownMenuItem className="flex items-center gap-2"><User className="w-4 h-4"/>Account</DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gray-800"/>
          <DropdownMenuItem onClick={() => signOut()} className="flex items-center gap-2"><LogOut className="w-4 h-4"/>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ): (
        <Button onClick={() => signIn()} variant="ghost" className="flex border border-gray-800 text-xs items-center gap-2">
            <LogIn className="w-4 h-4"/>
            Login
        </Button>
    )}
  </>
}