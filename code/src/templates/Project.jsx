import React from "react";

export default function Project({ title, description }){
    return(
        <div className="w-full">
        <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
          <div className="">
            <img
              className="w-31  mx-auto shadow-xl rounded-full"
              src="#"
              alt="Profile face"
            />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">
              {title}
            </p>
            <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
}