import React from 'react'
import AdminNavbar from './AdminNavbar'

export default function AdminDashboard() {
  return (
    <div className='w-[100%] h-[100vh] bg-black text-white'>
      <AdminNavbar/>

      <div className='mt-30 lg:p-40 max-md:px-5 max-md:pt-20'>
    
    <h1 className='font-bold md:text-5xl text-3xl text-center'>All Bookings </h1>
    
    <div>
              <table className="font-extralight w-[100%] md:w-[70%] mt-20 mx-auto">
                <thead className="lg:text-2xl sm:text-sm text-[0.6rem] items-center">
                <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    User Name
                  </th>
                  <th className="border-b-[1px]  border-red-700  w-[15%] pb-5">
                    Parking Area
                  </th>
                  <th className="border-b-[1px]  border-red-700  w-[15%] pb-5">
                    Parking Slot
                  </th>
                  <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    Data
                  </th>
                  <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    Time
                  </th>
                  <th className="border-b-[1px]  border-red-700 w-[8%] pb-5">
                    Duration
                  </th>
                  
                </thead>

                <tbody className="font-[arial] font-thin lg:text-xl sm:text-sm text-[0.6rem] ">

                  <tr className="lg:text-base sm:text-sm text-[0.6rem] ">
                <th className="border-b-[1px] border-red-700 py-4 w-15%]">
                      Dummy1
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-15%]">
                      Area 1
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      Slot 5
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      20-12-2023
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      6:00 PM
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[8%]">
                      2 Hours
                    </th>
                    
                    {/* <th className="border-b-[1px]  border-cyan-600 py-4 w-[8] text-cyan-500 hover:text-cyan-300">
                      <Link to={`/get-companies/${company._id}`}>Details</Link>
                    </th> */}
                  </tr>


                  <tr className="lg:text-base sm:text-sm text-[0.6rem] ">
                  <th className="border-b-[1px] border-red-700 py-4 w-15%]">
                      Dummy2
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-15%]">
                      Area 2
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      Slot 1
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      14-12-2023
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      1:00 PM
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[8%]">
                      2 Hours
                    </th>
                    
                    {/* <th className="border-b-[1px]  border-cyan-600 py-4 w-[8] text-cyan-500 hover:text-cyan-300">
                      <Link to={`/get-companies/${company._id}`}>Details</Link>
                    </th> */}
                  </tr>
                  
                </tbody>
              </table>
            </div>

  </div>
</div>
)
}

