import React from "react";
import { education } from "../data/data";

function Education() {
  return (
    <div className="flex gap-8 justify-center py-8 px-4">
      {education.map((item, index) => {
        return (index + 1) % 2 === 0 ? (
          <div className="bg-primary flex flex-col justify-between flex-1 px-6 py-4 rounded-md space-y-4">
            <div className="space-y-4">
              <h2>{item.name}</h2>
              <p>{item.content}</p>
            </div>
            <div className="w-16 h-16 bg-secondary mx-auto -mb-12 rounded-full"></div>
          </div>
        ) : (
          <div className="bg-secondary flex flex-col justify-between flex-1 px-6 py-4 rounded-md space-y-4">
            <div className="space-y-4">
              <h2>{item.name}</h2>
              <p>{item.content}</p>
            </div>
            <div className="w-16 h-16 bg-primary mx-auto -mb-12 rounded-full"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
