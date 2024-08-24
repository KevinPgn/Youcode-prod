import { Moon } from "lucide-react"
import { Authentication } from "./Authentication"
import { Links } from "./Links"
import Link from "next/link"
export const Headers = () => {
  return <header className="h-16 border-b border-gray-800">
    <nav className="flex items-center justify-between h-full w-full max-w-[1400px] mx-auto px-4">
        <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" className="w-12 h-12" />
            <h2 className="text-xl font-semibold text-white">YouCode</h2>
        </Link>
        <Links />
        </div>

        <div className="flex items-center gap-3">
            <Authentication />
            <Moon className="w-5 cursor-pointer h-5"/>
        </div>
    </nav>
  </header>
}