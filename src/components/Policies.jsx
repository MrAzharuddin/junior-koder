import React from "react";
import { refund } from "../data/data";

export function RefundPolicies() {
  return (
    <div>
      {refund.map((val, idx) => {
        return idx > 0 ? (
          idx % 2 === 0 ? (
            <p
              key={idx}
              className="md:px-20 px-8 bg-[#3d14a41a] py-4 md:text-base text-sm"
            >
              {val}
            </p>
          ) : (
            <p key={idx} className="md:px-20 px-8 py-4 md:text-base text-sm">
              {val}
            </p>
          )
        ) : (
          <h1
            key={idx}
            className="font-semibold text-center md:text-4xl text-3xl py-8 px-8"
          >
            {val}
          </h1>
        );
      })}
    </div>
  );
}

// export default Policies;
