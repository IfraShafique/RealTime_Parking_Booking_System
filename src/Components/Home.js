import React from "react";
import img1 from "./../assets/Images/img4.avif";
import Navbar from "./Navbar";
import Login from "./Registration/Login";
import About from "./About";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Home() {
  return (
    <div id="home" className="w-[100%] h-[100%]  bg-black">
      {/* navbar */}
      <Navbar />

      <img src={img1} alt="" className="w-[100%] sm:h-[100vh] h-[66vh] " />
      
      <div className="md:relative lg:w-[35%] md:w-[87%] w-[90%] mx-auto md:-mt-[30%] -mt-[50%] lg:ml-28  opacity-80 bg-red-600 md:rounded-[25px] rounded-[10px]">
      <p className=" text-white  md:p-5 p-2 md:text-3xl text-sm ">
       <span className="text-black font-bold">Welcome to ParkEase!</span>  <br/>your gateway to seamless parking reservations,
        where finding a spot is as easy as a click. Enjoy stress-free parking in
        the heart of the city
      </p>

      <p className="sm:w-48 w-28 text-white sm:text-2xl font-semibold text-center sm:py-3 py-1 items-center bg-black sm:ml-5 ml-2 rounded-lg 
      cursor-pointer hover:bg-white hover:text-red-800"><Link to='/registeration'>Reserve Now !</Link></p><br/>
      </div>
      <Login/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}
