import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getRequest, putRequest } from '../../Utils/requests';
import { passwordRegex } from '../../Utils/validations';

export default function Settings() {
  const [edit, setEdit] = useState(null);
  const token = localStorage.getItem('jwt');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken._id;
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  });
  const [user, setUser] = useState([]);

  // fetch the user details
  const fetchAdminData = async () => {
    try {
      const response = await getRequest('get/admin/details');
      setUser(response.data);
    } catch (error) {
      console.error('Error in fetching admin details', error.response.data.error);
    }
  };

  // use useEffect to fetchh the details of the admin
  useEffect(() => {
    fetchAdminData();
  }, []);

  // input field change handler
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Submit Function
  const changeDetails = async (e, field) => {
    e.preventDefault();
    
     // Check if the field value has changed
  if (formData[field] === user[0][field]) {
    // No changes, return early
    setEdit(null);
    return;
  }
    try {
      const response = await putRequest
      (`edit/email/${userId}`,
        { [field]: formData[field] }
      );

      
      fetchAdminData();
      
      toast.success(`${field.charAt(0).toUpperCase() + field.slice(1)} Successfully Changed`, {
      position: toast.POSITION.TOP_CENTER,
            });
      setEdit(null);
      console.log(response.data);
      // Additional logic or UI updates based on the response can be added here
      return response.data;
    } catch (error) {
      toast.error(`Error in editing ${field}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error(`Error in editing ${field}`, error.response);
    }
  };

  // Render the form fields
  const renderFormFields = (field) => (
    <form onSubmit={(e) => changeDetails(e, field)} className='mb-4'>
      <label htmlFor={field} className='block text-sm font-medium text-white text-red-800 xl:text-2xl text-xl'>
        Change {field.charAt(0).toUpperCase() + field.slice(1)}
      </label>
      <input
        type={field === 'email' ? 'email' : 'text'}
        id={field}
        name={field}
        value={formData[field] || user[0][field]}
        required
        onChange={(e) => handleChange(field, e.target.value)}
        className='mt-2 p-2 border rounded-md w-[100%] xl:py-3 text-red-800 font-semibold xl:text-xl text-lg'
        autoComplete='off'
      />
      <button type='submit' className='mt-2 bg-red-700 text-white py-2 px-10 rounded-md'>
        Save
      </button>
    </form>
  );

  // change password
  const changePassword = async (e) => {
    e.preventDefault();
 
      // Password Validation
      if(!passwordRegex.test(newPassword)){
        toast.error('Password should contain at least one letter, one number, and one special character', {
            position: toast.POSITION.TOP_CENTER,
          });
        
}
    try {
      await putRequest(`changePassword/${userId}`, {
        oldPassword,
        newPassword    })
      .then((response) => {
         toast.success('Password Successfully Changed', {
           position: toast.POSITION.TOP_CENTER,
         });
         setOldPassword('');
         setNewPassword('');
         console.log(response.data);
         return response.data;
       })
    } catch (error) {
      console.error('Error in changing password', error.response);
      toast.error('Error in changing password', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
  return (
    <div className='w-[100%] h-[100%] bg-black text-white'>
      <AdminNavbar />

      <div className='text-white mt-30 lg:p-40 max-md:px-5 max-md:pt-20'>
        <div>
          <h1 className='font-bold md:text-5xl text-3xl text-center'>Settings</h1>
        </div>

        {user.map((users) => (
          <div key={user._id} className='mt-20 sm:w-[70%] lg:w-[55%] mx-auto sm:text-xl '>
            <h1 className='text-2xl font-bold bg-white w-[100%] py-3 text-center text-red-700 mb-7 rounded'>Change User Details</h1>
            {['email', 'name', 'contact'].map((field) => (
              <p
                key={field}
                className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2 border-red-700'
                onClick={() => setEdit(field)}
              >
                {edit === field
                  ? renderFormFields(field) // If currently editing, show the form fields
                  : `Change ${field}: ${users[field]}` // If not editing, show a message with the current value
                }
              </p>
            ))}

            <div className='mt-16'>
            <h1 className='text-2xl font-bold bg-white w-[100%] py-3 text-center text-red-700 my-7 rounded font-bold xl:text-2xl'>Change Password</h1>
            

            <form onSubmit={changePassword}>
                <div className='mb-5'>
                  <label htmlFor="oldPassword" className='mr-16 '>Old Password:</label>
                  <input
                    type="password"
                    id="oldPassword"
                    value={oldPassword}
                    className='mt-2 p-2 border rounded-md sm:w-[60%] w-[80%] xl:py-3 text-red-800 font-semibold xl:text-xl text-lg'
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor="newPassword" className='mr-14'>New Password:</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    className='mt-2 p-2 border rounded-md sm:w-[60%] w-[80%] xl:py-3 text-red-800 font-semibold xl:text-xl text-lg'
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              
                <button type='submit' onClick={changePassword} className='font-bold mt-2 bg-red-700 text-white py-2 px-10 rounded-md hover:bg-white hover:text-red-700'>
                  Submit
                </button>
              </form>
           
            </div>
            
            <p className='cursor-pointer hover:text-red-700 mb-4 border-b-2 pb-2  my-7 font-bold xl:text-2xl border-red-700'>
              <Link to='/logout'>Logout</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
