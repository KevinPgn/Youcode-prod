"use client"
import { CourseExploreProps } from "@/lib/types"
import { useState } from "react"
import { ModalCourse } from "../explorer/ModalCourse"
import { getEnrollment } from "../course/action.course"

export const CoursesEnrolledUser = ({courses, userId}: {courses: any, userId: string}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [courseSelected, setCourseSelected] = useState<any>(null)
  const [enrollment, setEnrollment] = useState<any>(null)
  
  return <>
    {courses.length === 0 ? (
        <div className="flex justify-center items-center h-full">
            <h1 className="text-2xl font-bold">No courses published yet.</h1>
        </div>
    ): (
      <div className="max-w-[1000px] h-[600px] mx-auto mt-5">
        <h2 className="text-3xl font-bold border-b border-gray-800 text-white py-3 mb-5 w-fit">Explorer</h2>
        <div className="flex flex-wrap gap-5">
          {courses.map((course:any) => (
            <div
            onClick={async () => {
              setCourseSelected(course)
              setModalOpen(!modalOpen)
              const enrollment = await getEnrollment({courseId: course.id})
              setEnrollment(enrollment)
            }}
            key={course.id} className="flex items-center p-5 gap-3 w-fit cursor-pointer hover:bg-[#292524] bg-[#1C1917] rounded-md">
              {course.image ? (
                <img loading='lazy' src={course.image} alt={course.name} width={100} height={100} className="w-10 h-10 rounded-md" />
              ): (
                <div className="w-10 h-10 rounded-md flex justify-center items-center text-xl font-bold text-white bg-gray-800">{course.name.charAt(0)}</div>
              )}
              <div>
                <h1 className="text-md font-semibold text-white">{course.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <img src={course.author.image ?? ""} alt={course.author.name ?? ""} width={20} height={20} className="w-9 h-9 rounded-full" />
                  <p className="text-sm font-normal text-gray-400">{course.author.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
    {modalOpen && <ModalCourse 
    userId={userId}
    course={courseSelected}
    enrollment={enrollment?.data}
    setModalOpen={setModalOpen}/>}
  </>
}