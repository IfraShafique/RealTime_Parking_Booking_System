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
    <div className='flex 2xl:w-[60%] lg:w-[70%] md:w-[56%] w-[100%] m-auto md:mt-20 mt-10'>
      <form className='flex flex-wrap font-semibold text-xl max-lg:text-base text-center'>
        
        <label htmlFor='date-selection' className='sm:m-5 max-sm:m-1'>Select Date </label>
        <input type="date" name="Data" onChange={(e) => ( e.target.value)} className='text-red-800 px-14 sm:m-5 max-sm:m-1 py-1 rounded 
        xl:w-[30%] max-sm:w-[65%] max-sm:text-xs' />
        
        <label htmlFor='Start-Time' className='sm:m-5 max-sm:m-1'>Start Time </label><br/> 
        <input type="time" name="Data" onChange={(e) => ( e.target.value)} className='text-red-800 px-14 sm:m-5 max-sm:m-1 py-1 rounded xl:w-[30%]
         ml-7 max-sm:text-xs max-sm:ml-3 max-sm:w-[65%]' />
        
        <label htmlFor='select-hours' className='sm:m-5 max-sm:m-1'>Duration</label>
        <select name='hours-selection' onChange={(e) => ( e.target.value)} className='text-red-800 md:px-20 px-10 sm:m-5 max-sm:m-1 py-1 
        rounded ml-10 xl:w-[30%] max-sm:text-xs  max-sm:ml-6 xl:ml-10'>
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
