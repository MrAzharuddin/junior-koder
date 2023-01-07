import React from "react";
import { whyus } from "../data/data";

function Whyus() {
  return (
    <div>
      <div className="text-primary space-y-2">
        <h1 className="text-grad md:text-4xl text-2xl max-w-sm">WHY US?</h1>
        <p className="text-2xl">
          Get the best kick start for your kid’s most amazing carrier awaiting
          for them
        </p>
      </div>
      <div className="flex flex-wrap">
        {whyus.map((item) => {
          return (
            <div key={item.title} className="lg:w-1/2 lg:p-12 p-6 text-primary">
              <div className="flex gap-x-6 items-center">
                <div className="max-w-[25%]">
                  <img src={item.imgsrc} alt={item.title} />
                </div>
                <div className="w-full space-y-2">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-base">{item.data}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Whyus;
