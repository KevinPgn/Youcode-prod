"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const FormCreateCourse = () => {
  return <div className="max-w-[800px] mx-auto">
      <h2 className="text-2xl font-bold border-b border-gray-800 py-3 mb-5 w-fit">Create Course</h2>
      <form className="bg-[#1C1917] border border-gray-800 p-6 rounded-lg mb-10">
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
            name="presentation"
            placeholder="## Some title"
            rows={3}
            className="w-full bg-gray-800 text-white rounded px-3 py-2"
          ></Textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-1">State</label>
          <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="state" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">
          Submit
        </button>
      </form>
    </div>
}