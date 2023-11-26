import { useState } from "react";
import React from 'react'
import img6 from '../../assets/Images/img6.jpg'
import { SubmitBtn } from "../../Utils/AllButton";
// import { ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    // Add more fields as needed
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'contact', label: 'Contact', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
    // Add more fields as needed
  ];

  return (
    <div className="bg-black w-[100%] flex ">
       
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
        <form className="flex flex-col">
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
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className="mt-2 p-2 border rounded-md w-[100%] xl:py-4"
              />
            </div>
          ))}
          <div className="xl:mt-8 mt-4">
            <SubmitBtn label="Register" />
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
