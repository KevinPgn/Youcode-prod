import React from 'react';
import { Button } from '../ui/button';
import { CircleDashed } from 'lucide-react';

export const ModalCourse = ({setModalOpen, course, userId}: {setModalOpen: (open: boolean) => void, course: any, userId: string}) => {  
    return (
    <div onClick={() => setModalOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div
      onClick={(e) => e.stopPropagation()}
      className='max-w-[700px] flex gap-5 w-full h-fit bg-[#0C0A09] border border-[#221f1e] rounded-lg p-5'>
        <div className='w-[65%] bg-[#292524] p-5 rounded-lg border border-[#221f1e]'>
            <div className='flex items-center gap-5'>
                {course.image ? (
                    <img src={course.image} alt={course.name} width={100} height={100} className='w-14 h-14 rounded-md' />
                ) : (
                    <div className='w-14 h-14 rounded-md flex justify-center items-center text-xl font-bold text-white bg-gray-800'>{course.name.charAt(0)}</div>
                )}
                <div className='flex flex-col gap-3'>
                    <h1 className='text-lg font-bold text-white'>{course.name}</h1>
                    <div className='flex items-center gap-2'>
                        <img src={course.author.image} alt={course.author.name} width={100} height={100} className='w-10 h-10 rounded-full' />
                        <p className='text-sm font-normal text-gray-400'>{course.author.name}</p>
                    </div>
                </div>
            </div>

            <h1 className='text-3xl font-bold text-white mt-5'>{course.name}</h1>
            <div className='mt-5 text-sm text-gray-400'
            dangerouslySetInnerHTML={{ __html: course.description.slice(0, 100) + "..."}}
            ></div>
            <div className="mt-5">
                {userId === course.author.id ? (
                    <p className="text-sm text-yellow-500">You are the author of this course.</p>
                ) : (
                    <Button
                        onClick={() => {
                            // Logic to join the course
                            console.log("Joining course:", course.id);
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Join Course
                    </Button>
                )}
            </div>
        </div>
        <div className='w-[35%] h-fit bg-[#292524] p-5 rounded-lg border border-[#221f1e]'>
            <h1 className='text-lg font-bold text-white'>Chapters</h1>
            <div className='flex flex-col gap-3 mt-5'>
                {course.chapters.map((chapter: any) => (
                    <div key={chapter.id} className='flex items-center border border-[#453f3c] cursor-pointer hover:bg-[#131110] duration-75 p-2 gap-3 px-5 rounded-md'>
                        <CircleDashed className='w-5 h-5 text-gray-400' />
                        <p className='text-md font-normal text-gray-400'>{chapter.title}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}