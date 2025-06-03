import Image from "next/image";
import HeroPage from "./Hero/Page";
import FeaturesPage from "./Features/Page";
import PopularPage from "./Popular/Page";
import AboutPage from "./About/Page";
import SignaturePage from "./Signature/Page";
import BannerPage from "./Banner/Page";
import TestimonialPage from "./Testimonial/Page";

export default function Home() {
  return (
   <div className="w-full min-h-screen overflow-hidden">
<FeaturesPage/>
<PopularPage/>
<AboutPage/>
<SignaturePage/>
<BannerPage/>
<TestimonialPage/>
   </div>

  );
}
{/* import { FaFacebook } from "react-icons/fa"; */}
{/* import { TbBrandWhatsappFilled } from "react-icons/tb"; */}
{/* import { FaSquareInstagram } from "react-icons/fa6"; */}
{/* import { FaXTwitter } from "react-icons/fa6"; */}
{/* import { ImLinkedin } from "react-icons/im"; */}
{/* import { TbTruckDelivery } from "react-icons/tb"; */}
{/* import { MdFastfood } from "react-icons/md" */}
{/* import { PiNotebookBold } from "react-icons/pi"; */}
{/* import { GiChickenOven } from "react-icons/gi"; */}
{/* import { CiHeart } from "react-icons/ci"; */}
