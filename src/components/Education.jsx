import React, { useState, useEffect } from "react";
import { education } from "../data/data";

function Education() {
  return (
    <div className="pt-12 pb-48 px-4">
      <div className="pb-12 px-4 space-y-4">
        <h1 className="font-bold text-grad2">
          The Saga of Ultimate Revolutionary change in Education
        </h1>
        <p className="md:w-1/3 text-xl text-primary font-semibold">
          Get along with Junior Koder to feel and witness the real revolution
          ever in eduaction
        </p>
      </div>
      <div className="flex lg:gap-8 gap-4 justify-center xl:w-[85%] mx-auto text-white text-center">
        {education.map((item, index) => {
          return (index + 1) % 2 === 0 ? (
            <div className="flex-1 flex flex-col justify-end w-[15%]">
              <div className="bg-primary pt-4 pb-16 flex flex-col justify-between flex-1 px-6 py-4 rounded-md space-y-4">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
              <div className="w-24 h-24 bg-primary mx-auto rounded-full -mt-12">
                <div className="flex justify-center items-end">
                  <div className="h-12 w-0.5 bg-shape mt-24"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-end w-[15%]">
              <div className="bg-secondary pt-4 pb-16 flex flex-col justify-between flex-1 px-6 py-4 rounded-md space-y-4">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
              <div className="w-24 h-24 bg-secondary mx-auto rounded-full -mt-12">
                <div className="flex justify-center items-end">
                  <div className="h-12 w-0.5 bg-shape mt-24"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="xl:w-[90%] h-0.5 bg-shape mx-auto mt-12 flex items-center justify-between">
        <div className="w-4 h-4 bg-secondary rounded-full"></div>
        <div className="w-4 h-4 bg-secondary rounded-full"></div>
      </div>
    </div>
  );
}

export function MobileEducation({ images, intervalTime }) {
  // state to keep track of current image
  const [currentImage, setCurrentImage] = useState(0);

  // function to move to the next image in the array
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };
  // set up an interval to automatically move to the next image
  useEffect(() => {
    const interval = setInterval(nextImage, intervalTime);
    return () => clearInterval(interval);
  }, [intervalTime]);
  return (
    <div className="relative h-64 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={images[currentImage]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Education;
