import React from 'react'
import { getChaptersOfTheCourse } from '@/app/admin/action.admin'
import { AllChaptersForThisCourse } from '@/components/admin/courses/courseId/chapters/AllChaptersForThisCourse'
import Auth from '@/lib/middleware'
import { EnTeteAdminCourseIdChapters } from '@/components/admin/EnTeteAdminStats'
import { getCourseName } from '@/app/admin/action.admin'

const ChaptersOfTheCoursePage = async ({params}: {params: {courseId: string}}) => {
  const chapters = await getChaptersOfTheCourse({courseId: params.courseId})
  const courseName = await getCourseName({courseId: params.courseId})

  return (
    <Auth>
      <EnTeteAdminCourseIdChapters params={params} />
      <AllChaptersForThisCourse chapters={chapters} courseId={params.courseId} courseName={courseName?.data?.name} />
    </Auth>
  )
}

export default ChaptersOfTheCoursePage