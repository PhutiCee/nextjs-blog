import React from 'react';

export default function Loading() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50 h-12 w-12'></div>
            <h1 className='ml-3 text-lg text-gray-700'>Loading...</h1>
        </div>
    );
}
