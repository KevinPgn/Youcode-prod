import React from 'react'
import { getCoursesPublished } from './action.explorer'
import { ShowCoursesPublished } from '@/components/explorer/ShowCoursesPublished'
import { CourseExploreProps } from '@/lib/types'

const PageExplorerCourse = async () => {
  const coursesData = await getCoursesPublished()
  const courses: CourseExploreProps = { courses: coursesData }


  return (
    <section className="max-w-[1400px] h-[600px] mx-auto mt-5">
      <ShowCoursesPublished courses={courses} />
    </section>
  )
}

export default PageExplorerCourse