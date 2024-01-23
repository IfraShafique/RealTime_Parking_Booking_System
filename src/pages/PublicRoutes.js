import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import RegisterForm from '../Components/Registration/RegisterForm';
import Logout from '../Components/UserPanel/Logout';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/registration' element={<RegisterForm />} />
      <Route path='/logout' element={<Logout />} />
      {/* <Route path='*' element={<div>Page not found</div>} /> */}
    </Routes>
  );
};
