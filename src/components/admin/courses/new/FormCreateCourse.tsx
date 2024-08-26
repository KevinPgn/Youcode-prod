"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createCourse } from "@/app/admin/action.admin"

export const FormCreateCourse = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as string;
    const state = formData.get("state") as string;

    try{
       const course = await createCourse({name, description, image, state});
       console.log(course);
    }catch(error){
      console.log(error);
    }
  }

  return <div className="max-w-[800px] mx-auto">
      <h2 className="text-2xl font-bold border-b border-gray-800 py-3 mb-5 w-fit">Create Course</h2>
      <form onSubmit={handleSubmit} className="bg-[#1C1917] border border-gray-800 p-6 rounded-lg mb-10">
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">Image</label>
          <Input
            type="text"
            id="image"
            name="image"
            placeholder="https://googleimage.com"
            className="bg-transparent border-gray-700 focus:ring-red-500"
          />
          <p className="text-xs text-gray-500 mt-1">Host and use an image. You can use Imgur to host your image.</p>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="NextReact"
            className="bg-transparent border-gray-700 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="presentation" className="block text-sm font-medium text-gray-300 mb-1">Presentation</label>
          <Textarea
            id="presentation"
            name="description"
            placeholder="## Some title"
            rows={3}
            className="bg-transparent border-gray-700 focus:ring-red-500"
          ></Textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-1">State</label>
          <Select name="state">
            <SelectTrigger className="w-full bg-transparent border-gray-700">
                <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-white border-gray-700">
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button type="submit" className="w-full text-sm bg-[#E11D48] text-white py-2 rounded hover:bg-[#E11D48]/80 transition-colors">
          Submit
        </button>
      </form>
    </div>
}