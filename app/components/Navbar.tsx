import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <header className='bg-gray-600 p-3 dark:bg-gray-200 shadow-lg'>
            <nav className='flex justify-between items-center max-w-4xl mx-auto'>
            <Link href={"//"} className='text-2xl font-bold hover:text-3xl font-sans'>Blog<span className='text-blue-600'>IT</span></Link>
            <ul className='flex list-none'>
                <li className='flex justify-center border rounded-xl m-1 w-20 hover:w-24 hover:bg-white hover:text-gray-900'>
                    <Link href={"/"} className='p-2 '>About</Link>
                </li>
                <li className='flex justify-center bg-blue-600 rounded-xl m-1 w-20 text-center text-gray-100 hover:w-24 hover:bg-blue-800'>
                    <Link href={"/"} className='p-2'>Team</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}
