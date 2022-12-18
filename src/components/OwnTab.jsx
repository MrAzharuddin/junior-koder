import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
                  className={`md:px-12 px-4 md:py-2 py-1 md:text-base text-xs text-white uppercase font-bold rounded-md transition-all duration-500 ease-in-out ${value.id === choice
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
                    className={`${choice === "001"
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
          ) :
            <div className="flex flex-wrap space-y-4 lg:space-x-6 justify-evenly text-white">
              {
                props?.curriculum[choice].map((value, index) => {
                  return (
                    <div key={index} className={`${choice === "001"
                        ? "bg-secondary"
                        : choice === "002"
                          ? "bg-secondary"
                          : choice === "003"
                            ? "bg-secondary"
                            : "opacity-0"
                      } transition-all flex flex-col justify-around first:mt-4 hover:scale-110 duration-700 py-8 px-4 space-y-3 rounded-xl lg:flex-1 lg:max-w-[26vw] flex-auto`}>

                      <div className="flex justify-between">
                        <p className="font-semibold">{value.title}</p>
                        <p className="bg-primary py-1 px-4 rounded-3xl text-sm">{value.plan}</p>
                      </div>
                      <div>
                        <h2 className="font-semibold text-xl">{value.name}</h2>
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-lg font-semibold">TOPICS COVERED:</h2>
                        <p className="text-sm">{value.topics}</p>
                      </div>
                      <div className="space-y-1">
                        <h2 className="font-semibold text-lg">Learning Platform Used:</h2>
                        <div className="flex flex-wrap gap-2">
                          {value.tools.split(",").map((val, idx) => {

                            return (
                              <p className="px-4 py-1 bg-primary rounded-lg text-sm font-semibold" key={idx}>
                                {val}
                              </p>
                            )
                          })}
                        </div>

                      </div>
                      <div className="space-y-1">
                        <h2 className="font-semibold text-lg">Projects Covered</h2>
                        <p className="text-sm">{value.projects}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-lg">Price for the day</p>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold">&#8377; {value.sp}</p>
                          <p className="line-through">&#8377; {value.mrp}</p>
                          <p className="bg-primary px-6 rounded-md py-1">{value.discount} &#x00025;</p>
                        </div>
                        <div>
                          <p>
                            <span>{value.classes} Classes</span>, 
                            <span> &#8377;
                              {value.sessions} Per session
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center pt-6">
                        <button className="bg-primary px-6 py-2 rounded-md font-bold">
                          <Link to="/">BOOK A FREE TRIAL</Link>
                        </button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          }
        </div>
      </div>
    </>
  );
}
