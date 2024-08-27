import { EnTeteAdminCourseIdChaptersChapterId } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'
import { getChapterById } from '@/app/admin/action.admin'
import { ContenuChapter } from '@/components/admin/courses/courseId/chapters/chapterId/ContenuChapter'
import { DetailsChapter } from '@/components/admin/courses/courseId/chapters/chapterId/DetailsChapter'

const ChapterIdPage = async ({params}: {params: {courseId: string, chapterId: string}}) => {
  const chapter = await getChapterById({chapterId: params.chapterId})
  const chapterData = chapter?.data
  return (
    <Auth>
        <section>
            <EnTeteAdminCourseIdChaptersChapterId params={{courseId: params.courseId, chapterId: params.chapterId}} />

            <div className='max-w-[800px] mx-auto mt-5'>
                <h2 className="text-2xl font-bold border-b text-white border-gray-800 py-2 mb-5 w-fit">Draft Chapter</h2>

                <div className='flex gap-5'>
                    <DetailsChapter chapter={chapterData}/>
                    <ContenuChapter chapter={chapterData}/>
                </div>
            </div>
        </section>
    </Auth>
  )
}

export default ChapterIdPage