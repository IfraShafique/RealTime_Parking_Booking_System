import { useState } from "react";
import React from 'react'
import img6 from '../../assets/Images/img6.jpg'
import { SubmitBtn } from "../../Utils/AllButton";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postRequest } from "../../Utils/requests";
import {contactRegex, passwordRegex } from "../../Utils/validations";


export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  

  // Submit Function
  
  const handleSubmit = async(e) => {
    // debugger
    console.log('Handling submit...');
    console.log('Form Data:', formData);
    e.preventDefault();

    const requiredFields = ['name', 'email', 'contact', 'password'];

    const isAnyFieldEmpty = requiredFields.some(
      (fieldName) => !formData[fieldName]
    );
  
    if (isAnyFieldEmpty) {
      toast.error('No fields can be empty', {
            position: toast.POSITION.TOP_CENTER,
          });
      return; // Prevent form submission if any field is empty
    }

    // if(valdateEmptyFields(formData)){
    //   toast.error('No fields can be empty', {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    //   return;
    // } 
    
    // Contact validation
    else if(!contactRegex.test(formData.contact)){
      toast.error('Contact no should be exactly 11 characters', {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
  }
   
    // Password Validation 
    else if (formData.password.length < 6) {
      toast.error('Password must be consist of 6 characters', {
        position: toast.POSITION.TOP_CENTER,
      });
    return
    }
      // Password Validation
      else if(!passwordRegex.test(formData.password)){
        toast.error('Password should contain at least one letter, one number, and one special character', {
            position: toast.POSITION.TOP_CENTER,
    });
    return
}
      try {
        
         const response =  await postRequest('registration', {
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
            password: formData.password,
          })
          toast.success('Registration Successful', {
            position: toast.POSITION.TOP_CENTER,
          });
          // set field empty after submission
          setFormData({
            name: '',
            email: '',
            contact: '',
            password: '',
          })
          return response.data;
    
      } catch (error) {
        console.error('Registration Failed', error);
        toast.error('Registration Failed', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    };

  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'contact', label: 'Contact', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <div className="bg-black w-[100%] flex ">

       <ToastContainer/>
      {/* left side */}
      <div className="w-[60%] lg:w-[50%] max-lg:hidden">
        <img src={img6} alt="" className="w-100%  h-[100%] " />
      </div>

      {/* right side */}
      <div className="m-auto mt-[8%] text-white max-sm:w-[100%] max-sm:h-[100%]">
      <div className="w-[100%]  lg:hidden">
        <img src={img6} alt="" className="w-100% h-[100%]" />
      </div>

      <div className="max-sm:w-[90%] m-auto mt-[8%] max-sm:h-[100vh]">
        <h1 className="font-bold xl:text-6xl lg:text-4xl text-3xl mx-auto text-red-600 mx-auto sm:mb-10 mb-5">Registration Form</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name} className="mb-3">
              <label htmlFor={field.name} className="block text-sm font-medium text-white text-red-800 xl:text-2xl text-xl">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={(e) => {
                  handleInputChange(field.name, e.target.value);
                }}
                className="mt-2 p-2 border rounded-md w-[100%] xl:py-4 text-red-800 font-semibold xl:text-xl text-lg"
                
              />

            </div>
          ))}

          
          <div className="xl:mt-8 mt-4">
            <SubmitBtn label="Register"  />
            
            <p className="xl:mt-4 mt-2 xl:text-xl sm:pb-10">
              Already have an account,{' '}
              <Link to='/'  className="text-red-600 font-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};
