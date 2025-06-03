import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import FeaturesBgImage from "../public/features-bg.png";
import { FaFacebook } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
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
      <div className=" w-[95%] max-md:w-full mx-auto bg-[#008141] rounded-2xl relative -z-20 h-auto flex flex-col gap-4 justify-center items-center ">
        <div
          className="w-full h-full mx-auto  absolute top-0 left-0  bg-cover bg-center opacity-30 -z-10"
          style={{ backgroundImage: `url(${FeaturesBgImage.src})` }}
        ></div>
        <div className="footerContent xl:w-[85%] py-10 h-auto flex flex-wrap justify-between mb-3 ">
          <div className="left w-[35%] max-sm:w-[100%] max-[900px]:w-[45%] max-sm:flex max-sm:flex-col   p-3 h-auto">
            {/* Logo */}
            <div className="logo ">
              <h3 className="font-extrabold text-4xl text-yellow-400 staatliches tracking-wide uppercase">
                Logo
              </h3>
            </div>
            <p className="text-[14px] my-5 max-sm:w-[70%] px-3 font-[Nunito Sans] max-md:text-[14px] max-sm:text-[12px] max-sm:w-full font-[400]">
              At [Your Brand Name], we believe that food is more than just
              sustenance; it’s an experience. We bring you a carefully crafted
              menu, designed to tantalize your taste buds and satisfy your
              cravings.
            </p>
          </div>

          <div className="middle max-sm:w-auto w-[20%] p-3 h-auto ">
            <h4 className=" text-yellow-400 staatliches text-2xl font-bold capitalize max-lg:text-xl max-md:text-lg">
              Quick Links
            </h4>
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Home
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Menu
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  About Us
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Deals
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="middle max-sm:w-auto w-[25%] p-3 h-auto">
            <h4 className=" text-yellow-400 staatliches text-2xl font-bold capitalize max-lg:text-xl max-md:text-lg">
              Get In Touch
            </h4>

            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-base font-[Nunito Sans]  font-[400] ">
                <a href="#" className="text-lg">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </a>
              </li>
              <li className="text-base font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  jessica.hanson@example.com
                </a>
              </li>
              <li className="text-base font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  (308) 555-0121
                </a>
              </li>
            </ul>
          </div>
          <div className="left max-sm:w-full max-sm:px-3   w-[20%] p-3  h-auto max-[900px]:w-full">
            <h4 className=" text-yellow-400 staatliches text-2xl font-bold capitalize max-lg:text-xl  max-md:text-lg">
              Contact
            </h4>
            <div className="left w-auto mt-10 flex flex-wrap gap-6 xl:px-6  text-white">
              <FaFacebook size={25} />
              <FaXTwitter size={25} />
              <ImLinkedin size={25} />
              <FaSquareInstagram size={25} />
              <TbBrandWhatsappFilled size={25} />
            </div>
          </div>
        </div>
        <div className="copyright flex xl:w-[85%] w-full py-10 gap-5 h-auto justify-between mb-3 flex-wrap">
          <p className="text-sm ">
            © 2021 all copyright reserved. All Rights Reserved.
          </p>
          <ul className="text-sm flex gap-2">
            <li>Term Of Services</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
