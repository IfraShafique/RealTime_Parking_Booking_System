import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from '../Components/AdminPanel/AdminDashboard';
import RegisteredUser from '../Components/AdminPanel/RegisteredUser';
import Settings from '../Components/AdminPanel/Settings';

export const AdminRoutes = () => {
  return (
   <BrowserRouter>
   
    <Routes>
          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/registereduser' element={<RegisteredUser/>}/>
          <Route path='settings' element={<Settings/>}/>
    </Routes>
   
   </BrowserRouter>
  )
}
