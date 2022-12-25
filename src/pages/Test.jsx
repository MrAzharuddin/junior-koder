import React from "react";
import { FreeTrail, FreeTrailMobile } from "../components/FreeTrail";
import Landing from "../components/Landing";
import { RefundPolicies } from "../components/Policies";

function Test() {
  return (
    <div>
      <FreeTrail />
      <FreeTrailMobile />
      <RefundPolicies />
      <Landing />
    </div>
  );
}
export default Test;
