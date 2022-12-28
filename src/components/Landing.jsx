import React from "react";
import { Link } from "react-router-dom";
import { images } from "../utils/images";

function Landing() {
  return (
    <div className="">
      <div className="flex gap-4 items-center text-center min-h-[86.5vh] max-w-screen md:p-0 p-4">
        <div className="max-w-[35vw] rotate-[24deg] transition-all duration-300 ease-in-out md:block hidden">
          <img
            className="w-full lg:ml-20 ml-10"
            src={images.landing.rocketGif}
            alt="Rocket"
          />
        </div>
        <div className="space-y-8 w-full">
          <div className="space-y-4">
            <h2 className="text-grad2 drop-shadow-xl md:text-4xl text-3xl md:px-12">
              Trusted by our thusands of happy users spread across 300+ cities
              and Towns in Nation.
            </h2>
            <p className="text-grad2 md:text-2xl text-xl">
              Code Your Future With Junior Koder
            </p>
          </div>
          <div className="flex justify-center font-bold leading-5 md:text-base text-sm">
            <div className="flex text-primary gap-8">
              <div className="flex flex-wrap md:text-left md:items-center mx-auto">
                <img
                  className="md:p-0 p-2"
                  src={images.landing.calender}
                  alt="calender"
                />
                <p>
                  Easy class <br /> scheduling
                </p>
              </div>
              <div className="flex flex-wrap md:text-left md:items-center mx-auto">
                <img
                  className="md:p-0 p-2"
                  src={images.landing.bilingual}
                  alt="bilingual"
                />
                <p>
                  Billingual <br /> Tutor
                </p>
              </div>
              <div className="flex flex-wrap md:text-left md:items-center mx-auto">
                <img
                  className="md:p-0 p-2"
                  src={images.landing.disk}
                  alt="disk"
                />
                <p>
                  Recorded <br /> Classes
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="px-8 py-2 rounded-full bg-primary shadow-lg">
              <Link
                className="text-white font-semibold md:text-base text-sm"
                to="/lead-form"
              >
                Book Your Free Trial Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
