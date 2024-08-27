"use client"
import { useRouter } from "next/navigation"
import { BtnCreateChapter } from "./BtnCreateChapter"
import { GripVertical } from "lucide-react"

export const AllChaptersForThisCourse = ({chapters, courseId, courseName}: {chapters: any, courseId: string, courseName: any}) => {
  const AllChapters = chapters.data
  const router = useRouter()

  return <div className="max-w-[800px] h-[600px] mx-auto mt-3">
    <h2 className="text-2xl font-bold border-b text-white border-gray-800 py-2 mb-5 w-fit">Chapter . {courseName}</h2>

    <div className="bg-[#1e1e1e] border border-gray-800 p-5 mb-5 rounded-lg">
      <div className="flex flex-col gap-5">
        <h2 className="text-sm font-semibold text-gray-400">Chapters</h2>
        {AllChapters.length === 0 ? (
          <>
            <p className="text-center text-gray-400">No chapters available for this course. Start by creating a chapter.</p>
            <BtnCreateChapter courseId={courseId} />
          </>
        ) : (
          AllChapters.map((chapter: any) => (
              <div onClick={() => router.push(`/admin/courses/${courseId}/chapters/${chapter.id}`)} className="border hover:bg-gray-800 duration-75 cursor-pointer border-gray-700 p-3 flex items-center justify-between rounded-sm" key={chapter.id}>
                <h3 className="text-lg font-bold text-white">{chapter.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm uppercase bg-red-500 px-2 py-1 rounded-sm">{chapter.state === 'hidden' ? 'hidden' : 'published'}</span>
                  <GripVertical className="text-gray-400 cursor-move" />
                </div>
              </div>
          ))
        )}
        <BtnCreateChapter courseId={courseId} />
      </div>
    </div>
  </div>
}