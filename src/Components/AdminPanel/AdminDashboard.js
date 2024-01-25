import React, {useEffect, useState} from 'react'
import AdminNavbar from './AdminNavbar'
import Feedback from './Feedback'
import { getRequest } from '../../Utils/requests';

export default function AdminDashboard() {

  const [bookings, setBookings] = useState([]);

  // fetch bookings
  useEffect(() => {
    const fetchBookings = () =>{
   
      getRequest(`get/users/Bookings`)
        .then((response) => {
         
          setBookings(response.data);
        })
        .catch((error) => {
          console.log(error);
        }); 
    }
    fetchBookings()
  }, []);  
  return (
    <div className='w-[100%] h-[100%] bg-black text-white'>
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
                    Slot
                    </th>
                    <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    Date
                    </th>
                    <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    Time
                    </th>
                    <th className="border-b-[1px]  border-red-700 w-[8%] pb-5">
                    Duration
                    </th>
                   
                  
                </thead>

                <tbody className="font-[arial] font-thin lg:text-xl sm:text-sm text-[0.6rem] ">
                {bookings.map((booking) => (
                  <tr key={booking._id} className="lg:text-base sm:text-sm text-[0.6rem] ">

                  <th className="border-b-[1px]  border-red-700 w-[15%] py-4">
                    {booking.bookUser.name}
                  </th>
                  
                  
                   <th className="border-b-[1px] border-red-700 py-4 w-15%]">
                      {booking.selectedImage}
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      {booking.slotImage}
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      {booking.selectedDate.toString().split('T')[0]}
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%]">
                      {booking.selectedTime}
                    </th>
                    <th className="border-b-[1px] border-red-700 py-4 w-[8%]">
                      {booking.duration}
                    </th>
                    
                  </tr>
                  ))}
                  
                  
                </tbody>
              </table>

              <Feedback/>
            </div>

  </div>
</div>
)
}

