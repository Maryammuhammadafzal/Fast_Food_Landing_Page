import React from "react";
import AboutImage from "../../public/about-image.png";
import { Button } from "@/components/ui/button";
import SubHeading from "@/components/subHeading";
import Heading from "@/components/heading";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="about w-full max-w-[1500px] mx-auto h-auto flex justify-center items-center">
      <div className="w-full px-4 sm:w-[85%] h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 gap-6">
        <div className="right  md:w-[50%] w-full h-auto flex-col flex justify-center ">
          <SubHeading text="About Our Food" textColor="text-[#007BFF]" />
          <Heading text="Where Quality Meet Excellent Service" />
          <p className="font-normal max-w-lg urbanist text-sm sm:text-base sm:tracking-wide text-[#4B5563]">
            It's the perfect dining experience where every dish is crafted with
            fresh, high-quality Experience quick and efficient service that
            ensures your food is servead fresh It's the dining experience where
            every dish is crafted with fresh, high-quality ingredients.
          </p>
          <div className="button my-5">
            <Button className="px-9">Veiw Menu</Button>
          </div>
        </div>
        <div className="left md:w-[50%] w-full h-auto flex justify-center items-center ">
          <Image
            src={AboutImage}
            alt="Burger"
            // className="md:max-w-[200px] max-w-[160px] h-[50px] object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
