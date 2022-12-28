import React from "react";
import { useState } from "react";
import { db } from "../data/firebase.js";
import { push, ref, set } from "firebase/database";
import validator from "validator";
import FormSuccess from "../components/FormSuccess";
// Database

function Form() {
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [table, setTable] = useState("");
  const [laptop, setLaptop] = useState("");
  const [remainder, setRemainder] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState([]);
  let localFormStatus = localStorage.getItem("formStatus");

  const pushDB = () => {
    var isValidEmail = validator.isEmail(email);
    var isValidPhone = validator.isMobilePhone(phone);
    let dbref = ref(db, "users");
    let newUserRef = push(dbref);
    if (
      isValidEmail &&
      isValidPhone &&
      phone.length === 10 &&
      childName !== "" &&
      parentName !== "" &&
      laptop !== "" &&
      table !== ""
    ) {
      set(newUserRef, {
        childName,
        parentName,
        phone,
        email,
        table,
        laptop,
        remainder,
      })
        .then(() => {
          localStorage.setItem("formStatus", true);
          setFormStatus(true);
        })
        .catch(alert);
    } else {
      var array = [];
      if (childName === "") {
        array.push({
          code: "1",
          cause: "child name",
          message: "child name",
        });
        // setErrorData(...errorData, {
        //   cause: "child name",
        //   message: "Please enter the child name",
        // });
      }
      if (parentName === "") {
        array.push({
          code: "2",
          cause: "Parent name",
          message: "parent name",
        });
        // setErrorData(...errorData, {
        //   cause: "Parent name",
        //   message: "Please enter the parent name",
        // });
      }
      if (!isValidPhone) {
        array.push({
          code: "3",
          cause: "Invalid phone number",
          message: "mobile number",
        });
        // setErrorData(...errorData, {
        //   cause: "Invalid phone number",
        //   message: "Please enter a valid mobile number",
        // });
      }
      if (!isValidEmail) {
        array.push({
          code: "4",
          cause: "Invalid email address",
          message: "email address",
        });
        // setErrorData(...errorData, {
        //   cause: "Invalid Email address",
        //   message: "Please enter a valid Email",
        // });
      }
      if (laptop === "") {
        array.push({
          code: "6",
          cause: "Radio button",
          message: "laptop details",
        });
        // setErrorData(...errorData, {
        //   cause: "Radio button",
        //   message: "Choose the Yes or No for laptop",
        // });
      }
      if (table === "") {
        array.push({
          code: "5",
          cause: "Class Selection",
          message: "class selection",
        });
        // setErrorData(...errorData, {
        //   cause: "Radio button",
        //   message: "Choose the Yes or No for laptop",
        // });
      }
      if (phone.length > 0) {
        array.push({
          code: "4",
          cause: "Phone number",
          message: "Mobile number length",
        });
      }

      // console.log(array);
      setErrorData(array);
      // setErrorData()
      setError(true);
      let message = array.map((value) => value.message);
      alert(
        (array.length > 1 ? message.join(" , ") : message) +
          (array.length > 1
            ? " are missing. Please fill the form correctly."
            : " is missing. Please fill the form correctly.")
      );
    }
  };

  return (
    <div>
      <section className="relative">
        <div className="py-8 bg-primary">
          <h1>Want a Free Trail Class?</h1>
          <p>
            Welcome to junior koder, the online coding platform for young
            learners! We are excited to offer a free trial class for all new
            students. <br /> <br />
            To sign up for the free trial class, simply fill out the
            registration form on our website. We will contact you to confirm the
            date and time of the class.
          </p>
        </div>
        <div className="p-8">
          <div
            className={`flex flex-wrap justify-around ${
              localFormStatus ? "items-center" : "items-start"
            } `}
          >
            {formStatus || localFormStatus ? (
              <div className="md:max-w-[35vw]">
                <FormSuccess />
              </div>
            ) : (
              <div
                className="bg-primary md:px-12 md:py-12 px-4 py-8 rounded-md text-white w-full md:max-w-[40vw]"
                id="registerForm"
              >
                <div className="flex flex-col space-y-2 text-lg">
                  <h1 className="text-center font-bold">
                    Book Your Free Trial
                  </h1>
                  <form action="/">
                    <div className="flex flex-col space-y-2">
                      <div className="py-2">
                        <input
                          required
                          className="junior-input"
                          type="text"
                          placeholder="Child’s Name"
                          value={childName}
                          onChange={(e) => setChildName(e.target.value)}
                        />
                      </div>
                      <div className="py-2">
                        <input
                          required
                          className="junior-input"
                          type="text"
                          placeholder="Parent’s Name"
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                        />
                      </div>
                      <div className="py-2">
                        <input
                          required
                          className={`junior-input ${
                            (phone.length > 1 && !validator.isNumeric(phone)) ||
                            (phone.length !== 10 && error)
                              ? "border-red-600 placeholder:text-red-600"
                              : ""
                          }`}
                          type="tel"
                          placeholder="Parent’s Number"
                          value={phone}
                          pattern="[6789][0-9]{9}"
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                        <p
                          className={`${
                            (phone.length > 1 && !validator.isNumeric(phone)) ||
                            (phone.length !== 10 && error)
                              ? "block text-sm pt-2 font-bold"
                              : "hidden"
                          }`}
                        >
                          {phone.length > 1 && !validator.isNumeric(phone)
                            ? "* This field must be a number"
                            : error && phone.length !== 10
                            ? "* Phone Number Must be 10 digits"
                            : ""}
                        </p>
                      </div>
                      <div className="py-2">
                        <input
                          required
                          className={`junior-input`}
                          type="email"
                          placeholder="Parent’s email ID"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="py-2">
                        {/* <input
                          className="junior-input"
                          type="text"
                          placeholder="Standard selection Table"
                          value={table}
                          onChange={(e) => setTable(e.target.value)}
                        /> */}
                        <select
                          required
                          className="junior-input bg-primary"
                          name="table"
                          id="table"
                          value={table}
                          onChange={(e) => setTable(e.target.value)}
                        >
                          <option value="" disabled>
                            Standard selection Table
                          </option>
                          <option value="1-4">Class 1-4</option>
                          <option value="5-8">Class 5-8</option>
                          <option value="9-12">Class 9-12</option>
                          <option value="12+">Class 12+</option>
                        </select>
                      </div>
                      <div>
                        <p>Do you laptop/PC?</p>
                        <div className="flex space-x-12">
                          <div className="space-x-2">
                            <input
                              required
                              type="radio"
                              name="laptop"
                              id="yes"
                              value="YES"
                              onChange={(e) => setLaptop(e.target.value)}
                            />
                            <label htmlFor="yes">Yes</label>
                          </div>
                          <div className="space-x-2">
                            <input
                              type="radio"
                              name="laptop"
                              id="no"
                              value="NO"
                              onChange={(e) => setLaptop(e.target.value)}
                            />
                            <label htmlFor="no">No</label>
                          </div>
                        </div>
                      </div>
                      <div className="space-x-2">
                        <input
                          type="checkbox"
                          name="check"
                          id="check"
                          value={remainder}
                          onChange={(e) => setRemainder(!remainder)}
                        />
                        <label htmlFor="check">
                          Get reminder for class on whatsapp?
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            pushDB();
                          }}
                          className="w-4/5 bg-white px-8 py-2 rounded-md text-primary font-bold"
                        >
                          Book Free Trial
                        </button>
                      </div>
                      <div>
                        <p className="text-center">
                          Already have an account? | LOGIN
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div
              className="w-full p-12 md:max-w-[50vw] text-white text-center"
              data-aos="flip-left"
              data-aos-once="true"
            >
              <div className="w-1/2 mx-auto">
                <img
                  src="https://i.ibb.co/6DNRDTz/hero-student.png"
                  alt="hero-student"
                />
              </div>
              <article className="flex flex-col space-y-4">
                <h1 className="font-bold text-4xl text-grad">
                  Code your Future with Junior Koder
                </h1>
                <p className="text-xl text-grad">
                  A place where your kid is taught to love coding
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <div className="hidden">{JSON.stringify(errorData, null, 4)}</div>
    </div>
  );
}

export default Form;
