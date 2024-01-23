import React from 'react';
import UserNavbar from './UserNavbar';
import img1 from '../../assets/Images/park1.jpg';
import img2 from '../../assets/Images/park2.jpg';
import img3 from '../../assets/Images/park3.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { headers, postRequest, decodedToken } from '../../Utils/requests';

export default function UserDashboard() {
  const navigate = useNavigate();

  const handleImageClick = async (imageName) => {
    try {
      const token = localStorage.getItem("jwt");
      console.log(decodedToken())
      // verify the decoded token
      const verifyDecodedToken = decodedToken();

      axios.defaults.withCredentials = true;
      axios.defaults.headers.common["Authorization"] = token;

      await postRequest(
        `parkingAreaSelection/${verifyDecodedToken._id}`,
        {
          image: imageName,
        },
        headers
      );

      toast.success("Successfully");
      navigate("/book-slot");
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  return (
    <div className="w-100% bg-black h-[100%] mx-auto text-white">
      <UserNavbar />
      <div className="mt-30 lg:p-40 sm:p-20 max-sm:py-16">
        <h1 className="font-bold md:text-5xl text-3xl text-center">
          Reserve The Parking{" "}
        </h1>
        <p className="sm:pt-28 pt-12 text-center font-semibold sm:text-3xl text-2xl">
          Select the Parking Area
        </p>
        <div className="flex w-[100%] max-md:flex-wrap justify-center mx-auto">
          <img
            src={img1}
            alt=""
            className="sm:w-[30%] w-[70%] sm:mr-4 mx-auto mt-10 rounded hover:shadow-lg hover:shadow-rose-700 cursor-pointer "
            onClick={() => handleImageClick("park1.jpg")}
          />
          <img
            src={img2}
            alt=""
            className="sm:w-[30%] w-[70%] sm:mr-4 mx-auto mt-10 rounded hover:shadow-lg hover:shadow-rose-700 cursor-pointer "
            onClick={() => handleImageClick("park2.jpg")}
          />
          <img
            src={img3}
            alt=""
            className="sm:w-[30%] w-[70%] sm:mr-4 mx-auto mt-10 rounded hover:shadow-lg hover:shadow-rose-700 cursor-pointer "
            onClick={() => handleImageClick("park3.jpg")}
          />
        </div>
      </div>
    </div>
  );
}
