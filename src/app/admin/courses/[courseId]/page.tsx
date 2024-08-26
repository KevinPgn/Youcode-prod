import { CourseDetail } from '@/components/admin/courses/courseId/CourseDetail'
import { EnTeteAdminCourseId } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'

interface CourseIdPageProps {
    params: {
        courseId: string
    }
}

const CourseIdPage = async ({params}: CourseIdPageProps) => {
  return (
    <Auth>
        <section>
          <EnTeteAdminCourseId params={params}/>
          <CourseDetail />
        </section>
    </Auth>
  )
}

export default CourseIdPage