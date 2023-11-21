import React from 'react'
import {SendButton} from './AllButton'

export default function Contact() {
  return (
    <div id='contact' className="text-white flex md:mt-[3em] pt-20 flex-wrap text-center lg:w-[60%] xl:w-[40%] w-[100%] m-auto sm:text-2xl text-xl">
      <h1 className="font-bold md:text-6xl text-5xl text-red-600 mx-auto sm:mb-10 mb-5">Contact Us</h1>
      
      <p>Don't hesitate to reach out. Our virtual doors are always open. Your inquiries, feedback, and parking adventures matter to us!</p>

      <div className='w-[100%] mt-10 text-black'>
        <form className='flex flex-col sm:w-[60%] w-[90%] mx-auto '>
            <input type="text" name="Name" placeholder='Name' className='mb-2 rounded  pl-2 py-2' />
            <input type="email" name="Email" placeholder='Email'  className='mb-2 rounded  pl-2 py-2'/>
            <textarea name="message" id="" rows="5" placeholder='Message'  className='mb-2 rounded pl-2 py-2'></textarea>
            <SendButton label="Send"/>
        </form>
      </div>
    </div>
  )
}
