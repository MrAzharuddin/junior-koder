import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { tabsData } from "../data/data";
export default function OwnTab(props) {
  const [choice, setChoice] = useState("001");
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });
  }, []);
  return (
    <>
      <div className="flex justify-center ">
        <div className="space-y-6">
          <div className="flex justify-center md:space-x-8 space-x-2 pb-2 border-b-2 border-primary">
            {tabsData.map((value) => {
              return (
                <button
                  key={value.id}
                  className={`md:px-12 px-2 md:py-2 py-0.5 md:text-base text-xs text-white uppercase font-bold rounded-md transition-all duration-500 ease-in-out ${
                    value.id === choice
                      ? "courses-grad shadow-[0_4px_4px_0px_rgba(0,0,0,0.45)] scale-105"
                      : "courses-grad-lite scale-100"
                  } `}
                  onClick={(e) => {
                    e.preventDefault();
                    setChoice(value.id);
                  }}
                >
                  <span className="">Classes</span> {value.buttonText}
                </button>
              );
            })}
          </div>
          {props?.curriculum?.size === "short" ? (
            <div className="flex flex-wrap space-y-4 md:space-x-6 justify-evenly text-white">
              {props?.curriculum[choice].map((value, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      choice === "001"
                        ? "bg-secondary"
                        : choice === "002"
                        ? "bg-secondary"
                        : choice === "003"
                        ? "bg-secondary"
                        : "opacity-0"
                    } transition-all first:mt-4 hover:scale-105 duration-700 py-10 px-4 space-y-3 rounded-xl`}
                  >
                    <img
                      className="p-2"
                      src="https://thurrott.s3.amazonaws.com/2016/03/350x150.gif"
                      alt="dummy"
                    />
                    <h2 className="text-2xl">{value.title}</h2>
                    <p className="text-base">
                      Total Duration : {value.duration}
                    </p>
                    <p className="text-base">
                      No of classes : {value.totalClasses}
                    </p>
                    <p className="text-base">
                      No of projects : {value.totalProjects}
                    </p>
                    <button className="w-full text-base rounded-md bg-primary px-4 py-2 mx-auto font-bold">
                      Explore Now
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
