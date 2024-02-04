
'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        // <header className='bg-gray-600 p-3 dark:bg-gray-200 shadow-lg'>
        //     <nav className='flex justify-between items-center max-w-4xl mx-auto'>
        //     <Link href={"//"} className='text-2xl font-bold font-sans'>Blog<span className='text-blue-600'>IT</span></Link>
        //     <ul className='flex list-none'>
        //         <li className='flex justify-center border rounded-xl m-1 w-20 hover:w-24 hover:bg-white hover:text-gray-900'>
        //             <Link href={"/about"} className='p-2 '>About</Link>
        //         </li>
        //         <li className='flex justify-center border rounded-xl m-1 w-20 hover:w-24 hover:bg-white hover:text-gray-900'>
        //             <Link href={"/contact"} className='p-2 '>Contact</Link>
        //         </li>
        //         <li className='flex justify-center border rounded-xl m-1 w-20 hover:w-24 hover:bg-white hover:text-gray-900'>
        //             <Link href={"/team"} className='p-2'>Team</Link>
        //         </li>
        //     </ul>
        // </nav>
        // </header>

        <div>
            <nav className="bg-gray-600 border-gray-200 shadow-md dark:bg-gray-300">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:max-w-4xl lg:max-w-5xl">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <h2 className="self-center text-2xl font-bold whitespace-nowrap">Blog<span className='text-blue-500'>IT</span></h2>
                    </Link>
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-300 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-300 md:dark:bg-gray-300 dark:border-gray-700">
                            <li>
                                <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent">
                                    Contacts
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent">
                                    Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
