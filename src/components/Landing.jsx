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
            <h2 className="text-grad2">Code Your Future With Junior Koder</h2>
            <p className="text-grad2">
              A place where your kid is taught to love coding
            </p>
          </div>
          <div className="flex">
            <div>
              <img src={images.landing.calender} alt="calender" />
              <p>Easy class scheduling</p>
            </div>
            <div>
              <img src={images.landing.bilingual} alt="bilingual" />
              <p>Billingual Tutor</p>
            </div>
            <div>
              <img src={images.landing.disk} alt="disk" />
              <p>Recorded Classes</p>
            </div>
          </div>
          <div>
            <button>
              <Link to="/">Book Your Free Trial Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
