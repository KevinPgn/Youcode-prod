import { CoursesUser } from '@/components/admin/courses/CoursesUser'
import { EnTeteAdminCourses } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'

const CoursesPage = () => {
  return (
    <Auth>
        <section>
            <EnTeteAdminCourses />
            <CoursesUser />
        </section>
    </Auth>
  )
}

export default CoursesPage