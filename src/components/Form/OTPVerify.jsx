import React from "react";
import { useState } from "react";
import { useStore } from "../../store/main";
function OTPVerify({ routeUpdate }) {
  const [otp, setOTP] = useState("");
  const mobile = useStore((state) => state.phoneNumber);
  // console.log(mobile);
  function otpHandler() {
    if (otp.length === 6) {
      let confirmCode = window.confirmationResult;
      confirmCode
        .confirm(otp)
        .then((result) => {
          window.userDetails = result.user;
          routeUpdate();
        })
        .catch((err) => console.error(err));
    }
  }
  return (
    <div className="bg-primary rounded-lg md:w-1/2 mx-auto md:p-12 p-4 space-y-8 shadow-lg">
      <h1 className="font-bold text-center md:text-3xl text-xl">
        Enter your OTP
      </h1>
      <div className="space-y-4">
        <p className="text-lg">
          Fill 6 digit verification code to your {mobile} and verify your
          details
        </p>
        <div className="flex justify-center items-center">
          <input
            className="input-new md:w-1/2"
            type="tel"
            name=""
            id=""
            placeholder="000000"
            value={otp}
            onChange={(e) => {
              setOTP(e.target.value);
            }}
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
