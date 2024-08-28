import { BtnCompleteTheCourse } from "./BtnCompleteTheCourse";

export const CourseInformations = ({ chapter }: { chapter: any }) => {
  return (
    <div className="bg-[#1C1917] p-5 border rounded-lg border-gray-800">
      <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
      <BtnCompleteTheCourse chapterId={chapter.id} />
    </div>
  );
};