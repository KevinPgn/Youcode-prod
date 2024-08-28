import React from 'react'
import {getEnrolledCourses} from '@/components/course/action.course'
import { CoursesEnrolledUser } from '@/components/courses/CoursesEnrolledUser'
import { auth } from '@/lib/auth'
const CoursesEnrolledPage = async () => {
    const session = await auth()
    const userId = session?.user?.id as string
  const courses = await getEnrolledCourses({})
  return (
    <CoursesEnrolledUser courses={courses?.data} userId={userId} />
  )
}

export default CoursesEnrolledPage