import React from 'react'
import { Routes, Route } from 'react-router-dom';
import UserDashboard from '../Components/UserPanel/UserDashboard';
import BookSlot from '../Components/UserPanel/BookSlot';
import DisplayBookings from '../Components/UserPanel/DisplayBookings';
import CancelBooking from '../Components/UserPanel/CancelBooking';
import { PrivateRoutes } from './ProtectedRoutes/PrivateRoutes';

export const UserRoutes = () => {
  return (
  
    
        <Routes>
            
          <Route path='/user-dashboard' element={<PrivateRoutes expectedRole={'user'}><UserDashboard/></PrivateRoutes>}/>
          <Route path='/book-slot' element={<PrivateRoutes expectedRole={'user'}><BookSlot/></PrivateRoutes>}/>
          <Route path='/user-bookings' element={<PrivateRoutes expectedRole={'user'}><DisplayBookings/></PrivateRoutes>}/>
          <Route path='/booking-cancellation' element={<PrivateRoutes expectedRole={'user'}><CancelBooking/></PrivateRoutes>}/> 

        </Routes>

  )
}
