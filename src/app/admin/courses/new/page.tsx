import { FormCreateCourse } from '@/components/admin/courses/new/FormCreateCourse'
import Auth from '@/lib/middleware'
import React from 'react'

const NewCoursePage = () => {
  return (
    <Auth>
        <FormCreateCourse />
    </Auth>
  )
}

export default NewCoursePage