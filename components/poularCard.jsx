"use client";
import PopularImage1 from "../public/popular-image1.png";
import PopularImage2 from "../public/popular-image2.png";
import PopularImage3 from "../public/popular-image3.png";
import PopularImage4 from "../public/popular-image4.png";
import PopularBgImage from "../public/popular-bg.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";

const PopularCard = () => {
  const [width , setWidth] = useState(null);
  
  useEffect(()=> {
    setWidth(window.innerWidth);
  }) 
  let Popular_Card_data = [
    {
      image: PopularImage1.src,
      title: "Best Beef Burger",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
    },
    {
      image: PopularImage2.src,
      title: "ALFAREDO PASTA",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
    },
    {
      image: PopularImage3.src,
      title: "DELICIOUS PIZZA",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
    },
    {
      image: PopularImage4.src,
      title: "Spicy Chicken Wings",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
    },
  ];
  return (
    <>
      {width <= 768 ? (
        <>
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            className="w-full  h-auto"
          >
            <div
              className="popular-card mx-auto w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#FFB300]"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col gap-5 items-center">
                <img src={PopularImage1.src} alt="card" className="w-[270px] h-[230px]" />

                {/* Content */}
                <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                  <h3 className="text-xl font-bold text-white zilla-slab-highlight uppercase bg-[#FFB300]">
                    Best Beef Burger
                  </h3>
                  <p className="text-sm text-center text-white urbanist">
                    A team of dreamers and doers building unique interactive music and art.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="popular-card mx-auto w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#FFB300]"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col gap-5 items-center">
                <img src={PopularImage2.src} alt="card" className="w-[270px] h-[230px]" />

                {/* Content */}
                <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                  <h3 className="text-xl font-bold text-white zilla-slab-highlight uppercase bg-[#FFB300]">
                   ALFAREDO PASTA
                  </h3>
                  <p className="text-sm text-center text-white urbanist">
                    A team of dreamers and doers building unique interactive music and art.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="popular-card mx-auto w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#FFB300]"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col gap-5 items-center">
                <img src={PopularImage3.src} alt="card" className="w-[270px] h-[230px]" />

                {/* Content */}
                <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                  <h3 className="text-xl font-bold text-white zilla-slab-highlight uppercase bg-[#FFB300]">
                    DELICIOUS PIZZA
                  </h3>
                  <p className="text-sm text-center text-white urbanist">
                    A team of dreamers and doers building unique interactive music and art.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="popular-card mx-auto w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#FFB300]"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col gap-5 items-center">
                <img src={PopularImage4.src} alt="card" className="w-[270px] h-[230px]" />

                {/* Content */}
                <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                  <h3 className="text-xl font-bold text-white zilla-slab-highlight uppercase bg-[#FFB300]">
                    Spicy Chicken Wings
                  </h3>
                  <p className="text-sm text-center text-white urbanist">
                    A team of dreamers and doers building unique interactive music and art.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </>
      ) : (
        <>
          {Popular_Card_data.map(({ image, title, description }, index) => (
            <div
              key={index}
              className="popular-card w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#FFB300]"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col gap-5 items-center">
                <img src={image} alt="card" className="w-[270px] h-[230px]" />

                {/* Content */}
                <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                  <h3 className="text-xl font-bold text-white zilla-slab-highlight uppercase bg-[#FFB300]">
                    {title}
                  </h3>
                  <p className="text-sm text-center text-white urbanist">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PopularCard;
