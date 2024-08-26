import Link from "next/link"

export const CourseDetail = ({course}: {course: any}) => {
    const courseData = course.data
    return (
      <div className="max-w-[800px] h-[600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold border-b text-white border-gray-800 py-2 mb-5 w-fit">Courses</h2>
  
        <div className="flex flex-col lg:flex-row gap-5 mb-5">
          <div className="w-full lg:w-[70%] bg-[#1C1917] border border-gray-800 p-5 rounded-lg">
            <h3 className="text-sm text-white font-semibold mb-4">Users</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="pr-4">Image</th>
                    <th className="pr-4">Name</th>
                    <th className="pr-4">Status</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table body content */}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-5 mt-5">
                <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">Previous</button>
                <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">Next</button>
            </div>
          </div>
          <div className="w-full lg:w-fit bg-[#1C1917] border border-gray-800 p-5 rounded-lg">
            <div className="flex items-center flex-col mb-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-2">
                {courseData.name.charAt(0).toUpperCase()}
              </div>
              <h3 className="text-md text-white mt-2 font-semibold">{courseData.name}</h3>
            </div>
            <div className="bg-pink-600 uppercase text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2">
                {courseData.state}
            </div>
            <p className="text-sm text-white mb-1">{courseData._count.enrollments} users</p>
            <p className="text-sm text-white mb-4">{courseData._count.chapters} lessons</p>
            <div className="flex flex-col gap-2">
              <Link href={`/admin/courses/${courseData.id}/edit`} className="text-white text-center w-full p-2 border border-[#312b28] hover:bg-[#25211f] hover:border-[#645a55] duration-300 rounded-md text-sm">Edit</Link>
              <Link href={`/admin/courses/${courseData.id}/chapters`} className="text-white text-center w-full p-2 border border-[#312b28] hover:bg-[#25211f] hover:border-[#645a55] duration-300 rounded-md text-sm">Edit lessons</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }