"use client"
import { Button } from "@/components/ui/button"
import { createChapter } from "@/app/admin/action.admin"

export const BtnCreateChapter = ({courseId}: {courseId: string}) => {
  return <>
    <Button variant="default" className="text-sm" onClick={() => createChapter({courseId: courseId})}>
        Create Chapter
    </Button>
  </>
}