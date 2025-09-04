import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-end item-end gap-12 p-4 bg-gradient-to-r from-blue-400 to-purple-600 text-bold text-black-800'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
    </div>
  )
}

export default Navbar