import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import RegisterForm from '../Components/Registration/RegisterForm';

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path='/register' element={<RegisterForm/>}/>

        </Routes>
    </BrowserRouter>
  )
}
