import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Registration/Login';
import RegisterForm from './Components/Registration/RegisterForm';
import UserDashboard from './Components/UserPanel/UserDashboard';
import BookSlot from './Components/UserPanel/BookSlot';
import DisplayBookings from './Components/UserPanel/DisplayBookings';
import CancelBooking from './Components/UserPanel/CancelBooking';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/user-dashboard' element={<UserDashboard/>}/>
          <Route path='/book-slot' element={<BookSlot/>}/>
          <Route path='/user-bookings' element={<DisplayBookings/>}/>
          <Route path='/booking-cancellation' element={<CancelBooking/>}/> 
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
