import { Settings } from '@/components/account/settings/Settings'
import { auth } from '@/lib/auth'
import Auth from '@/lib/middleware'
import React from 'react'

const SettingsPage = async () => {
  const session = await auth()
  const user = session?.user
  
    return (
    <Auth>
    <section className='max-w-[800px] h-[600px] mx-auto mt-5'>
        <Settings user={user}/>
    </section>
    </Auth>
  )
}

export default SettingsPage