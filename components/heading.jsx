import React from "react";

const Heading = ({text}) => {
  return (
    <h1 className="xl:text-6xl md:text-5xl text-4xl max-sm:text-3xl md:leading-16 sm:leading-12 staatliches text-[#CE3A20]  leading-10 font-bold xl:leading-20">
      {text}
    </h1>
  );
};

export default Heading;
