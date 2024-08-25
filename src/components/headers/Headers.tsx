"use client"
import { Moon, Menu, X } from "lucide-react"
import { Authentication } from "./Authentication"
import { Links } from "./Links"
import Link from "next/link"
import { useState } from "react"

export const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return <header className="h-16 border-b border-gray-800">
    <nav className="flex items-center justify-between h-full w-full max-w-[1400px] mx-auto px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="logo" className="w-12 h-12" />
              <h2 className="text-xl font-semibold text-white">YouCode</h2>
          </Link>
          <div className="hidden md:block">
            <Links />
          </div>
        </div>

        <div className="flex items-center gap-3">
            <Authentication />
            <Moon className="w-5 cursor-pointer h-5"/>
            <Menu 
              className="w-6 h-6 cursor-pointer md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
        </div>
    </nav>
    <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`flex flex-col items-center justify-center h-full transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <X 
          className="absolute top-4 right-4 w-6 h-6 cursor-pointer text-white"
          onClick={() => setIsMenuOpen(false)}
        />
        <Links />
      </div>
    </div>
  </header>
}