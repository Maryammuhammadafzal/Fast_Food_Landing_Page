import React from 'react'
import AboutImage from "../../public/about-image.png"
const AboutPage = () => {
  return (
   <div className="about w-full h-auto flex justify-center items-start">
      <div className="w-[85%] px-3 sm:w-[85%]  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 gap-6">
        <div className="right lg:mr-0 xl:mr-20 md:w-[50%] w-full h-auto space-y-3 flex-col flex justify-center md:order-2 order-1">
          <Subheading text="About Us" textColor="text-[#007BFF]"/>
          <Heading text="Who We Are" textColor="[#4B5563]" />
          <p className="font-normal txet-sm md:text-[16px] sm:tracking-wide text-[#4B5563]">
            At DigitalHorizon, we’re more than a digital agency—we’re your
            growth partners. With a team of creative thinkers, tech experts, and
            marketing strategists, we deliver transformative solutions that set
            your business apart.
          </p>
          <div>
            <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-white bg-[#007BFF] font-semibold text-[16px] max-sm:text-sm hover:bg-[#1B1F3B] hover:scale-x-90">
              More About Us
            </Button>
          </div>
        </div>
          <div className="left md:w-[50%] w-full h-auto flex justify-center items-center md:order-1 order-2">
          <Image
            src={AboutImage}
            alt="Burger"
            // className="md:max-w-[200px] max-w-[160px] h-[50px] object-fill"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
