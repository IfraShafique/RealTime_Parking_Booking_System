import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from '../../Utils/AllButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (fieldName, value) => {
    setCredentials({ ...credentials, [fieldName]: value });
  };



  const handleLogin = () => {
    // Check if email and password match your condition
    if (credentials.email === 'abc@gmail.com' && credentials.password === 'user') {
      // Navigate to the user dashboard
      navigate('/user-dashboard');
      // Login Message
      toast.success("Login Successfully", {
        position: toast.POSITION.TOP_CENTER
      });
    } else if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin') {
      // Navigate to the user dashboard
      navigate('/admin-dashboard');
      // Login Message
      toast.success("Login Successfully", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      // Handle incorrect credentials (you might show an error message)
      console.log('Invalid credentials');
      // Error Login Message
      toast.error("Invalid Credentials", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };
  return (
    <div id='login' className='bg-black w-[100%] h-[100%]'>
      <ToastContainer/>
    <div className='flex xl:mt-[12em] 2xl:mt-[20em] mt-[3em] pt-20 flex-wrap justify-center lg:w-[60%] xl:w-[40%] w-[100%] m-auto '>
        <h1 className='font-bold md:text-6xl text-3xl text-red-600 mx-auto'>USER LOGIN</h1>
      <div className='my-10 w-[100%] flex justify-center'>
        <label htmlFor="Enter an Email" className='sm:text-2xl font-semibold mr-12 text-white '>Email</label>
        <input type="email" name='email' value={credentials.email} className='sm:w-[70%] h-[6vh] text-red-800 px-4 sm:text-[20px] rounded-lg' 
        onChange={(e) => handleInputChange('email', e.target.value)} />
      </div>

      <div className='mb-10 w-[100%] flex justify-center'>
        <label htmlFor="Enter an Password" className='sm:text-2xl font-semibold sm:mr-3 mr-6 text-white '>Password</label>         
        <input type="password" name='password' value={credentials.password} className='sm:w-[70%] h-[6vh] text-red-800 px-4 
        sm:text-[20px] rounded-lg' onChange={(e) => handleInputChange('password', e.target.value)}/>
      </div>
    <div className=' my-4'>        
    <LoginButton label="Login" onClick={handleLogin}/>

    </div>
    </div>

    <div className='my-4 text-center'>
        <p className='text-white sm:text-xl'>If don't have an account then click on 
        <span className='text-red-800 font-bold sm:text-2xl cursor-pointer'> Register Account</span></p>
    </div>
    
    </div>
  )
}
