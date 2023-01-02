import React, { useState, useCallback, useEffect } from "react";
import { education } from "../data/data";

let count = 0;

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
            <div  key={index} className="flex-1 flex flex-col justify-end w-[15%]">
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
            <div key={index}  className="flex-1 flex flex-col justify-end w-[15%]">
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
  // images in variable
  const featuredImages = images;
  // state to keep track of current image
  const [currentImage, setCurrentImage] = useState(0);

  // function to move to the next image in the array
  const nextImage = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentImage(count);
    //console.log(count);
  };

  // function to move to the prev image in the array
  const prevImage = () => {
    const prodLength = featuredImages.length;
    count = (currentImage + prodLength - 1) % prodLength;
    setCurrentImage(count);
    //console.log(count);
  };

  const slideScroll = useCallback(() => {
    setInterval(() => {
      const newImage = () => {
        count = (count + 1) % featuredImages.length;
        setCurrentImage(count);
        //console.log(count);
      };
      newImage();
    }, intervalTime);
  }, [intervalTime, featuredImages.length]);

  useEffect(() => {
    slideScroll();
  }, [slideScroll]);

  return (
    <div className="max-w-screen-xl m-auto">
      <div className="w-full relative select-none">
        <div className="aspect-w-16 aspect-h-9">
          <img src={featuredImages[count]} alt="" />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center px-3">
          <button onClick={() => prevImage()}>Previous</button>
          <button onClick={() => nextImage()}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Education;
