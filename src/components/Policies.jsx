import React from "react";
import { refund } from "../data/data";

function Policies() {
  return (
    <div>
      {refund.map((val, idx) => {
        return idx > 0 ? (
          idx % 2 === 0 ? (
            <p className="p-4 bg-[#3d14a41a]">{val}</p>
          ) : (
            <p className="p-4">{val}</p>
          )
        ) : (
          <h1>{val}</h1>
        );
      })}
    </div>
  );
}

export default Policies;
