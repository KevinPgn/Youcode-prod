import { EnTeteAdminCourses } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'

const CoursesPage = () => {
  return (
    <Auth>
        <section>
            <EnTeteAdminCourses />
        </section>
    </Auth>
  )
}

export default CoursesPage