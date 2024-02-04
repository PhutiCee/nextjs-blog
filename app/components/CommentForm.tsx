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
        <section className="bg-white pt-8 lg:pt-16 antialiased">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">Comments </h2>
                </div>
                <form className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-400 shadow-sm">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <input id="comment"
                            className="py-2 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                            placeholder="Write a comment..." required onChange={handleOnchanged} />
                    </div>
                    <button onClick={handleSubmitComment} type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                        Post comment
                    </button>
                </form>

            </div>
        </section>
    )
}
