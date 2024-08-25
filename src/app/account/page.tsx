import { Account } from '@/components/account/Account'
import { auth } from '@/lib/auth'
import Auth from '@/lib/middleware'
import React from 'react'

const AccountPage = async () => {
  const session = await auth()
  const user = session?.user
  
    return (
        <Auth>   
    <section className="max-w-[500px] h-[600px] mx-auto mt-5">
      <Account user={user}/>
    </section>
    </Auth>
  )
}

export default AccountPage