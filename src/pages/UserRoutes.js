import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDashboard from '../Components/UserPanel/UserDashboard';
import BookSlot from '../Components/UserPanel/BookSlot';
import DisplayBookings from '../Components/UserPanel/DisplayBookings';
import CancelBooking from '../Components/UserPanel/CancelBooking';

export const UserRoutes = () => {
  return (
    <BrowserRouter>
    
        <Routes>
            
          <Route path='/user-dashboard' element={<UserDashboard/>}/>
          <Route path='/book-slot' element={<BookSlot/>}/>
          <Route path='/user-bookings' element={<DisplayBookings/>}/>
          <Route path='/booking-cancellation' element={<CancelBooking/>}/> 

        </Routes>

    </BrowserRouter>
  )
}
