import React from "react";
import Alum from "../components/Alum";
// import CourseHome from "../components/CourseHome";
import Education, { MobileEducation } from "../components/Education";
// import FooterResponsive from "../components/FooterResponsive";
// import { FooterResponsive } from "../components/Footer";
// import { FreeTrail, FreeTrailMobile } from "../components/FreeTrail";
// import Landing from "../components/Landing";
// import { RefundPolicies } from "../components/Policies";

function Test() {
  return (
    <div>
      {/* <FreeTrail />
      <FreeTrailMobile />
      <RefundPolicies />
      <Landing /> */}
      {/* <CourseHome />
      <FooterResponsive />
      <Education /> */}
      <Education />
      <MobileEducation
        images={[
          "https://picsum.photos/id/1/1200/600",
          "https://picsum.photos/id/2/1200/600",
          "https://picsum.photos/id/3/1200/600",
          "https://picsum.photos/id/4/1200/600",
          "https://picsum.photos/id/5/1200/600",
        ]}



        intervalTime={3000}

      />
      <Alum/>
    </div>
  );
}

export default Test;
