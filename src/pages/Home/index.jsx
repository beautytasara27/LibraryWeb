import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import HomeImage1 from "../../assets/images/home_bg1.jpg";
import Instagram from "../../assets/icon/instagram.png";
import Facebook from "../../assets/icon/facebook.png";
import Linkedin from "../../assets/icon/linkedin.png";
import Twitter from "../../assets/icon/twitter.png";
import { Fragment } from "react";
import About from "../About";
import Contact from "../Contact";
import Books from "../Books";

const Home = () => {
  return (
    <Fragment>
      <div className="w-full">
        <div className=" bg-gradient-to-r from-malibu via-havelock to-deep h-screen w-full flex justify-center">
          <div className="mx-2 relative w-full h-full">
            <div className="w-full relative h-full">
              <div className="absolute top-[15%] right-0 h-[70%] lg:w-[50%] z-10 rounded-tl-[80%] rounded-bl-[20%] ">
                <img
                  className="rounded-tl-[80%] rounded-bl-[20%] h-full w-full object-cover blur-sm lg:blur-0"
                  src={HomeImage1}
                  alt="library"
                />
              </div>
            </div>
            <div className="flex justify-center absolute top-0 left-0 w-full">
              <div className="w-full max-w-6xl z-20 h-[70%] mt-2">
                <h1 className="text-[40px] lg:text-[51px]  leading-[72px] font-poppins-bold lg:w-1/2 text-white">
                  The Best 
                  Library That Every Book Lover 
                  Must Visit!
                </h1>
                <p className=" text-lg font-poppins-regular lg:w-1/2 text-white mt-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque quis porta dolor. Nam commodo vestibulum diam
                  quis venenatis.
                </p>
                <button className="py-4 px-10 mt-14 text-white border rounded-[50px] hover:bg-black hover:border-0">
                  Read More
                </button>
                <div className="flex space-x-4 mt-10 mb-10">
                  <img src={Instagram} alt="instagram" />
                  <img src={Facebook} alt="facebook" />
                  <img src={Linkedin} alt="linkedin" />
                  <img src={Twitter} alt="twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <About />
        </div>
        <div className="flex justify-center"> 
        <Books />
        </div>
      <div className="flex justify-center mt-14">
        <Contact />
      </div>
      </div>
    </Fragment>
  );
};
export default Home;
