import React, { useState } from "react";
import validator from "validator";
function MobileForm() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  function otpHandler() {
    var err = [];
    if (phone.length !== 10 || !validator.isMobilePhone(phone)) {
      setError([...error, { field: "phone", message: "Invalid phone number" }]);
      err.push({ field: "phone", message: "Invalid phone number" });
      alert("Please enter a valid phone number");
    }
    if (!validator.isMobilePhone(email)) {
      setError([
        ...error,
        { field: "Email", message: "Invalid Email Address" },
      ]);
      err.push({ field: "Email", message: "Invalid Email Address" });
      alert("Please enter a valid phone number");
    }
    // setError(err);
    console.log(error);
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

function FormVerify() {
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
        <div>
          <MobileForm />
        </div>
      </div>
    </div>
  );
}

export default FormVerify;
