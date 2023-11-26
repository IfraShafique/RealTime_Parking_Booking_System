import React from 'react';
import { PublicRoutes } from './pages/PublicRoutes';
import { UserRoutes } from './pages/UserRoutes';
import { AdminRoutes } from './pages/AdminRoutes';

function App() {
  return (
    <>
      <PublicRoutes/>
      <UserRoutes/>
      <AdminRoutes/>
    </>
  );
}

export default App;





{/* <BrowserRouter>

  <Routes> */}
    {/* <Route path="/" element={<Home/>}/> */}

    {/*User Routes  */}
    {/* <Route path='/login' element={<Login/>}/> */}
    {/* <Route path='/register' element={<RegisterForm/>}/> */}
    {/* <Route path='/user-dashboard' element={<UserDashboard/>}/>
    <Route path='/book-slot' element={<BookSlot/>}/>
    <Route path='/user-bookings' element={<DisplayBookings/>}/>
    <Route path='/booking-cancellation' element={<CancelBooking/>}/>  */}

    {/* Admin Routes */}
    {/* <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
    <Route path='/registereduser' element={<RegisteredUser/>}/> */}

  {/* </Routes>

</BrowserRouter> */}