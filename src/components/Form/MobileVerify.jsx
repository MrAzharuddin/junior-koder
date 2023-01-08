import React, { useState } from "react";
import validator from "validator";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../data/firebase";
import { useStore } from "../../store/main";

function MobileVerify(props) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [errorData, setErrorData] = useState([]);
  let updatePhoneNumber = useStore((state) => state.updatePhoneNumber);
  let updateEmail = useStore((state) => state.updateEmail);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      auth
    );
  };
  function otpHandler() {
    var err = [];
    let isPhone = validator.isMobilePhone(phone);
    let isEmail = validator.isEmail(email);
    // setErrorData([]);
    if (phone.length !== 10 || !isPhone) {
      err = [...err, { field: "phone", err: "Invalid Phone Number" }];
    }
    if (!isEmail) {
      err = [...err, { field: "Email", err: "Invalid Email Address" }];
    }
    // if (errorData.length < 3) {
    //   console.log(err);
    //   let newdata = [...err.filter((item) => !errorData.includes(item))];
    //   console.log(newdata);
    //   setErrorData((arr) => [...arr, ...newdata]);
    // }
    if (phone.length === 10 && isEmail) {
      let mobile = "+91" + phone;
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, mobile, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          updatePhoneNumber(mobile);
          updateEmail(email);
          props.routeUpdate();
        })
        .catch((err) => console.log(err));
    }
  }
  // console.log(errorData);

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
        <div>
          {
            /* {errorData.map((item) => {
            console.log(item);
            return <p key={item.field}>* {item.err}</p>;
          })} */
            // JSON.stringify(errorData)
          }
        </div>
        <div id="recaptcha-container"></div>
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

export default MobileVerify;
