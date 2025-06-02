import React from "react";

const Heading = ({text}) => {
  return (
    <h1 className="2xl:text-5xl md:text-4xl text-3xl md:leading-18 sm:leading-14 staatliches text-[#CE3A20]  leading-12 font-bold xl:leading-30">
      {text}
    </h1>
  );
};

export default Heading;
