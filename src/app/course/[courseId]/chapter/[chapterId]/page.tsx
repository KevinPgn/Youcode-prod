import { CourseInformations } from '@/components/course/CourseInformations';
import React from 'react'
import prisma from '@/lib/prisma';

const ChapterIdPage = async ({ params }: { params: { courseId: string, chapterId: string } }) => {
  const { courseId, chapterId } = params;

  const chapter = await prisma.chapter.findUnique({
    where: {
      id: chapterId,
      courseId: courseId
    },
    select: {
      content: true,
    }
  })
  return (
    <>
      <section>
        <CourseInformations chapter={chapter} />
      </section>
    </>
  )
}

export default ChapterIdPage