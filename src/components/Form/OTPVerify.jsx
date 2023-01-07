import React from "react";

function OTPVerify({ routeUpdate }) {
  function otpHandler() {
    // alert("jhgjh")
    routeUpdate();
  }
  return (
    <div className="bg-primary rounded-lg md:w-1/2 mx-auto md:p-12 p-4 space-y-8 shadow-lg">
      <h1 className="font-bold text-center md:text-3xl text-xl">
        Enter your OTP
      </h1>
      <div className="space-y-4">
        <p className="text-lg">
          Fill 6 digit verification code to your phone number and verify your
          details
        </p>
        <div className="flex justify-center items-center">
          <input
            className="input-new md:w-1/2"
            type="tel"
            name=""
            id=""
            placeholder="000000"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={otpHandler}
          className="bg-white text-primary shadow-md md:text-lg text-sm font-bold rounded-full px-6 py-1"
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default OTPVerify;
