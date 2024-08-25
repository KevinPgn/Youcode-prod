import Link from "next/link"

export const Links: React.FC = () => {
  return <div className="flex md:flex-row flex-col items-center gap-4 md:ml-3">
    <Link href="/explorer" className="hover:text-white text-md hover:underline">Explorer</Link>
    <Link href="/courses" className="hover:text-white text-md hover:underline">Courses</Link>
  </div>
}