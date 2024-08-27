import React from 'react'
import { getCoursesPublished } from './action.explorer'
import { ShowCoursesPublished } from '@/components/explorer/ShowCoursesPublished'
import { CourseExploreProps } from '@/lib/types'
import { auth } from '@/lib/auth'

const PageExplorerCourse = async () => {
  const coursesData = await getCoursesPublished()
  const courses: CourseExploreProps = { courses: coursesData }
  const session = await auth()
  const userId = session?.user?.id as string

  return (
    <section className="max-w-[1400px] h-[600px] mx-auto mt-5">
      <ShowCoursesPublished courses={courses} userId={userId} />
    </section>
  )
}

export default PageExplorerCourse