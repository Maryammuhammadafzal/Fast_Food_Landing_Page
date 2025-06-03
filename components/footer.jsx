import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import FeaturesBgImage from "../public/features-bg.png";
const Footer = () => {
   let contact_data = [
    {
      name: "Address:",
      link: "3891 Ranchview Dr. Richardson, California 62639",
    },
    {
      name: "Send Email:",
      link: "Info@gmail.com",
    },
    {
      name: "Call Emergency:",
      link: "+88 (308) 555-0121",
    },
  ];
  return (
    <div className="w-full text-white h-auto gap-5 flex justify-center items-center p-3">
      <div className="academySection  w-[95%] max-md:w-full bg-[#008141] rounded-2xl relative -z-20 h-auto flex flex-col gap-4 justify-center items-center ">
        <div className="w-full h-full  absolute top-0 left-0  bg-cover bg-center opacity-30 -z-10"
         style={{backgroundImage: `url(${FeaturesBgImage.src})`}}>
          {/* <div className="overlay w-full h-full absolute top-0 left-0 bg-black"></div> */}
         </div>
        <div className="footerContent max-sm:justify-center w-full h-auto flex flex-wrap justify-between mb-3 ">
          <div className="left w-[35%] max-sm:w-[100%] max-[900px]:w-[45%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center p-3 h-auto">
            {/* Logo */}
            <div className="logo ">
              <h3 className="font-extrabold text-4xl tracking-wide uppercase">
                Logo
              </h3>
            </div>
            <p className="text-[14px] my-5 max-sm:w-[70%] max-sm:text-center font-[Nunito Sans] max-md:text-[14px] max-sm:text-[12px] max-sm:w-full font-[400]">
              At [Your Brand Name], we believe that food is more than just
              sustenance; it’s an experience. We bring you a carefully crafted
              menu, designed to tantalize your taste buds and satisfy your
              cravings.
            </p>
          </div>

          <div className="middle max-sm:w-auto max-sm:mx-auto w-[20%] p-3 h-auto ">
            <h4 className="text-white text-2xl font-bold capitalize max-lg:text-xl max-md:text-lg">
              Quick Links
            </h4>
            <hr className="w-17 h-[2px] mt-1 pl-2 bg-orange-400" />
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Home
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  About Us
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Academic
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Admission
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="middle max-sm:w-auto max-sm:mx-auto w-[20%] p-3 h-auto">
            <h4 className="text-white text-2xl font-bold capitalize max-lg:text-xl max-md:text-lg">
              Menu
            </h4>
            <hr className="w-10 h-[2px] mt-1 pl-2 bg-orange-400" />
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans]  font-[400] ">
                <a href="#" className="text-lg">
                  Appetizers
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Main Course
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Desserts
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Beverages
                </a>
              </li>
            </ul>
          </div>
          <div className="left max-sm:w-full max-sm:px-3  w-[25%] p-3  h-auto max-[900px]:w-full">
            <h4 className="text-white text-2xl font-bold capitalize max-lg:text-xl  max-md:text-lg">
              Contact
            </h4>
            <hr className="w-10 h-[2px] mt-1 pl-2 bg-orange-400" />
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans]   font-[400]">
                <p className="max-sm:text-[18px]">
                  Monday-Friday <span className="text-orange-500">8am</span> to{" "}
                  <span className="text-orange-500">4pm</span>
                </p>
              </li>
              <li className="text-lg font-[Nunito Sans]   font-[400]">
                <p className="max-sm:text-[18px]">
                  Saturday<span className="text-orange-500">8am</span> to{" "}
                  <span className="text-orange-500">12pm</span>
                </p>
              </li>
              <li className="text-lg font-[Nunito Sans] max-sm:hidden max-sm:w-full  relative font-[400] my-4">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="py-2 bg-white text-black w-full placeholder:text-gray-400 px-5 rounded-xl"
                />
                <button className="absolute right-2 top-1 bg-orange-500 p-2 z-10 rounded-xl">
                  <FaArrowRightLong />
                </button>
              </li>
            </ul>
            <div className="w-full min-sm:hidden flex justify-evenly items-center  text-white max-sm:flex-wrap max-sm:h-auto max-sm:gap-5">
              {contact_data.map(({ name, link }) => (
                <div
                  key={name}
                  className="w-[200px] flex flex-col max-sm:w-full"
                >
                  <h3 className="text-lg">{name}</h3>
                  <a href="{link}" className="text-[14px]">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
