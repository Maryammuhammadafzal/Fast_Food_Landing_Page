import React from "react";
import FeaturesBgImage from "../../public/features-bg.png";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { PiNotebookBold } from "react-icons/pi";
import { GiChickenOven } from "react-icons/gi";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const FeaturesPage = () => {
  let features_data = [
    {
      icon: MdFastfood,
      title: "super quality food",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
    },
    {
      icon: MdFastfood,
      title: "original recipes",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
    },
    {
      icon: MdFastfood,
      title: "quick fast delivery",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
    },
    {
      icon: MdFastfood,
      title: "100% fresh foods",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center my-12 h-auto">
      <div
        className=" max-w-7xl w-[85%] px-5 flex justify-center relative items-center  rounded-2xl -z-20 bg-cover bg-center bg-[#242424] h-auto lg:h-[250px]"
        style={{ backgroundImage: `url(${FeaturesBgImage.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/30 h-full w-full -z-10"></div>
        <div className="cards w-full max-lg:h-auto max-lg:flex-wrap flex gap-4 justify-center sm:justify-between items-center">
          {features_data.map(({ title, description }, index) => (
            <Card
              key={index}
              className="lg:w-[250px] sm:w-[45%] h-auto flex flex-col gap-3 bg-transparent border-none"
            >
              <CardContent className="text-white flex flex-col gap-3 px-1">
                {(index === 0 && (
                  <MdFastfood size={50} className="text-red-700" />
                )) ||
                  (index === 1 && (
                    <PiNotebookBold size={50} className="text-red-700" />
                  )) ||
                  (index === 2 && (
                    <TbTruckDelivery size={50} className="text-red-700" />
                  )) ||
                  (index === 3 && (
                    <GiChickenOven size={50} className="text-red-700" />
                  ))}

                <div>
                  <h3 className="staatliches font-normal text-xl capatalize">
                    {title}
                  </h3>
                  <p className="urbanist font-normal text-base">
                    {description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
