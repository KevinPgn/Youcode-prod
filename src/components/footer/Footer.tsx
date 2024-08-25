import Link from "next/link";

export const Footer = () => {
  return <footer className="w-full border-t border-gray-500 py-2 mb-2">
    <div className="flex flex-col sm:flex-row max-w-[900px] mx-auto items-center sm:items-start justify-between gap-3 px-4">
        <Link href="/">
            <div className="flex items-center cursor-pointer gap-3 mb-4 sm:mb-0">
                <img src="/logo.svg" alt="logo" className="w-10 h-10" />
                <span className="text-md text-white">YouCode</span>
            </div>
        </Link>

        <div className="flex flex-row sm:flex-col text-center sm:text-end gap-3">
            <Link href="/" className="text-sm hover:text-gray-300 duration-75 text-gray-500">Privacy</Link>
            <Link href="/" className="text-sm hover:text-gray-300 duration-75 text-gray-500">CGV</Link>
            <Link href="/courses" className="text-sm hover:text-gray-300 duration-75 text-gray-500">Courses</Link>
            <Link href="/admin" className="text-sm hover:text-gray-300 duration-75 text-gray-500">Admin</Link>
        </div>
    </div>

    <span className="text-sm text-gray-500 text-center flex items-center justify-center mt-3 px-4">© 2024 YouCode. All rights reserved. Thank you to melvynx.</span>
  </footer>
}