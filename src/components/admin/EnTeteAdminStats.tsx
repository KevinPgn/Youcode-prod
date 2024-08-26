"use client"
import { useRouter } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export const EnTeteAdminStats = () => {
    const router = useRouter()
  return <div className="border-b border-gray-800 py-3">
    <div className="max-w-[800px] flex items-center gap-5 mx-auto">
    <Breadcrumb>
  <BreadcrumbList className="text-xs text-white">
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.back()}>Back</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400"/>
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.push('/admin')}>Admin</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
    </div>
  </div>
}

export const EnTeteAdminCourses = () => {
    const router = useRouter()
    
    return <div className="border-b border-gray-800 py-3 mb-10">
        <div className="max-w-[800px] flex items-center gap-5 mx-auto">
        <Breadcrumb>
  <BreadcrumbList className="text-xs text-white">
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.back()}>Back</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400"/>
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.push('/admin')}>Admin</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400"/>
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.push('/admin/courses')}>Courses</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
        </div>
    </div>
}

export const EnTeteAdminNewCourse = () => {
    const router = useRouter()
    return <div className="border-b border-gray-800 py-3 mb-10">
        <div className="max-w-[800px] flex items-center gap-5 mx-auto">
        <Breadcrumb>
  <BreadcrumbList className="text-xs text-white">
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.back()}>Back</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400"/>
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.push('/admin')}>Admin</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400"/>
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.push('/admin/courses')}>Courses</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400"/>
    <BreadcrumbItem>
      <BreadcrumbLink className="cursor-pointer text-gray-400 hover:text-white duration-75" onClick={() => router.push('/admin/courses/new')}>New</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
        </div>
    </div>
}