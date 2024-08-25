import { CourseExploreProps } from "@/lib/types"

export const ShowCoursesPublished = ({courses}: {courses: CourseExploreProps}) => {
  const course = courses.courses

  return <>
    {course.length === 0 ? (
        <div className="flex justify-center items-center h-full">
            <h1 className="text-2xl font-bold">No courses published yet.</h1>
        </div>
    ): null}
  </>
}