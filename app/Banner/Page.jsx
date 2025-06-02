import { Button } from "@/components/ui/button";
import React from "react";
import BannerImage from "../../public/banner-image.png";
import Image from "next/image";
import BannerBg from "../../public/banner-bg.png"

const BannerPage = () => {
  return (
    <div className="w-full h-auto max-xl:py-3 flex items-center text-white bg-cover bg-center bg-radial"
    style={{backgroundImage : `url(${BannerBg.src})`}}>
      <div className="w-full  h-auto  max-md:h-auto bg-image">
        <div className="content w-full p-5 max-md:gap-8 flex max-md:flex-col justify-between items-center h-full">
          {/* Content */}
          <div
            data-aos="fade-right"
            className="rightContent flex  max-md:w-full max-md:p-0 max-md:items-center justify-start items-start w-[50%] pl-12 flex-col"
          >
            <h4 className="kaushan-script text-xl pl-3 font-semibold capitalize">
              Delicious
            </h4>
            <h1 className="text-5xl font-medium max-lg:text-5xl max-md:text-5xl max-sm:text-3xl  max-md:text-center font-['Lobster'] my-7 ">
              What Our Customers Say
            </h1>
            <div className="button my-5">
              <Button className="px-9">Veiw Menu</Button>
            </div>
          </div>
          {/* Image */}
          <div className="rightimg  w-[50%] p-5 max-md:w-full h-auto  flex justify-start max-md:justify-center items-center">
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
