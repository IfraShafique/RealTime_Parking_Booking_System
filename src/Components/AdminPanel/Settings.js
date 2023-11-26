import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <div className='w-[100%] h-[100vh] bg-black text-white'>
      <AdminNavbar/>

      <div className='text-white mt-30 lg:p-40 max-md:px-5 max-md:pt-20'>
        <div>
            <h1 className='font-bold md:text-5xl text-3xl text-center'>Settings</h1>
        </div>


            <div className='mt-20 sm:w-[70%] lg:w-[55%] mx-auto text-xl '>
                <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'>
                    Change Email Address
                </p>
                <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'>
                    Change Password
                </p>
                <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'>
                    Edit Profile Details
                </p>
                <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'>
                    <Link to={"/"}>Logout</Link>
                </p>
            </div>
      </div>

    </div>
  )
} 
