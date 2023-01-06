import React from "react";
import { useState } from "react";

function BasicVerify({ routeUpdate }) {
  const [studentName, setStudentName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [laptop, setLaptop] = useState("");
  const [remainder, setRemainder] = useState(false);
  function otpHandler() {
    routeUpdate();
  }
  return (
    <div className="bg-primary rounded-lg md:w-1/2 mx-auto md:p-12 p-4 space-y-8 shadow-lg">
      <h1 className="font-bold text-center md:text-3xl text-xl">
        Fill out your basic details
      </h1>
      <div className="space-y-4">
        <div className="flex items-center">
          <p className="flex-1 font-bold md:text-lg text-sm ">Student's Name</p>
          <input
            className="input-new"
            type="text"
            name=""
            id=""
            placeholder="Enter Student's full name"
            value={studentName}
            required
            onChange={(e) => {
              setStudentName(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center">
          <p className="flex-1 font-bold md:text-lg text-sm ">Father's Name</p>
          <input
            className="input-new"
            type="text"
            name=""
            id=""
            required
            value={parentName}
            placeholder="Enter Father's name"
            onChange={(e) => {
              setParentName(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center">
          <p className="flex-1 font-bold md:text-lg text-sm ">
            Parent's Contact Number
          </p>
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
          <p className="flex-1 font-bold md:text-lg text-sm ">Grade</p>
          <select
            required
            className="input-new bg-primary"
            name="grade"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="" disabled>
              Standard selection Grade
            </option>
            <option value="1-4">Class 1-4</option>
            <option value="5-8">Class 5-8</option>
            <option value="9-12">Class 9-12</option>
            <option value="12+">Class 12+</option>
          </select>
        </div>
        <div className="flex items-center">
          <p className="flex-1 font-bold md:text-lg text-sm ">School Name</p>
          <input
            className="input-new"
            type="text"
            name=""
            id=""
            placeholder="Enter your School name"
            value={school}
            required
            onChange={(e) => {
              setSchool(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center">
          <p className="flex-1 font-bold md:text-lg text-sm ">
            Do you have a laptop/PC?
          </p>
          <div className="flex flex-1 space-x-12 text-lg">
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
        <div className="flex items-center">
          <p className="flex-1 font-bold md:text-lg text-sm ">
            Get reminder for class on whatsapp?
          </p>
          <div className="flex-1">
            <input
              type="checkbox"
              name="check"
              id="check"
              value={remainder}
              onChange={(e) => setRemainder(!remainder)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={otpHandler}
          className="bg-white text-primary shadow-md md:text-lg text-sm font-bold rounded-full px-6 py-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default BasicVerify;
