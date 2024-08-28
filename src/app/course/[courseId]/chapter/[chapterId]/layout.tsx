import { AllChaptersForThisCourse } from "@/components/course/AllChaptersForThisCourse"
import prisma from "@/lib/prisma"
interface params {
    courseId: string
    chapterId: string
}
export default async function LayoutChapter({ children, params }: { children: React.ReactNode, params: params }) {
    const { courseId, chapterId } = params
    // get all chapters for this course and course name
    const course = await prisma.course.findUnique({
        where: {
            id: courseId
        },
        select: {
            name: true,
            chapters: {
                where: {
                    state: "published",
                }
            }
        }
    })

    const chapters = course?.chapters || []
    const courseName = course?.name || ''

    return (
        <div className="flex p-5 h-[600px] gap-5">
            <div className="w-[300px]">
                <AllChaptersForThisCourse chapters={chapters} courseName={courseName} courseId={courseId} />
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}