export const AllChaptersForThisCourse = ({chapters, courseName}: {chapters: any, courseName: any}) => {
  const AllChapters = chapters.data


  return <div className="max-w-[800px] mx-auto mt-3">
    <h2 className="text-2xl font-bold border-b text-white border-gray-800 py-2 mb-5 w-fit">Chapter . {courseName}</h2>
  </div>
}