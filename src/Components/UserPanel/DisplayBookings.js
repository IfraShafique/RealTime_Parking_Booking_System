import React, {useEffect, useState} from 'react'
import UserNavbar from './UserNavbar'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { getRequest } from '../../Utils/requests';

export default function DisplayBookings() {
  const [bookings, setBookings] = useState([]);
  // const {userId }= useParams();

  useEffect(() => {
    const fetchBookings = () =>{
      const token = localStorage.getItem("jwt");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;
   
      getRequest(`getSlotBooking/${userId}`)
        .then((response) => {
          // console.log("API Response:", response.data);
          setBookings(response.data.slotBooking);
        })
        .catch((error) => {
          console.log(error);
        }); 
    }
    fetchBookings()
  }, []);  
 
  return (
    <div className='w-100% bg-black h-[100%] text-white'>
    <UserNavbar/>
  <div className='mt-30 lg:p-40 max-md:px-5 max-md:pt-20'>
    
    <h1 className='font-bold text-5xl text-center'>Bookings </h1>
    
    <div>
              <table className="font-extralight w-[100%] md:w-[70%] mt-20 mx-auto">
                <thead className="lg:text-2xl sm:text-sm text-[0.6rem] items-center">
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
                  <th className="border-b-[1px]  border-red-700 w-[15%] pb-5">
                    Mark
                  </th>
                </thead>

                <tbody className="font-[arial] font-thin lg:text-xl sm:text-sm text-[0.6rem] ">
 
                  {bookings.map((booking) =>(
                  <tr key= {booking._id} className="lg:text-base sm:text-sm text-[0.6rem] ">
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
                    <th className="border-b-[1px] border-red-700 py-4 w-[15%] text-green-700">
                      Booked
                    </th>
                  </tr>
                  ))} 
                  
                </tbody>
              </table>
            </div>

  </div>
</div>
)
}

