import React from "react";
import { education } from "../data/data";

function Education() {
  return (
    <div className="flex gap-8 justify-center py-8 px-4">
      {education.map((item, index) => {
        return (index + 1) % 2 === 0 ? (
          <div className="flex-1 w-[15%]">
            <div className="bg-primary min-h-[30vh] flex flex-col justify-between flex-1 px-6 py-4 rounded-md space-y-4">
              <div className="space-y-4">
                <h2>{item.name}</h2>
                <p>{item.content}</p>
              </div>
            </div>
            <div className="w-16 h-16 bg-red-900 mx-auto rounded-full"></div>
          </div>
        ) : (
          <div className="flex-1 w-[15%]">
            <div className="bg-secondary min-h-[30vh] flex flex-col justify-between flex-1 px-6 py-4 rounded-md space-y-4">
              <div className="space-y-4">
                <h2>{item.name}</h2>
                <p>{item.content}</p>
              </div>
            </div>
            <div className="w-16 h-16 bg-red-900 mx-auto rounded-full"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
