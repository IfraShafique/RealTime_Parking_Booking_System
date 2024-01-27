import React,{useState} from 'react'
import {SendButton} from '../Utils/AllButton'
import { postRequest } from '../Utils/requests';
import { ToastContainer, toast } from'react-toastify';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // contact us form handling
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    try {
      const response = await postRequest(`contactUs`,
      {name, email, message});
      setName('');
      setEmail('');
      setMessage('');
      toast.success('Message sent successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(response.data);
      
      return response.data;


    } catch (error) {
      console.error('Error in sending message', error.response.data.error);
      toast.error(error.response.data.error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
  return (
    
    <div id='contact' className="text-white flex md:mt-[3em] pt-20 flex-wrap text-center lg:w-[60%] xl:w-[40%] w-[100%] m-auto sm:text-2xl text-xl">
      <ToastContainer/>
      <h1 className="font-bold md:text-6xl text-5xl text-red-600 mx-auto sm:mb-10 mb-5">Contact Us</h1>
      <p>Don't hesitate to reach out. Our virtual doors are always open. Your inquiries, feedback, and parking adventures matter to us!</p>

    
      <div className='w-[100%] mt-10 text-black'>
        <form className='flex flex-col sm:w-[60%] w-[90%] mx-auto ' onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder='Name' className='mb-2 rounded  pl-2 py-2' onChange={(e)=> setName(e.target.value)}/>
            <input type="email" name="Email" placeholder='Email'  className='mb-2 rounded  pl-2 py-2' onChange={(e)=> setEmail(e.target.value)}/>
            <textarea name="message" id="" rows="5" placeholder='Message'  className='mb-2 rounded pl-2 py-2' onChange={(e)=> setMessage(e.target.value)}></textarea>
            <SendButton label="Send" />
        </form>
      </div>
    </div>
  )
}
