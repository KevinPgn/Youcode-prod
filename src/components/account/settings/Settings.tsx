"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { updateUser } from "@/app/account/action.account"
import { useState } from "react"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/navigation"

export const Settings = ({user}: {user: any}) => {
  const [name, setName] = useState(user.name)
  const [image, setImage] = useState(user.image)
  const router = useRouter()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateUser({name, image})
    toast.success("User updated successfully")
    router.refresh()
  }

  return (
    <div className="w-full mx-auto">
      <h2 className="text-3xl border-b border-gray-700 w-fit pb-2 font-semibold text-white mb-5">Account settings</h2>
      <div className="border border-gray-700 rounded-lg p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">Image URL</label>
            <Input id="imageUrl"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            defaultValue={user.image} className="bg-transparent border-gray-700" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} defaultValue={user.name} className="bg-transparent border-gray-700" />
          </div>
          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">Submit</Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}