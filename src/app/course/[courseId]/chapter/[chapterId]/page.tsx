import { CourseInformations } from '@/components/course/CourseInformations';
import React from 'react'

const ChapterIdPage = async ({ params }: { params: { courseId: string, chapterId: string } }) => {
  const { courseId, chapterId } = params;

  return (
    <>
      <section>
        <CourseInformations />
      </section>
    </>
  )
}

export default ChapterIdPage