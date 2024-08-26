import { BtnNewCourse } from "./BtnNewCourse"
import { getCoursesCreated } from "@/app/admin/action.admin"
import Link from "next/link"

export const CoursesUser = async () => {
  const courses = await getCoursesCreated({})
  const coursesData = courses?.data
  return <div className="max-w-[800px] h-[600px] mx-auto">
        <div className='flex items-center justify-between mb-10'>
            <h1 className='text-white text-2xl border-b pb-2 border-gray-800 font-semibold'>Courses</h1>
            <BtnNewCourse />
        </div>
        <div className="bg-[#1C1917] border border-gray-800 rounded-lg p-5 mb-10">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm font-medium text-gray-400 border-b border-gray-800 pb-2">
            <span>Course</span>
            <span>Actions</span>
          </div>
          {coursesData && coursesData.length > 0 ? (
            coursesData.map((course, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-800 rounded-md overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-2xl font-bold">
                      {course.name.charAt(0)}
                    </div>
                  </div>
                  <Link href={`/admin/courses/${course.id}`}>
                    <span className="text-white">{course.name}</span>
                  </Link>
                </div>
                <div className="space-x-2">
                  <button className="text-blue-500 hover:text-blue-400">Edit</button>
                  <button className="text-red-500 hover:text-red-400">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-white text-center text-xl">No courses available try to create one</h2>
          )}
        </div>

        </div>
  </div>
}