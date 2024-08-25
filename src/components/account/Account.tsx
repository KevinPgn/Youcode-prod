import Link from "next/link"
import { LogOut } from "lucide-react"

export const Account = ({user}: {user: any}) => {
  return <div className="w-full p-5 border border-[#25211f] rounded-xl bg-[#1C1917]">
    <div className="flex items-center gap-5">
        <img src={user.image} alt="user image" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1">
            <p className="text-white text-md">{user.email}</p>
            <p className="text-gray-400 text-sm">{user.name}</p>
        </div>
    </div>
    <div className="flex mt-5 flex-col gap-2 mb-5">
        <Link href="/account/settings" className="text-white text-center w-full p-2 border border-[#312b28] hover:bg-[#25211f] hover:border-[#645a55] duration-300 rounded-md text-sm">Settings</Link>
        <Link href="/account/admin" className="text-white text-center w-full p-2 border border-[#312b28] hover:bg-[#25211f] hover:border-[#645a55] duration-300 rounded-md text-sm">Admin</Link>
    </div>

    <div className="flex justify-end">
        <Link href="/api/auth/signout" className="text-white flex gap-2 w-fit px-5 items-end justify-end text-xs p-2 border border-[#312b28] hover:bg-[#25211f] hover:border-[#645a55] duration-300 rounded-md"><LogOut className="w-4 h-4"/>Logout</Link>
    </div>
  </div>
}