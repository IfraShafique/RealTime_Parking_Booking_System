import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { toast } from 'react-toastify'
import { getRequest } from '../../Utils/requests'

export default function Settings() {
  const [edit, setEdit] = useState(null)
  const [email, setEmail] = useState('');
  const [user, setUser] = useState([])

  // fetch the user details
  const fetchAdminData = async() => {
    try {
      await getRequest('get/admin/details')
      .then((response) => {
        setUser(response.data)
      })
    } catch (error) {
      console.error("Error in fetching admn details", error)
    }
  }

  useEffect(()=> {
    fetchAdminData()
  },[])

  const changeEmailAddress = async(e) => {
    e.preventDefault()
    const token = localStorage.getItem('jwt');
    const decodedToken = jwtDecode(token)
    const userId = decodedToken._id

    try {
      const response = await axios.put(`${process.env.REACT_APP_CONNECTION_URI}/edit/email/${userId}`, { email });
      toast.success('Email Address Successfully Changed', {
        position: toast.POSITION.TOP_CENTER,
      });
      setEmail('');
      fetchAdminData()
      console.log(response.data);
      // Additional logic or UI updates based on the response can be added here
      return response.data;
    } catch (error) {
      console.error('Error in editing', error);
    }
  };


  
  return (
    <div className='w-[100%] h-[100vh] bg-black text-white'>
      <AdminNavbar/>

      <div className='text-white mt-30 lg:p-40 max-md:px-5 max-md:pt-20'>
        <div>
            <h1 className='font-bold md:text-5xl text-3xl text-center'>Settings</h1>
        </div>


              {user.map((users) => (
            <div key={user._id} className='mt-20 sm:w-[70%] lg:w-[55%] mx-auto sm:text-xl '>
                <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'
                onClick={()=> setEdit('email')}>
                    Change Email Address
                    <i class="fa-solid fa-caret-down" className="text-white"></i>
                </p>

                {edit === 'email' && (
                  <form onSubmit={changeEmailAddress} className="mb-4">
                    {/* <p className='cursor-pointer mb-4 border-b-2 pb-2 border-red-700'
                >
                  Current Email Address: <span className='text-lg font-semibold'>{users.email}</span>
                </p> */}
                  <label htmlFor="email" className="block text-sm font-medium text-white text-red-800 xl:text-2xl text-xl">
                    Change Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email || users.email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 p-2 border rounded-md w-[100%] xl:py-3 text-red-800 font-semibold xl:text-xl text-lg"
                    autoComplete="off"
                  />
                  <button type="submit" className="mt-2 bg-red-700 text-white py-2 px-10 rounded-md">
                    Save
                  </button>
                </form>
                )}
                <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'>
                    Change Password
                </p>
                <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'>
                    Edit Profile Details
                </p>
                <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'>
                    <Link to={"/"}>Logout</Link>
                </p>
            </div>
              ))}
      </div>

    </div>
  )
} 
