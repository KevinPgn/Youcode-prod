"use client"
import { useState } from "react"
import { Editor } from "./Editor"
import { updateChapter } from "@/app/admin/action.admin"
import { Button } from "@/components/ui/button"

export const ContenuChapter = ({chapter}: {chapter: any}) => {
  const [content, setContent] = useState(chapter.content)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await updateChapter({chapterId: chapter.id, content})
      return res
    } catch (error) {
      console.error(error)
    }
  }

  return <div className="flex-1 bg-[#1C1917] rounded-md p-5">
    <h2 className="text-md font-normal text-white mb-5">Content</h2>
    <form onSubmit={handleSubmit}>
      <Editor value={content} onChange={setContent} />
      <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 mt-5">Submit</Button>
    </form>
  </div>
}