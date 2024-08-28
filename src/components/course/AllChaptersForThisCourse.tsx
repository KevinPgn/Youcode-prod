"use client"
import { useRouter } from "next/navigation"

export const AllChaptersForThisCourse = ({ chapters, courseName, courseId }: { chapters: any, courseName: string, courseId: string }) => {
  const router = useRouter()
  
  return (
    <div className="w-full bg-[#1C1917] p-5 border rounded-lg border-gray-800">
        <span className="text-white text-md font-semibold">{courseName}</span>
      <ul className="space-y-2 mt-5">
        {chapters.map((chapter: any, index: number) => (
          <li 
          onClick={() => {
            router.push(`/course/${courseId}/chapter/${chapter.id}`)
          }}
          key={index} className="flex border p-2 cursor-pointer hover:bg-gray-800 rounded-md text-sm border-gray-800 items-center">
            <div className={`w-4 h-4 rounded-full mr-3 ${chapter.isCompleted ? 'bg-green-500' : 'border border-gray-500'}`}></div>
            <span className="text-white">{chapter.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}