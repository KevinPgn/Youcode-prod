"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
export const BtnCourses = () => {
  const router = useRouter();

  return <>
    <Button className="bg-[#D71D45] hover:bg-[#D71D45]/80" onClick={() => router.push('/admin/courses')}>Courses</Button>
  </>
}