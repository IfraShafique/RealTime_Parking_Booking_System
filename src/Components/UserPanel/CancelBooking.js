import React from 'react'
import UserNavbar from './UserNavbar'

export default function CancelBooking() {
    return (
        <div className='w-100% bg-black h-[100vh] text-white'>
        <UserNavbar/>
      <div className='mt-30 lg:p-40 max-md:px-5 max-md:pt-20'>
        
        <h1 className='font-bold text-5xl text-center'>Bookings </h1>
        
        <div>
                  <table className="font-extralight w-[100%] md:w-[70%] mt-20 mx-auto">
                    <thead className="lg:text-2xl sm:text-sm text-[0.6rem] items-center">
                      <th className="  w-[15%] pb-5">
                        Parking Area
                      </th>
                      <th className="  w-[15%] pb-5">
                        Parking Slot
                      </th>
                      <th className=" w-[25%] pb-5">
                        Date
                      </th>
                      <th className=" w-[15%] pb-5">
                        Time
                      </th>
                      <th className=" w-[8%] pb-5">
                        Duration
                      </th>
                      <th className=" w-[15%] pb-5">
                        Mark
                      </th>
                    </thead>
    
                    <tbody className="font-[arial] font-thin lg:text-xl sm:text-sm text-[0.6rem] ">
    
    
                      <tr className="lg:text-base sm:text-sm text-[0.6rem] ">
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-15%]">
                          Area 1
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[15%]">
                          Slot 5
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[25%]">
                          20-12-2023
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[15%]">
                          6:00 PM
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[8%]">
                          2 Hours
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[15%]">
                          Booked
                        </th>
                        {/* <th className="border-b-[1px]  border-cyan-600 py-4 w-[8] text-cyan-500 hover:text-cyan-300">
                          <Link to={`/get-companies/${company._id}`}>Details</Link>
                        </th> */}
                      </tr>
    
    
                      <tr className="lg:text-base sm:text-sm text-[0.6rem] ">
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-15%]">
                          Area 2
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[15%]">
                          Slot 1
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[25%]">
                          14-12-2023
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[15%]">
                          1:00 PM
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[8%]">
                          2 Hours
                        </th>
                        <th className="border-b-[1px] border-r-[1px] border-red-700 py-4 w-[15%]">
                          Booked
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
