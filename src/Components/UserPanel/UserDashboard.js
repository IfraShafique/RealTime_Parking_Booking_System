import React from 'react'
import UserNavbar from './UserNavbar'
import img1 from '../Images/park1.jpg'
import img2 from '../Images/park2.jpg'
import img3 from '../Images/park3.jpg'
import { useNavigate } from 'react-router-dom'

export default function UserDashboard() {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/book-slot')
    }
  return (
    <div className='w-100% bg-black h-[100%] mx-auto text-white'>
        <UserNavbar/>
      <div className='mt-30 lg:p-40 sm:p-20 max-sm:py-16'>
        
        <h1 className='font-bold md:text-5xl text-3xl text-center'>Reserve The Parking </h1>

            <p className='sm:pt-28 pt-12 text-center font-semibold sm:text-3xl text-2xl'>Select the Parking Area</p>
        <div className='flex w-[100%] max-md:flex-wrap justify-center mx-auto'>

            <img src={img1} alt="" className='sm:w-[30%] w-[70%] sm:mr-4 mx-auto mt-10 rounded hover:shadow-lg hover:shadow-rose-700 cursor-pointer ' 
            onClick={handleImageClick} />
            <img src={img2} alt="" className='sm:w-[30%] w-[70%] sm:mr-4 mx-auto mt-10 rounded hover:shadow-lg hover:shadow-rose-700 cursor-pointer ' 
            onClick={handleImageClick}/>
            <img src={img3} alt="" className='sm:w-[30%] w-[70%] sm:mr-4 mx-auto mt-10 rounded hover:shadow-lg hover:shadow-rose-700 cursor-pointer ' 
            onClick={handleImageClick}/>
        </div>
      </div>
    </div>
  )
}
