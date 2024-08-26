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
        <EnTeteAdminCourseId params={params}/>
    </Auth>
  )
}

export default CourseIdPage