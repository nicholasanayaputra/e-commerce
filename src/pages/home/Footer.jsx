import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 border border-t-[1px] bg-gray-300">
      <div className="mt-14">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12 flex flex-col-reverse md:flex-col items-center text-center">
            <h3 className="font-bold text-xl md:mb-11 mb-20">Funiro.</h3>
            <p className="w-4/5 text-[#9F9F9F] text-sm mb-5 lg:mb-0">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="md:col-span-2 col-span-6 text-center">
            <h3 className="text-[#9F9F9F] text-base font-medium mb-11">
              Links
            </h3>
            <div className="flex flex-col gap-y-10">
              <p className="text-sm font-medium">Home</p>
              <p className="text-sm font-medium">Shop</p>
              <p className="text-sm font-medium">About</p>
              <p className="text-sm font-medium">Contact</p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-6 text-center">
            <h3 className="text-[#9F9F9F] text-base font-medium mb-11">Help</h3>
            <div className="flex flex-col gap-y-10">
              <p className="text-sm font-medium">Payment Options</p>
              <p className="text-sm font-medium">Returns</p>
              <p className="text-sm font-medium">Privacy Policies</p>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <h3 className="text-[#9F9F9F] text-base font-medium my-11 md:mt-0 text-center md:text-start">
              Newsletter
            </h3>
            <div className="flex gap-2 justify-center md:justify-start">
              <button className="border-b-[1px] text-[#9F9F9F] text-sm font-normal border-black">
                Enter Your Email Address
              </button>
              <span className="border-b-[1px]  text-sm font-semibold border-black">
                SUBSCRIBE
              </span>
            </div>
          </div>
          <div className="col-span-12">
            <div className="border-t-[1px] mt-5">
              <h1 className=" text-base font-normal my-4 text-center md:text-start">
                2023 furino. All rights reverved
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
