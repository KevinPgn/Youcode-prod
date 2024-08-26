"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const BtnNewCourse = () => {
  const router = useRouter()
  return <>
    <Button className="hover:bg-gray-800 duration-75" onClick={() => router.push('/admin/courses/new')}>New Course</Button>

  </>
}