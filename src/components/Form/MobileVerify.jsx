import React, { useState } from "react";
import validator from "validator";

function MobileVerify(props) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function otpHandler() {
    var err = []
    if (phone.length !== 10 || !validator.isMobilePhone(phone)) {
    //   alert("Invalid Mobile Number")
      err = [...err, {field:'phone', err:'Invalid Phone Number'}]
      // setError([...error, {field:'phone', err:'Invalid Phone Number'}])
    }
    if (!validator.isMobilePhone(email)) {
    //   alert("Invalid Email Address")
      err = [...err, {field:'Email', err:'Invalid Email Address'}]
      // setError([...error, {field:'Email', err:'Invalid Email Address'}])
    }
    props.routeUpdate()
    console.log(err);
  }

  return (
    <div className="bg-primary rounded-lg md:w-1/2 mx-auto md:p-12 p-4 space-y-8 shadow-lg">
      <h1 className="font-bold text-center md:text-3xl text-xl">
        Enter your contact details
      </h1>
      <div className="space-y-4 md:w-3/4">
        <div className="flex items-center">
          <p className="flex-1 font-bold md:text-lg text-sm ">Mobile</p>
          <input
            className="input-new"
            type="tel"
            name=""
            id=""
            placeholder="82XXXXXXXX"
            value={phone}
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center">
          <p className="flex-1 font-bold md:text-lg text-sm ">Email</p>
          <input
            className="input-new"
            type="email"
            name=""
            id=""
            required
            value={email}
            placeholder="abc@xyz.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <p className="font-semibold">* fill out the details to generate OTP </p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={otpHandler}
          className="bg-white text-primary shadow-md md:text-lg text-sm font-bold rounded-full px-6 py-1"
        >
          Generate OTP
        </button>
      </div>
    </div>
  );
}

export default MobileVerify