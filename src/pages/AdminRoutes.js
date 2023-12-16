import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from '../Components/AdminPanel/AdminDashboard';
import RegisteredUser from '../Components/AdminPanel/RegisteredUser';
import Settings from '../Components/AdminPanel/Settings';
import { PrivateRoutes } from './ProtectedRoutes/PrivateRoutes';

export const AdminRoutes = () => {
  return (
  
   
    <Routes>
    {/* <Route path="/allinfo" element={<ProtectedRoute expectedRole="admin"><AllInfo /></ProtectedRoute>} /> */}
          <Route path='/admin-dashboard' element={<PrivateRoutes expectedRole={'admin'}><AdminDashboard/></PrivateRoutes>}/>
          <Route path='/registereduser' element={<PrivateRoutes expectedRole={'admin'}><RegisteredUser/></PrivateRoutes>}/>
          <Route path='/settings' element={<PrivateRoutes expectedRole={'admin'}><Settings/></PrivateRoutes>}/>
    </Routes>
   
 
  )
}
