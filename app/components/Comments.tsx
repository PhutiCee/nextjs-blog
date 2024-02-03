import React from 'react'

export default function Comments() {
    return (
        <div className='mt-16'>
            <h2 className='text-2xl font-bold'>Comments</h2>
            <ul>
                <li className='mb-4 bg-gray-600 p-2'>
                    <div className='flex items-center mb-2'>
                        <div className='text-blue-500 font-bold mr-2'>joe cee</div>
                        <div className='text-gray-400'>10 jan 2024</div>
                    </div>
                    <p>awesome !</p>
                </li>
            </ul>
        </div>
    )
}
