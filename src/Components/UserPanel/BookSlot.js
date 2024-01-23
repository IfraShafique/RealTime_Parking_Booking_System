import React, {useState} from 'react'
import UserNavbar from './UserNavbar'
import { BookBtn } from '../../Utils/AllButton';
import slot1 from '../../assets/Images/slot1.jpg'
import slot2 from '../../assets/Images/slot2.jpg'
import slot3 from '../../assets/Images/slot3.jpg'
import slot4 from '../../assets/Images/slot4.jpg'
import slot5 from '../../assets/Images/slot5.jpg'
import slot6 from '../../assets/Images/slot6.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { postRequest } from '../../Utils/requests';


export default function BookSlot() {
  const [slotImage, setSlotImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState('');
  const [bookSlots, setBookSlots] = useState([]);
  // const [parkingAreaId, setParkingAreaId] = useState('');
  const navigate = useNavigate();
  const {parkingAreaId} = useParams();
  // const [slot, setslotImage] = useState('');

    // const handleImageSelect = (image) => {
    //     setSelectedImage(image)
    // }


    const handleBookSlot = async (e) => {
      try {
        const token = localStorage.getItem('jwt');
        const decodedToken = jwtDecode(token)
       e.preventDefault();
      //  ectract the slot number
       const slotNumber = slotImage ? slotImage.replace(/^.*?(slot\d+).*?\.jpg$/, '$1') : '';

      //  change the date into ISO string
      const isoDateString = new Date(selectedDate).toISOString();
        

      if (bookSlots.some((slot) => slot.slotNumber === slotNumber && slot.selectedTime === selectedTime)) {
        toast.error('Slot is already booked at this time', {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

        const response = await postRequest(`slotBooking/${decodedToken._id}`,{
          selectedDate: isoDateString,
          selectedTime,
          duration,
          slotImage: slotNumber,
          parkingAreaId: parkingAreaId,
        })
      
          setBookSlots([...bookSlots, { slotNumber, selectedTime }]);
          toast.success('Successfully Booked', {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate('/user-bookings');
          
          if (response.status === 400) {
          // Slot is not available
          toast.error('Slot is not available', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        
      } catch (error) {
        toast.error('Booking Failed',
        { POSITION: toast.POSITION.TOP_CENTER});
      }
    }
   
    const slotImages = [slot1, slot2, slot3, slot4, slot5, slot6];
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
        xl:w-[30%] max-sm:w-[65%] max-sm:text-xs' 
        // show the current date 
        min={new Date().toLocaleDateString('en-CA')}
         />
        
        <label htmlFor='Start-Time' className='sm:m-5 max-sm:m-1'>Start Time </label><br/> 
        <input type="time" name="Data" onChange={(e) => setSelectedTime( e.target.value)} className='text-red-800 px-14 sm:m-5 max-sm:m-1 py-1 rounded xl:w-[30%]
         ml-7 max-sm:text-xs max-sm:ml-3 max-sm:w-[65%]' />
        
        <label htmlFor='select-hours' className='sm:m-5 max-sm:m-1'>Duration</label>
        <select name='hours-selection' onChange={(e) => setDuration( e.target.value)} className='text-red-800 md:px-20 px-10 sm:m-5 max-sm:m-1 py-1 
        rounded ml-10 xl:w-[30%] max-sm:text-xs  max-sm:ml-6 xl:ml-10'>
            <option className='bg-black font-bold hover:bg-red-700 hover:text-white'>--</option>
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
        
        {/* slots images */}
        <div className='flex flex-wrap md:w-[40%] mx-auto'>
            {slotImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slot ${index + 1}`}
                className={`w-[30%] mx-auto mt-10 rounded cursor-pointer ${
                  (slotImage === image && !bookSlots.some((slot) => slot.slotNumber === `slot${index + 1}` && slot.selectedTime === selectedTime))
                    ? 'hover:shadow-lg hover:shadow-green-500'
                    : 'border-8 border-red-500'
                }`}
                onClick={() => setSlotImage(image)}
              />
            ))}
          </div>
    </div>
      </div>

      <div className='flex justify-center lg:-mt-[5em] mt-10 pb-10'>
        <BookBtn label={"Book Slot"} onClick={handleBookSlot}/>
      </div>
    </div>
    
  );
}
