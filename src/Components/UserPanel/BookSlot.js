import React from 'react'
import UserNavbar from './UserNavbar'
import ParkingSlotImages from './ParkingSlotImages';
import { BookBtn } from '../AllButton';

export default function BookSlot() {
  return (
    <div className='w-100% bg-black h-[100%] text-white mx-auto'>
   
    <UserNavbar/>
  <div className='mt-30 lg:p-40'>
    
    <h1 className='font-bold text-5xl'>Slot Selection </h1>

        <p className='md:pt-28 pt-20 text-center font-semibold sm:text-3xl text-2xl'>Select the Slot</p>
    <div className='flex lg:w-[60%] m-auto md:mt-20 mt-10'>
      <form className='flex flex-wrap font-semibold text-xl max-lg:text-base'>
        
        <label htmlFor='date-selection' className='m-5'>Select Date </label>
        <input type="date" name="Data" onChange={(e) => ( e.target.value)} className='text-red-800 px-14 m-5 py-1 rounded' />
        
        <label htmlFor='Start-Time' className='m-5'>Start Time </label><br/> 
        <input type="time" name="Data" onChange={(e) => ( e.target.value)} className='text-red-800 px-14 m-5 py-1 rounded' />
        
        <label htmlFor='select-hours' className='m-5'>Duration</label>
        <select name='hours-selection' onChange={(e) => ( e.target.value)} className='text-red-800 md:px-20 px-10 m-5 py-1 rounded'>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>1 hour</option>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>2 hours</option>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>3 hours</option>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>4 hours</option>
        </select>
        </form>

        </div>
      {/* Parking slots */}
        <ParkingSlotImages/>
      </div>

      <div className='flex justify-center lg:-mt-[5em] mt-10 pb-10'>
        <BookBtn label={"Book Slot"}/>
      </div>
    </div>
    
  );
}
