'use client'

import React, { ChangeEvent, useState } from 'react'

export default function CommentForm() {
    const [comment, setComment] = useState('')

    const handleOnchanged = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const handleSubmitComment = () => {
        if (!comment) {
            return
        }
        console.log(comment)
    }

    return (
        <div className='mt-8'>
            <label htmlFor="comment" className='block text-gray-700 text-sm font-bold mb-2'>Write comment</label>
            <input value={comment} type="text" onChange={handleOnchanged} name='comment' className='w-full py-2 px-3 border text-gray-500 border-gray-300 rounded-md focus:ring focus:border-blue-300 ' />
            <button onClick={handleSubmitComment} className='bg-blue-500 hover:bg-blue-600 font-bold text-white py-2 px-4 rounded-md mt-2 disabled:bg-gray-500'>Comment</button>
        </div>
    )
}
