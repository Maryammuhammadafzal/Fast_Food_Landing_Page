import Heading from "@/components/heading";
import PopularCard from "@/components/poularCard";
import SubHeading from "@/components/subHeading";
import React from "react";

const PopularPage = () => {
  return (
    <div className="w-full max-w-[1500px] mx-auto h-auto my-20 flex justify-center items-center">
      <div className="md:w-[85%] w-full px-3 md:px-0 flex flex-col gap-6 h-auto">
        <div className="heading flex md:items-start items-center flex-col">
          <SubHeading text="About Our Food" />
          <Heading text="Popular Food Items" />
        </div>
        <div className="cards flex md:flex-wrap justify-center gap-6 max-w-7xl  items-center ">
                <PopularCard/>
        </div>
      </div>
    </div>
  );
};

export default PopularPage;
