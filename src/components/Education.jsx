import React, { useState, useEffect } from "react";
import { education } from "../data/data";

let count = 0;

function Industry(data){

  const {name, content, year} = data.data

  return (
    <div className="px-4 space-y-4 py-8">
      <div className="flex items-center py-8 gap-2">
        <div className="flex-1 space-y-3">
          <h2 className="text-grad font-bold text-xl leading-5 text-center">{name}</h2>
          <p className="text-primary text-center leading-5 text-sm">{content}</p>
        </div>
        <div className="flex-1 p-4">
          <img src="https://picsum.photos/id/4/1200/600" alt="" />
          
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-grad font-bold bg-[#F9F3ED] shadow-lg px-6 py-1 rounded-full">{year}</p>
      </div>
    </div>
  )
}

function mobileComponents(count) {
  switch (count) {
    case 0:
      return (
        <div className="space-y-4 px-4 py-8">
          <h1 className="text-grad font-bold text-xl leading-5">The Saga of Ultimate Revolutionary change in Education</h1>
          <img className="w-1/2 mx-auto" src="https://picsum.photos/id/1/1200/600" alt="" />
          <p className="text-primary text-center leading-5 ">Get along with Junior Koder to feel and witness the real revolution ever in eduaction</p>
        </div>
      );
    case 1:
      return <Industry data={education[0]}/>;
    case 2:
      return <Industry data={education[1]}/>;
    case 3:
      return <Industry data={education[2]}/>;
    case 4:
      return <Industry data={education[3]}/>;
    case 5:
      return <Industry data={education[4]}/>;
    default:
      return null;
  }
}


function Education() {
  return (
    <div className="pt-12 pb-48 px-4">
      <div className="pb-12 px-4 space-y-4">
        <h1 className="font-bold text-grad2">
          The Saga of Ultimate Revolutionary change in Education
        </h1>
        <p className="xl:w-1/3 md:w-1/2 text-xl text-primary font-semibold">
          Get along with Junior Koder to feel and witness the real revolution
          ever in eduaction
        </p>
      </div>
      <div className="flex lg:gap-8 gap-4 justify-center xl:w-[85%] mx-auto text-white text-center">
        {education.map((item, index) => {
          return (index + 1) % 2 === 0 ? (
            <div
              key={index}
              className="flex-1 flex flex-col justify-end w-[15%]"
            >
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
            <div
              key={index}
              className="flex-1 flex flex-col justify-end w-[15%]"
            >
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

  useEffect(() => {
    setInterval(() => {
      const newImage = () => {
        count = (count + 1) % featuredImages.length;
        setCurrentImage(count);
        // console.log(count);
      };
      newImage();
    }, intervalTime);
  }, [intervalTime, featuredImages.length]);

  return (
    <div className="max-w-screen-xl m-auto">
      <div className="w-full relative select-none">
        <div className="aspect-w-16 aspect-h-9">{mobileComponents(count)}</div>

        <div className="hidden">
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center px-3">
            <button onClick={() => prevImage()}>Previous</button>
            <button onClick={() => nextImage()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
