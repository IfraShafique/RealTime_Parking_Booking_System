import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from '../../Utils/AllButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../pages/ProtectedRoutes/AuthContext';
import { headers, postRequest } from '../../Utils/requests';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const login = useAuth();
  const [error, setError] = useState();

  const handleLoginChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // login function
  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      toast.error('Email and password are required.');
      return;
    }
  
    try {
      const response = await postRequest('login', { email, password }, {
        withCredentials: true,
        headers,
      });
      // axios.post(
      //   `${process.env.REACT_APP_CONNECTION_URI}/login`,
      //   { email, password },
      //   {
      //     withCredentials: true,
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
  
      console.log('API Response:', response);
      
      const userData = response.data;
      if (!userData || !userData.token) {
        console.error('Invalid response format. Token is missing.');
        toast.error('Authentication error. Please try again.');
        return;
      }

      const token = userData.token;
      console.log('Token:', token);
  
      login.login(userData);
  
      if (userData && userData._id) {
        console.log('ID:', userData._id);
      }
      console.log('Role:', userData.role);
      console.log('Token:', token);
  
      if (userData.role === 'admin') {
        localStorage.setItem('jwt', token);
        navigate('/admin-dashboard');
      } else if (userData.role === 'user') {
        localStorage.setItem('jwt', token);
        navigate('/user-dashboard');
      } else {
        console.log('Invalid Credentials');
        toast.error('Invalid Credentials');
      }
  
      toast.success('Login Successful');
      setEmail("");
      setPassword('');
    } catch (error) {
      console.error('Login Error:', error);
      if (error.response) {
        console.log('Response Status:', error.response.status);
  
        // Handle specific authentication errors
        if (error.response.status === 403 && error.response.data.includes('User not found')) {
          toast.error('User not found. Please check your credentials.');
        } else {
          toast.error('Authentication error. Please try again.');
        }
      } else {
        toast.error('An error occurred while processing your request.');
        setError("Invallid Credentials");
      }
    }
  };
  
  
  return (
    <div id='login' className='bg-black w-[100%] h-[100%]'>
      <ToastContainer/>
    <div className='flex xl:mt-[12em] 2xl:mt-[20em] mt-[3em] pt-20 flex-wrap justify-center lg:w-[60%] xl:w-[40%] w-[100%] m-auto '>
        <h1 className='font-bold md:text-6xl text-3xl text-red-600 mx-auto'>USER LOGIN</h1>
      <div className='my-10 w-[100%] flex justify-center'>
        <label htmlFor="Enter an Email" className='sm:text-2xl font-semibold mr-12 text-white '>Email</label>
        <input type="email" name='email'  className='sm:w-[70%] h-[6vh] text-red-800 px-4 sm:text-[20px] rounded-lg' 
        onChange={handleLoginChange} />
      </div>

      <div className='mb-10 w-[100%] flex justify-center'>
        <label htmlFor="Enter an Password" className='sm:text-2xl font-semibold sm:mr-3 mr-6 text-white '>Password</label>         
        <input type="password" name='password'  className='sm:w-[70%] h-[6vh] text-red-800 px-4 
        sm:text-[20px] rounded-lg' onChange={handlePasswordChange}/>
      </div>
    <div className=' my-4'>        
    <LoginButton label="Login" onClick={handleLogin}/>
    <p>{error}</p>

    </div>
    </div>

    <div className='my-4 text-center'>
        <p className='text-white sm:text-xl'>If don't have an account then click on 
        <span className='text-red-800 font-bold sm:text-2xl cursor-pointer'> Register Account</span></p>
    </div>
    
    </div>
  )
}
