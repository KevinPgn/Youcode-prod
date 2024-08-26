export const AllChaptersForThisCourse = ({chapters, courseName}: {chapters: any, courseName: any}) => {
  const AllChapters = chapters.data

  return <div className="max-w-[800px] h-[600px] mx-auto mt-3">
    <h2 className="text-2xl font-bold border-b text-white border-gray-800 py-2 mb-5 w-fit">Chapter . {courseName}</h2>

    <div className="bg-[#1e1e1e] border border-gray-800 p-5 mb-5 rounded-lg">
      <div className="flex flex-col gap-5">
        <h2 className="text-sm font-semibold text-gray-400">Chapters</h2>
        {AllChapters.length === 0 ? (
          <p className="text-center text-gray-400">No chapters available for this course. Start by creating a chapter.</p>
        ) : (
          AllChapters.map((chapter: any) => (
            <div key={chapter.id}>
              <h3 className="text-lg font-bold">{chapter.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
}