"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export const EnTeteAdminStats = () => {
    const router = useRouter()
  return <div className="border-b border-gray-800 py-1">
    <div className="max-w-[800px] flex items-center gap-5 mx-auto">
        <Button onClick={() => router.back()} variant="default" className="text-xs bg-transparent hover:bg-[#111111]">Back</Button>
        <h1 onClick={() => router.push("/admin")} className="text-xs cursor-pointer hover:text-white duration-75">Admin</h1>
    </div>
  </div>
}