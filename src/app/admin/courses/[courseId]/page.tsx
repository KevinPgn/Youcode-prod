import { CourseDetail } from '@/components/admin/courses/courseId/CourseDetail'
import { EnTeteAdminCourseId } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'
import { getCourseById } from '@/app/admin/action.admin'

interface CourseIdPageProps {
    params: {
        courseId: string
    }
}

const CourseIdPage = async ({params}: CourseIdPageProps) => {
  const course = await getCourseById({courseId: params.courseId})
  
  return (
    <Auth>
        <section>
          <EnTeteAdminCourseId params={params}/>
          <CourseDetail course={course}/>
        </section>
    </Auth>
  )
}

export default CourseIdPage