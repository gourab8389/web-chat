import { authOptions } from '@/app/lib/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import { LoginButton, LogoutButton } from './ui/buttons'

const Navbar = async () => {

    const session = await getServerSession(authOptions)

  return (
    <nav className="flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-white">
        <h1 className='text-black text-3xl font-bold'>Trilu <span className='text-fuchsia-900'>Chat</span></h1>
        {session ? 
        <div className="flex items-center gap-5">
            <Image 
            src={session.user?.image as string} alt='user profile photo'
            className='w-full h-full rounded-full mr-2'
            height={20}
            width={20}
            />
            <LogoutButton/>
        </div> 
        :
        <LoginButton/>
        }
    </nav>
  )
}

export default Navbar
