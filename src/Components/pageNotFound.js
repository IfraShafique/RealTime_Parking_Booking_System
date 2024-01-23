import React from 'react'
import pageNotFoundError from '../assets/Images/error.jpg'

export default function pageNotFound() {
  return (
    <div>
      
              <img src={pageNotFoundError} alt='404 Error' className='mx-auto' />
              <h1 className='md:text-5xl text-2xl text-center font-bold text-red-700'> Oops! Page Not Found</h1>
    </div>
  )
}
