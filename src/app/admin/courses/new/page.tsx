import { FormCreateCourse } from '@/components/admin/courses/new/FormCreateCourse'
import { EnTeteAdminNewCourse } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'

const NewCoursePage = () => {
  return (
    <Auth>
        <section>
            <EnTeteAdminNewCourse />
            <FormCreateCourse />
        </section>
    </Auth>
  )
}

export default NewCoursePage