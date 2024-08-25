import { AdminStats } from '@/components/admin/AdminStats'
import { EnTeteAdminStats } from '@/components/admin/EnTeteAdminStats'
import Auth from '@/lib/middleware'
import React from 'react'

const AdminPage = () => {
  return (
    <Auth>
        <section>
            <EnTeteAdminStats />
            <AdminStats />
        </section>
    </Auth>
  )
}

export default AdminPage