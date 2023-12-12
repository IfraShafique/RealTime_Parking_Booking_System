import React from "react";

export default function Feedback() {
  return (
    <div className="w-[100%] bg-black text-white sm:mt-[5em] mt-[2em]">
      

      {/* <div className="mt-30 lg:p-40 max-md:px-5 max-md:pt-20"> */}
        <h1 className="font-bold md:text-5xl text-3xl text-center">
          Feedbacks{" "}
        </h1>

        <div>
          

          <div className=" w-[100%] md:w-[70%] sm:mt-20 mt-10 mx-auto">
            <div className="lg:text-2xl sm:text-sm text-[0.6rem]  pb-2 text-left pl-4">
              <h1 className="font-bold">John</h1>
              <p className=" font-[arial] lg:text-base font-semibold sm:py-4 py-2 text-left">I'm really happy with your determination to finish this project.</p>
           
              <div className="sm:text-base text-[0.6rem] font-bold ">
                <p className="border-b-[1px] border-red-700 py-2 w-[100%] text-left hover:text-red-700 cursor-pointer">Reply</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    // </div>
  );
}
