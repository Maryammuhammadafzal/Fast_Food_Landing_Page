import { Button } from "@/components/ui/button";
import React from "react";
import BannerImage from "../../public/banner-image.png";
import Image from "next/image";
import BannerBg from "../../public/banner-bg.png"

const BannerPage = () => {
  return (
    <div className="w-full h-auto max-xl:py-3 flex items-center bg-radial from-[#525151] to-[#222222]  ">
      <div className="w-full  h-auto text-white bg-cover bg-center "
          style={{backgroundImage : `url(${BannerBg.src})`}}>
        <div className="content w-full  max-md:gap-3 flex justify-between px-5 items-center h-full">
          {/* Content */}
          <div
            data-aos="fade-right"
            className="rightContent flex  max-md:w-full  max-md:items-center justify-start items-start w-auto flex-col"
          >
            <h4 className="kaushan-script text-xl  font-normal text-[#008141] uppercase tracking-wide">
              Delicious
            </h4>
            <h1 className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl max-sm:text-5xl   cabin-sketch font-bold">
              PIZZA
            </h1>
            <div className="button my-3">
                         <Button className="rounded-none  max-sm:w-[130px] bg-secondary hover:bg-primary">Order Now</Button>
                       </div>
          </div>
          {/* Image */}
          <div className="rightimg  w-auto max-md:w-full h-auto  flex justify-center max-md:justify-center items-center">
            <Image 
            src={BannerImage}
            alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
