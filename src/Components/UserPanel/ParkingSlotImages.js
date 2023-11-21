import React, { useState } from 'react'
import slot1 from '../Images/slot1.jpg'
import slot2 from '../Images/slot2.jpg'
import slot3 from '../Images/slot3.jpg'
import slot4 from '../Images/slot4.jpg'
import slot5 from '../Images/slot5.jpg'
import slot6 from '../Images/slot6.jpg'

export default function ParkingSlotImages() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (image) => {
        setSelectedImage(image)
    }
  return (
    <div>
        <h1  className='pt-28 text-center font-semibold sm:text-3xl text-2xl'>Select the Parking</h1>
      <div className='flex flex-wrap md:w-[40%] mx-auto'>
      <img
          src={slot1}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            selectedImage === slot1 ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => handleImageSelect(slot1)}
        />
            <img
          src={slot2}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            selectedImage === slot2 ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => handleImageSelect(slot2)}
        />
            <img
          src={slot3}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            selectedImage === slot3 ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => handleImageSelect(slot3)}
        />
            <img
          src={slot4}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            selectedImage === slot4 ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => handleImageSelect(slot4)}
        />
            <img
          src={slot5}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            selectedImage === slot5 ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => handleImageSelect(slot5)}
        />
            <img
          src={slot6}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            selectedImage === slot6 ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => handleImageSelect(slot6)}
        />
        </div>
    </div>
  )
}
