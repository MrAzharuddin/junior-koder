import React from "react";
import { Link } from "react-router-dom";
import { images } from "../utils/images";

function Landing() {
  return (
    <div>
      <div className="flex gap-4 items-center text-center min-h-[85vh]">
        <div className="max-w-[35vw] rotate-[24deg] transition-all duration-300 ease-in-out ">
          <img className="w-full" src={images.landing.rocketGif} alt="Rocket" />
        </div>
        <div className="space-y-8 w-full">
          <div>
            <h2 className="text-grad2 drop-shadow-xl text-5xl">
              Code Your Future With Junior Koder
            </h2>
            <p className="text-grad2 text-2xl">
              A place where your kid is taught to love coding
            </p>
          </div>
          <div className="flex justify-center font-bold leading-5">
            <div className="flex text-primary gap-8">
              <div className="flex text-left items-center">
                <img src={images.landing.calender} alt="calender" />
                <p>
                  Easy class <br /> scheduling
                </p>
              </div>
              <div className="flex text-left items-center">
                <img src={images.landing.bilingual} alt="bilingual" />
                <p>
                  Billingual <br /> Tutor
                </p>
              </div>
              <div className="flex text-left items-center">
                <img src={images.landing.disk} alt="disk" />
                <p>
                  Recorded <br /> Classes
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="px-8 py-2 rounded-full bg-primary shadow-lg">
              <Link className="text-white font-semibold" to="/">
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
