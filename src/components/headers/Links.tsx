import Link from "next/link"

export const Links = () => {
  return <div className="flex items-center gap-4 ml-3">
    <Link href="/" className="hover:text-white text-md hover:underline">Explorer</Link>
    <Link href="/" className="hover:text-white text-md hover:underline">Courses</Link>
  </div>
}