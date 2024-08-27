"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { updateChapter } from "@/app/admin/action.admin"

export const DetailsChapter = ({chapter}: {chapter: any}) => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const title = formData.get('title') as string
        const state = formData.get('state') as string
        try {
            const res = await updateChapter({
                chapterId: chapter.id,
                title,
                state,
            })
            return res
        } catch (error) {
            console.log(error)
        }
    }

  return <form onSubmit={handleSubmit} className="w-[250px] bg-[#1C1917] rounded-md p-5">
    <h2 className="text-md font-normal text-white mb-5">Details</h2>
    <div className="flex flex-col gap-2">
        <p className="text-sm font-normal text-white">Title</p>
        <Input name="title" defaultValue={chapter.title} className="text-sm font-normal bg-transparent border-gray-700 text-gray-300"/>
    </div>
    {/* State */}
    <div className="flex flex-col gap-2 mt-5">
        <p className="text-sm font-normal text-white">State</p>
        <select name="state" id="state" className="text-md text-white border rounded-md p-2 cursor-pointer font-normal bg-transparent border-gray-700">
            <option value="hidden" className="text-black cursor-pointer">HIDDEN</option>
            <option value="published" className="text-black cursor-pointer">PUBLISHED</option>
        </select>
        <Button className="w-full bg-red-500 hover:bg-red-600 mt-5">Submit</Button>
    </div>
  </form>
}