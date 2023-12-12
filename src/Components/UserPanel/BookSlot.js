import React, {useState} from 'react'
import UserNavbar from './UserNavbar'
import ParkingSlotImages from './ParkingSlotImages';
import { BookBtn } from '../../Utils/AllButton';
import slot1 from '../../assets/Images/slot1.jpg'
import slot2 from '../../assets/Images/slot2.jpg'
import slot3 from '../../assets/Images/slot3.jpg'
import slot4 from '../../assets/Images/slot4.jpg'
import slot5 from '../../assets/Images/slot5.jpg'
import slot6 from '../../assets/Images/slot6.jpg'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function BookSlot() {
  const [slotImage, setSlotImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState('');
  const [bookSlots, setBookSlots] = useState([]);
  // const [slot, setslotImage] = useState('');

    // const handleImageSelect = (image) => {
    //     setSelectedImage(image)
    // }


    const handleBookSlot = async (e) => {
      try {
       e.preventDefault();
      //  ectract the slot number
       const slotNumber = slotImage ? slotImage.replace(/^.*?(slot\d+).*?\.jpg$/, '$1') : '';

      //  change the date into ISO string
      const isoDateString = new Date(selectedDate).toISOString();
        //  change the time into ISO string

        if(bookSlots.some((slot)=> slot.slotNumber === slotNumber && slot.selectedTime === selectedTime)){
          toast.error('Slot is already booked at this time', {
            POSITION: toast.POSITION.TOP_CENTER
          })
          return;
        }

        await axios.post(`${process.env.REACT_APP_CONNECTION_URI}/slotBooking`,
        {
            selectedDate: isoDateString,
            selectedTime,
            duration,
            slotImage: slotNumber,      
        })

          setBookSlots([...bookSlots, { slotNumber, selectedTime }]);
          toast.success('Successfully Booked',
        { POSITION: toast.POSITION.TOP_CENTER});
        

      } catch (error) {
        toast.error('Booking Failed',
        { POSITION: toast.POSITION.TOP_CENTER});
      }
    }
   
  return (
    <div className='w-100% bg-black h-[100%] text-white mx-auto'>
   
    <UserNavbar/>
    <ToastContainer/>
  <div className='mt-30 lg:p-40'>
    
    <h1 className='font-bold text-5xl'>Slot Selection </h1>

        <p className='md:pt-28 pt-20 text-center font-semibold sm:text-3xl text-2xl'>Select the Slot</p>
    <div className='flex 2xl:w-[60%] lg:w-[70%] md:w-[56%] w-[100%] m-auto md:mt-20 mt-10'>
      <form className='flex flex-wrap font-semibold text-xl max-lg:text-base text-center'>
        
        <label htmlFor='date-selection' className='sm:m-5 max-sm:m-1'>Select Date </label>
        <input type="date" name="Data" onChange={(e) => setSelectedDate( e.target.value)} className='text-red-800 px-14 sm:m-5 max-sm:m-1 py-1 rounded 
        xl:w-[30%] max-sm:w-[65%] max-sm:text-xs' />
        
        <label htmlFor='Start-Time' className='sm:m-5 max-sm:m-1'>Start Time </label><br/> 
        <input type="time" name="Data" onChange={(e) => setSelectedTime( e.target.value)} className='text-red-800 px-14 sm:m-5 max-sm:m-1 py-1 rounded xl:w-[30%]
         ml-7 max-sm:text-xs max-sm:ml-3 max-sm:w-[65%]' />
        
        <label htmlFor='select-hours' className='sm:m-5 max-sm:m-1'>Duration</label>
        <select name='hours-selection' onChange={(e) => setDuration( e.target.value)} className='text-red-800 md:px-20 px-10 sm:m-5 max-sm:m-1 py-1 
        rounded ml-10 xl:w-[30%] max-sm:text-xs  max-sm:ml-6 xl:ml-10'>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>1 hour</option>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>2 hours</option>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>3 hours</option>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>4 hours</option>
        </select>
        </form>

        </div>
      {/* Parking slots */}
        {/* <ParkingSlotImages/> */}
        <div>
        <h1  className='pt-28 text-center font-semibold sm:text-3xl text-2xl'>Select the Parking</h1>
      <div className='flex flex-wrap md:w-[40%] mx-auto'>
      <img
          src={slot1}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            (slotImage === slot1 && !bookSlots.some((slot) => slot.slotNumber === 'slot1' && slot.selectedTime === selectedTime)) ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => setSlotImage(slot1)}
        />
            <img
          src={slot2}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            (slotImage === slot2 && !bookSlots.some((slot) => slot.slotNumber === 'slot2' && slot.selectedTime === selectedTime)) ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => setSlotImage(slot2)}
        />
            <img
          src={slot3}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            (slotImage === slot3 && !bookSlots.some((slot) => slot.slotNumber === 'slot3' && slot.selectedTime === selectedTime)) ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() =>setSlotImage(slot3)}
        />
            <img
          src={slot4}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            (slotImage === slot4 && !bookSlots.some((slot) => slot.slotNumber === 'slot4' && slot.selectedTime === selectedTime)) ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() => setSlotImage(slot4)}
        />
            <img
          src={slot5}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            (slotImage === slot5 && !bookSlots.some((slot) => slot.slotNumber === 'slot5' && slot.selectedTime === selectedTime)) ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() =>setSlotImage(slot5)}
        />
            <img
          src={slot6}
          alt=""
          className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
            (slotImage === slot6 && !bookSlots.some((slot) => slot.slotNumber === 'slot6' && slot.selectedTime === selectedTime)) ? 'bg-green-700 z-10 border-8 border-green-500' : 'hover:shadow-lg hover:shadow-green-500'
          }`}
          onClick={() =>setSlotImage(slot6)}
        />
        </div>
    </div>
      </div>

      <div className='flex justify-center lg:-mt-[5em] mt-10 pb-10'>
        <BookBtn label={"Book Slot"} onClick={handleBookSlot}/>
      </div>
    </div>
    
  );
}
