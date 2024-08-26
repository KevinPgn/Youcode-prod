import { EditCourse } from '@/components/admin/courses/courseId/edit/EditCourse'
import { EnTeteAdminCourseIdEdit } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'
import {getCourseById} from "@/app/admin/action.admin"

const EditCoursePage = async ({params}: {params: {courseId: string}}) => {
    const course = await getCourseById({courseId: params.courseId})
  return (
    <Auth>
        <section>
            <EnTeteAdminCourseIdEdit params={params} />
            <EditCourse course={course} />
        </section>
    </Auth>
  )
}

export default EditCoursePage