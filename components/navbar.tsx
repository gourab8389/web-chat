import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-white">
        <h1 className="text-2xl font-bold">NextAuth.js</h1>
        <div>
            <a href="/" className="mx-2">Home</a>
            <a href="/profile" className="mx-2">Profile</a>
            <a href="/api/auth/signout" className="mx-2">Sign Out</a>
        </div>
    </nav>
  )
}

export default Navbar
