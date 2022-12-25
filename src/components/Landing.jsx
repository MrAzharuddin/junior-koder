import React from "react";
import { Link } from "react-router-dom";
import { images } from "../utils/images";

function Landing() {
  return (
    <div>
      <div>
        <div></div>
        <div>
          <div>
            <h2 className="text-grad2 text-5xl">
              Code Your Future With Junior Koder
            </h2>
            <p className="text-grad2 text-2xl">
              A place where your kid is taught to love coding
            </p>
          </div>
          <div className="flex text-primary gap-4">
            <div>
              <img src={images.landing.calender} alt="calender" />
              <p>
                Easy class <br /> scheduling
              </p>
            </div>
            <div>
              <img src={images.landing.bilingual} alt="bilingual" />
              <p>
                Billingual <br /> Tutor
              </p>
            </div>
            <div>
              <img src={images.landing.disk} alt="disk" />
              <p>
                Recorded <br /> Classes
              </p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 rounded-xl bg-primary">
              <Link className="text-white" to="/">
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
