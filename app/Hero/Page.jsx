import Header from "@/components/header";
import React from "react";
import HeroImage from "../../public/hero-image.png"
import { Button } from "@/components/ui/button";
import Topbar from "@/components/topbar";
const HeroPage = () => {
  return (
    <div
      className="w-full h-screen  bg-cover max-md:bg-center  bg-top-right bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <div className="w-full h-[40px] sm:block hidden fixed top-0 left-0 shadow-md z-50">
        <Topbar />
      </div>
      <div className="w-full md:h-[90px] h-auto md:py-0 py-5 absolute sm:top-20 top-0 left-0  z-50">
        <Header />
      </div>
      <div className="relative w-full md:h-screen h-auto flex justify-center items-center">
        <div className="overlay bg-black/15 absolute top-0 left-0 h-screen w-full"></div>
        <div className="content w-full h-screen absolute top-0 left-0 z-20 flex justify-center items-center">
          <div className="md:w-[85%] w-full md:px-0 px-3 h-auto flex items-center">
            <div className="lg:w-[50%] md:w-[70%] sm:w-full h-fit flex-col flex gap-4  text-white">
              <h3 className="lg:text-xl -mb-7 md:text-2xl sm:text-xl xs:text-lg text-base font-normal urbanist text-[#DB3E22]">
                TASTE IN EVERY BITE
              </h3>
              <h1 className="2xl:text-8xl b xl:text-7xl sm:text-5xl text-4xl md:leading-18 sm:leading-14 staatliches  leading-12 font-bold xl:leading-30">
                HOT & SPICY CHICKEN BURGER
              </h1>
            <div className="button">
                <Button className="px-9">Veiw Menu</Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
