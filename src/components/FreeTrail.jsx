import React from "react";
import { steps } from "../data/data";

export function FreeTrail() {
  return (
    <div className="py-4 space-y-24">
      <div className="px-8 space-y-1">
        <h1 className="text-grad max-w-xl">
          Steps to avail Our Free Trial Classes
        </h1>
        <p className="text-grad max-w-lg text-xl">
          Follow below steps to get started
        </p>
      </div>
      <hr className="bg-shape h-[3px] w-full absolute" />
      <div className="flex justify-evenly items-start bg-tertiary px-8">
        {steps.map((val, idx) => {
          return (
            <div className="flex-1 text-center py-8" key={idx}>
              <div className="lg:px-4 px-2 space-y-4">
                <div className="flex justify-center items-center mt-2">
                  <div className="lg:w-28 lg:h-28 w-20 h-20 text-white lg:-mt-24 -mt-20 bg-secondary drop-shadow-xl rounded-full flex justify-center items-center text-3xl font-black">
                    {idx < 9 ? "0" + (idx + 1) + "." : idx + 1}
                  </div>
                </div>

                <div className="space-y-2 flex flex-col justify-between items-center">
                  <h2 className="text-primary font-black drop-shadow-lg lg:text-lg text-sm lg:leading-5 leading-4">
                    {val.title}
                  </h2>
                  <p className="text-secondary font-semibold lg:text-sm text-xs lg:leading-5 leading-4">
                    {val.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="bg-shape h-[3px] w-full" />
    </div>
  );
}

export function FreeTrailMobile() {
  return (
    <div className="py-4 space-y-6">
      <div className="px-8 space-y-1">
        <h1 className="text-grad max-w-xl text-3xl leading-8">
          Steps to avail Our Free Trial Classes
        </h1>
        <p className="text-grad max-w-lg text-lg">
          Follow below steps to get started
        </p>
      </div>
      <div className="bg-tertiary px-4">
        {steps.map((val, idx) => {
          return (
            <div className="py-4 flex items-center gap-x-4" key={idx}>
              <div className="">
                <div className="w-20 h-20 text-white bg-secondary drop-shadow-xl rounded-full flex justify-center items-center text-xl font-black">
                  {idx < 9 ? "0" + (idx + 1) + "." : idx + 1}
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-primary font-black drop-shadow-lg text-lg leading-5">
                  {val.title}
                </h2>
                <p className="text-secondary font-semibold lg:text-sm text-sm leading-4">
                  {val.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
