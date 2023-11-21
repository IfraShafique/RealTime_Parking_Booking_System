import React from "react";

export default function About() {
  return (
    <div id='about'
     className="text-white flex md:mt-[3em] pt-20 flex-wrap text-center lg:w-[60%] xl:w-[40%] w-[100%] m-auto sm:text-2xl text-xl">
      <h1 className="font-bold md:text-6xl text-5xl text-red-600 mx-auto sm:mb-10 mb-5">Mission</h1>
      <p>
        we are on a mission to redefine the parking experience. Our vision is a
        future where finding parking is no longer a hassle but a seamless part
        of your day. With a focus on efficiency, reliability, and
        user-friendliness, we aim to make parking stress-free and enjoyable.
      </p>

      <h1 className="font-bold text-3xl text-xl text-red-600 mx-auto mt-6">Why Choose Us</h1>
      <ul className="w-[100%]">       
        <li>Efficient Parking Solutions</li>
        <li>User-Friendly Interface</li>
        <li>Reliable Information</li>
        <li>Flexibility for Your Needs</li>
      </ul>
         
      <h1 className="font-bold text-3xl text-xl text-red-600 mx-auto mt-6">Our Commitment</h1>
      <p>
        
        We are committed to providing you with a parking experience that is not
        only convenient but also cost-effective. Join us on this journey to
        simplify parking and save valuable time.
      </p>
    </div>
  );
}
