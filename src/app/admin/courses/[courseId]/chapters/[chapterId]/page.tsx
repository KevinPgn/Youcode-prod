import { EnTeteAdminCourseIdChaptersChapterId } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'

const ChapterIdPage = ({params}: {params: {courseId: string, chapterId: string}}) => {
  return (
    <Auth>
        <section>
            <EnTeteAdminCourseIdChaptersChapterId params={{courseId: params.courseId, chapterId: params.chapterId}} />
        </section>
    </Auth>
  )
}

export default ChapterIdPage