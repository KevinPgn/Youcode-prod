"use client"
import { CircleIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export const AllChaptersForThisCourse = ({ chapters, courseName, courseId }: { chapters: any, courseName: string, courseId: string }) => {
  const router = useRouter()
  return (
    <div className="w-full bg-[#1C1917] p-5 border rounded-lg border-gray-800">
        <span className="text-white text-md font-semibold">{courseName}</span>
      <ul className="space-y-2 mt-5">
        {chapters.map((chapter: any, index: number) => {
          return (
            <li 
            onClick={() => {
              router.push(`/course/${courseId}/chapter/${chapter.id}`)
            }}
            key={index} className="flex border p-2 cursor-pointer hover:bg-gray-800 rounded-md text-sm border-gray-800 items-center">
               {/* quand completed affichier un rond vert sinon un rond blanc */}
               {chapter.userProgress.length > 0 ? (
                <div className="flex items-center gap-2">
                  <CircleIcon className="w-4 h-4 text-green-500" />
                  <span className="text-white">{chapter.title}</span>
                </div>
               ) : (
                <div className="flex items-center gap-2">
                  <CircleIcon className="w-4 h-4 text-white" />
                  <span className="text-white">{chapter.title}</span>
                </div>
               )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}