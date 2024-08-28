import { AllChaptersForThisCourse } from "@/components/course/AllChaptersForThisCourse"
import { auth } from "@/lib/auth"
import prisma from "@/lib/prisma"
interface params {
    courseId: string
    chapterId: string
}
export default async function LayoutChapter({ children, params }: { children: React.ReactNode, params: params }) {
    const { courseId, chapterId } = params
    const session = await auth()
    const userId = session?.user?.id
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
                },
                include: {
                    userProgress: {
                        where: {
                            authorId: userId
                        }
                    }
                }
            },
        }
    })

    const chapters = course?.chapters || []
    const courseName = course?.name || ''

    console.log(chapters)

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