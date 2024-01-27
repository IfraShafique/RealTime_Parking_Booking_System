import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { getRequest } from '../../Utils/requests'

export default function RegisteredUser() {

  const [users, setUsers] =useState([])
  const userDetails = () => {
    try {
      getRequest('get/users/details').then((response)=> {
        setUsers(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=> {
    userDetails()
  },[])
  return (
    <div className='w-[100%] h-[100%] bg-black text-white'>
      <AdminNavbar/>

      <div className='mt-30 lg:p-40 max-md:px-5 max-md:pt-20'>
    
    <h1 className='font-bold md:text-5xl text-3xl text-center'>Registered Users </h1>
    
    <div>
              <table className="font-extralight w-[100%] md:w-[70%] mt-20 mx-auto">
                <thead className="lg:text-2xl sm:text-sm text-[0.6rem] items-center">
                  <th className="border-b-[1px]  border-red-700  w-[15%] pb-5">
                    Name
                  </th>
                  <th className="border-b-[1px]  border-red-700  w-[15%] pb-5">
                   Email
                  </th>
                  <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    Contact
                  </th>
                  <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    Total Bookings
                  </th>
                  {/* <th className="border-b-[1px]  border-red-700 w-[8%] pb-5">
                    Duration
                  </th>
                  <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    Mark
                  </th> */}
                </thead>

                <tbody className="font-[arial] font-thin lg:text-xl sm:text-sm text-[0.6rem] ">

                  {users.map((user) =>(
                  <tr key={user._id} 
                  className="lg:text-base sm:text-sm text-[0.6rem] ">
                    <th className="border-b-[1px] border-red-700 py-4 w-15%]">
                      {user.name}
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      {user.email}
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      {user.contact}                 
                       </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                    {user.slotBooking.length}
                    </th>
                    
                  </tr>
                  )) }

                </tbody>
              </table>
            </div>

  </div>
</div>
)
}

