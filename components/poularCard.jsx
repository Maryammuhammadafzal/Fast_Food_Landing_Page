"use client";
import PopularImage1 from "../public/popular-image1.png";
import PopularImage2 from "../public/popular-image2.png";
import PopularImage3 from "../public/popular-image3.png";
import PopularImage4 from "../public/popular-image4.png";
import PopularBgImage from "../public/popular-bg.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PopularCard = () => {
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
      {window.innerWidth <= 768 ? (
        <>
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            className="w-full  h-auto"
          >
            <div
              className="popular-card group w-[270px] h-[320px] mb-4 mx-auto rounded-lg relative font-['Jost'] bg-cover bg-center bg-amber-300"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-[250px] h-[300px]">
                <img
                  src={PopularImage1}
                  alt="card"
                  className="w-[270px] h-[230px]"
                />
                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                  <h3 className="text-lg font-bold">
                    Truffle Mushroom Risotto"
                  </h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
            <div
              className="popular-card group w-[270px] h-[320px] mx-auto rounded-lg relative font-['Jost'] bg-cover bg-center bg-amber-300"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-[250px] h-[300px]">
                <img
                  src={PopularImage2}
                  alt="card"
                  className="w-[270px] h-[320px] object-cover"
                />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                  <h3 className="text-lg font-bold">
                    Truffle Mushroom Risotto"
                  </h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
            <div
              className="popular-card group w-[270px] h-[320px] mx-auto rounded-lg relative font-['Jost'] bg-cover bg-center bg-amber-300"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-[250px] h-[300px]">
                <img
                  src={PopularImage3}
                  alt="card"
                  className="w-[270px] h-[320px] object-cover"
                />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                  <h3 className="text-lg font-bold">
                    Truffle Mushroom Risotto"
                  </h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
            <div
              className="popular-card group w-[270px] h-[320px] mx-auto rounded-lg relative font-['Jost'] bg-cover bg-center bg-amber-300"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full py-4 px-3">
                <img
                  src={PopularImage4}
                  alt="card"
                  className="w-[270px] h-[320px] object-cover"
                />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                  <h3 className="text-lg font-bold">
                    Truffle Mushroom Risotto"
                  </h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
              className="popular-card w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-amber-300"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col items-center">
                <img src={image} alt="card" className="w-[270px] h-[230px]" />

                {/* Content */}
                <div className="flex flex-col justify-center items-center w-full h-auto">
                  <h3 className="text-2xl font-bold bg-white staatliches ">{title}</h3>
                  <p className="text-sm">{description}</p>
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
