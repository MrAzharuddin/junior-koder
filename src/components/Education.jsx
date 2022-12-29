import React from "react";
import { education } from "../data/data";

function Education() {
  return (
    <div>
      {education.map((item, index) => {
        return (index + 1) % 2 !== 0 ? (
          <div className="bg-primary">
            <h1>{item.name}</h1>
          </div>
        ) : (
          <div className="bg-secondary">
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
