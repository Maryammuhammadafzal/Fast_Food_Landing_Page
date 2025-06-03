'use client'
import Heading from "@/components/heading";
import SubHeading from "@/components/subHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";
const TestimonialPage = () => {
const sliderRef = useRef(null)

const slidePrev = ()=> {
  sliderRef.current?.slickPrev();
}
const slideNext = () => {
  sliderRef.current?.slickNext();
}
  return (
    <div className="w-full max-w-[1500px] mx-auto h-auto my-20 flex justify-center items-center">
      <div className="md:w-[85%] w-full px-3 md:px-0 flex flex-col gap-30 h-auto">
        <div className="flex justify-between sm:flex-row flex-col gap-6 w-full">
          <div className="heading flex md:items-start items-center flex-col">
          <SubHeading text="Our Foodie Customers" />
          <Heading text="Customer Testimonial" />
        </div>
        <div className="arrows flex gap-2 h-fit justify-center items-end">
          <div className="border rounded-full border-orange-700 p-1 text-orange-700 hover:text-white hover:bg-orange-700" onClick={slidePrev}>
            <ChevronLeft
            size={20}
          />
          </div>
          <div className="border rounded-full border-orange-700 text-orange-700 p-1 hover:text-white hover:bg-orange-700" onClick={slideNext}>
            <ChevronRight
            size={20}
            
          />
          </div>
        </div>
        </div>
        <div className="cards flex md:flex-wrap justify-center gap-6 max-w-7xl  items-center ">
          <TestimonialCard sliderRef={sliderRef} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
