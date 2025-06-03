import Heading from "@/components/heading";
import SubHeading from "@/components/subHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const TestimonialPage = () => {
  return (
    <div className="w-full max-w-[1500px] mx-auto h-auto my-20 flex justify-center items-center">
      <div className="md:w-[85%] w-full px-3 md:px-0 flex flex-col gap-30 h-auto">
        <div className="heading flex md:items-start items-center flex-col">
          <SubHeading text="Our Foodie Customers" />
          <Heading text="Customer Testimonial" />
        </div>
        <div className="arrows flex gap-2">
          <div className="border rounded-full border-orange-700 p-3">
            <ChevronLeft
            size={20}
            color="red"
          />
          </div>
          <div className="border rounded-full border-orange-700 p-3">
            <ChevronRight
            size={20}
            color="red"
            
          />
          </div>
        </div>
        <div className="cards flex md:flex-wrap justify-center gap-6 max-w-7xl  items-center ">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
