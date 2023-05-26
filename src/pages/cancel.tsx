import Link from 'next/link'
import React from 'react'

const Cancel = () => {
    return (
        <section className='h-screen flex justify-center items-center'>
            <div className="flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Purchase canceled</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Do you want to go back to the home page?</p>
                <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default Cancel