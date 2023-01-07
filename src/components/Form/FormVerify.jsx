import React, { useState, useEffect } from "react";
import BasicVerify from "./BasicVerify";
import MobileVerify from "./MobileVerify";
import OTPVerify from "./OTPVerify";
import SuccessForm from "./SuccessForm";

function FormVerify() {
  const [route, setRoute] = useState(1);
  useEffect(() => {
    console.log(route);
  }, [route]);
  function getComponents(route) {
    switch (route) {
      case 1:
        return <MobileVerify routeUpdate={() => setRoute(2)} />;
      case 2:
        return <OTPVerify routeUpdate={() => setRoute(3)} />;
      case 3:
        return <BasicVerify routeUpdate={() => setRoute(4)} />;
      case 4:
        return <SuccessForm />;
      default:
        return <MobileVerify routeUpdate={() => setRoute(2)} />;
    }
  }
  return (
    <div className="text-white form-grad min-h-screen p-8">
      <div>
        <div className="flex gap-8 text-white p-12">
          <div className="space-y-4 ">
            <h1 className="text-4xl font-bold">Book Your Free Trail</h1>
            <p className="text-xl">
              Fill the form below with your details and get the chance to avail
              our free class and stand a chance to get free consultation from
              our expert
            </p>
          </div>
          <div className="w-[50%]">
            <img src="https://picsum.photos/id/4/1200/600" alt="" />
          </div>
        </div>
        <div>{getComponents(route)}</div>
      </div>
    </div>
  );
}

export default FormVerify;
