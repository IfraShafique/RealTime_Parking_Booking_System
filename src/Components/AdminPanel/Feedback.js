import React, { useEffect, useState } from "react";
import { getRequest } from "../../Utils/requests";
import { ToastContainer, toast } from "react-toastify";

export default function Feedback() {
  const [user, setUser] = useState([]);

  const getVisitorsMessage = async () => {
    try {
      const response = await getRequest('get/visitor/contactDetails')
      setUser(response.data)
    } catch (error) {
      console.error('Error in fetching visitors message', error.response.data.error);
      toast.error(error.response.data.error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

    //use useEffect for fetch the user details
    useEffect(()=> {
      getVisitorsMessage()
    }, [])

  return (
    <div className="w-[100%] bg-black text-white sm:mt-[5em] mt-[2em]">
      <ToastContainer/>

      {/* <div className="mt-30 lg:p-40 max-md:px-5 max-md:pt-20"> */}
        <h1 className="font-bold md:text-5xl text-3xl text-center">
          Visitor Messages{" "}
        </h1>

        <div>
          

          <div className=" w-[100%] md:w-[70%] sm:mt-20 mt-10 mx-auto">
            {user.map((users)=> (
            <div key={users._id} className="lg:text-xl sm:text-sm text-[0.6rem]  pb-2 text-left pl-4 border-b-[1px] border-red-700">
              <h1 className="font-bold mt-5">{users.name}</h1>
              <p className=" font-[arial] lg:text-base py-1 text-left">{users.email}</p>
              <p className=" font-[arial] lg:text-base text-left">{users.message}</p>
              <h1 className="font-[arial] lg:text-base sm:pb-4 py-2 text-left">{users.date.toString().split('T')[0]}</h1>
           
              <div className="sm:text-base text-[0.6rem] font-bold ">
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    // </div>
  );
}
