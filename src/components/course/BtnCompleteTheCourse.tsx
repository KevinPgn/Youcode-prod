"use client"
import { Button } from "../ui/button"
import { markChapterAsCompleted } from "@/server/Actions"

export const BtnCompleteTheCourse = ({chapterId}:{chapterId:string}) => {
  return <>
    <Button className="bg-red-500 mt-10 hover:bg-red-600" onClick={async () => {
      const res = await markChapterAsCompleted({ chapterId: chapterId })
      console.log(res)
    }}>

      Complete the course
    </Button>
  </>
}