import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
 import { FaFacebook } from "react-icons/fa"; 
 import { TbBrandWhatsappFilled } from "react-icons/tb";
 import { FaSquareInstagram } from "react-icons/fa6";
 import { FaXTwitter } from "react-icons/fa6";
 import { ImLinkedin } from "react-icons/im";
const Topbar = () => {
  return (
    <div className='w-full h-[40px] bg-green-700 flex justify-center items-center'>
      <div className="w-[85%] h-auto flex justify-between items-center">
        <div className="left w-auto flex gap-5 text-sm text-white">
                <p>100% Secure delivery without contacting the courier</p>
                <p className='flex gap-5'><TbTruckDelivery size={20} /> Track Your Order</p>
        </div>
        <div className="left w-auto flex gap-5 text-white">
                <FaFacebook size={15} />
                <FaXTwitter size={15} />
                <ImLinkedin size={15} />
                <FaSquareInstagram size={15} />
                <TbBrandWhatsappFilled size={15} />
        </div>
      </div>
    </div>
  )
}

export default Topbar
