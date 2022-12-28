import React from "react";
import { images } from "../utils/images";

const metaData = [
  {
    id: "4SJv",
    title: "Introduction to programming",
    text: "Learning to code can be a fun and rewarding experience for kids of all ages. It can help them develop important problem-solving and critical thinking skills, and it can also be a gateway to a wide range of careers in the tech industry.",
    imgSrc: images.courses.student,
    imgAlt: "student",
  },
  {
    id: "6efS",
    title: "Introduction to App development",
    text: "Hello! If you're interested in learning how to develop mobile apps, you're in the right place. Developing apps can be a rewarding and exciting way to create software that can be used by people all over the world.",
    imgSrc: images.courses.appcourse,
    imgAlt: "Mobile App Development",
  },
  {
    id: "WksV",
    title: "Python for its standard",
    text: "Python is a good programming language for high school students since it has a straightforward syntax that is simple to learn and write code in. Additionally, Python includes a sizable standard library which performs reading and writing files, connecting to the internet, and running calculations.",
    imgSrc: images.courses.AIRobo,
    imgAlt: "hacker",
  },
];

function CourseHome() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-grad text-4xl">Courses For Your Child</h1>
      <div className="flex flex-wrap justify-evenly gap-8 xl:w-4/5 mx-auto sm:p-0 p-8">
        {metaData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex-1 flex flex-col justify-between lg:min-w-[30%] md:min-w-[30vw] md:max-w-[40vw] sm:min-w-[60vw] min-w-[80vw] px-12 py-8 border-2 rounded-xl border-primary space-y-3"
            >
              <div className="flex gap-4">
                <h2 className="font-bold sm:text-xl text-lg text-primary text-center uppercase">
                  {item.title}
                </h2>
              </div>
              <div>
                <img
                  className="w-2/3 mx-auto"
                  src={item.imgSrc}
                  alt={item.imgAlt}
                />
              </div>
              <div>
                <p className="text-secondary sm:text-base text-sm">
                  {item.text}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="px-8 py-1 bg-primary rounded-full text-white font-bold">
                  Explore Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseHome;
