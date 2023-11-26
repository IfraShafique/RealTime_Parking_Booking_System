import React from "react";

export const LoginButton = ({ label, onClick }) => (
  <button className="bg-gradient-to-r from-red-800 to-red-600 text-white sm:text-2xl text-xl px-9 sm:px-12 py-2 
  font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
   onClick={onClick}>
    {label}
  </button>
);

export const SendButton = ({ label, onClick }) => (
  <button className=" bg-red-800 text-white sm:text-2xl text-xl px-9 sm:px-12 py-2 
  font-semibold rounded-md shadow-md hover:bg-white hover:text-red-800" 
  onClick={onClick}>
    {label}
  </button>
);

export const SubmitBtn = ({ label, onClick }) => (
  <button className=" bg-red-800 text-white md:text-2xl text-xl px-9 xl:px-12 md:px-8 xl:py-2 py-1 
  font-semibold rounded-md shadow-md hover:bg-white hover:text-red-800 " 
  onClick={onClick}>
    {label}
  </button>
);

export const BookBtn = ({ label, onClick }) => (
  <button className=" bg-red-800 text-white md:text-2xl text-xl px-9 xl:px-12 md:px-8 xl:py-2 py-1 
  font-semibold rounded-md shadow-md hover:bg-white hover:text-red-800 " 
  onClick={onClick}>
    {label}
  </button>
);

// export default function AllButton(props) {
//   return (
//     <div>

// <div>
//       <button className="bg-gradient-to-r from-red-800 to-red-600 text-white sm:text-2xl text-xl px-9 sm:px-12 
//       py-2 font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ">
//         {props.login}
//       </button>

      
//       <div>
//       <button className="bg-gradient-to-r from-red-800 to-red-600 text-white sm:text-2xl text-xl px-9 sm:px-12 
//       py-2 font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ">
//         {props.send}</button>
//       </div>
// </div>
      
//     </div>
    
//   );
// }
