import { useEffect, useState } from "react";
// import Carousel from "../components/Carousel";
import FAQs from "../components/FAQs";
import OwnTab from "../components/OwnTab";
import { TbMedal2 } from "react-icons/tb";
import { GiGraduateCap } from "react-icons/gi";
import { BsCheck2Circle, BsCalendarCheckFill } from "react-icons/bs";
import { images } from "../utils/images";
import Aos from "aos";
import "aos/dist/aos.css";
import { db } from "../data/firebase.js";
import { push, ref, set } from "firebase/database";
import validator from "validator";
import FormSuccess from "../components/FormSuccess";
import { basicCurriculum } from "../data/data";

export default function Home() {
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
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });
  }, []);
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
  // console.log(table);
  // console.log(errorData);
  // console.log(childName, parentName, phone, email, table, laptop, remainder);
  return (
    <main className="space-y-4 font-medium">
      {/* 1 */}
      <section className="relative">
        <div className="p-8">
          <div
            className={`flex flex-wrap justify-around ${localFormStatus ? "items-center" : "items-start"
              } `}
          >
            {formStatus || localFormStatus ? (
              <div className="md:max-w-[35vw]">
                <FormSuccess />
              </div>
            ) : (
              <div className="bg-primary p-12 rounded-md text-white w-full md:max-w-[35vw]" id="registerForm">
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
                          className={`junior-input ${(phone.length > 1 && !validator.isNumeric(phone)) ||
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
                          className={`${(phone.length > 1 && !validator.isNumeric(phone)) ||
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
                          <option selected value="" disabled>
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
          {/* <div className="relative">
            <div className="custom-shape-divider-bottom">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
            <div className="flex justify-center items-center relative">
              <div className="bg-primary px-8 py-4 rounded-md text-center space-y-1 text-white">
                <p>
                  Explore the new &amp; most interesting domain of your life
                </p>
                <h2 className="text-3xl font-semibold">WITH US!</h2>
                <div className="py-2">
                  <ol className="flex justify-center items-center flex-wrap space-y-2">
                    <li className="w-1/2">Well guided sessions</li>
                    <li className="w-1/2">Well guided sessions</li>
                    <li className="w-1/2">Well guided sessions</li>
                  </ol>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* 2 */}
      <section className="px-8 pt-8 bg-primary text-white">
        <div className="pb-12">
          <h1 className="font-bold">
            The Saga of Ultimate Revolutionary change in Education
          </h1>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={images.education.education} alt="" />
        </div>
        {/* <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 justify-self-center">
          {[
            {
              name: "Industry 1.0",
              year: 1880,
              desc: "Mechanisation, water and stream powers",
            },
            {
              name: "Industry 2.0",
              year: 1900,
              desc: "Mass production, electric power, assembly line",
            },
            {
              name: "Industry 3.0",
              year: 2000,
              desc: "Computers, automated production, electronics",
            },
            {
              name: "Industry 4.0",
              year: 2010,
              desc: "Cyber-physical, systems, IoT, networking, machine learning",
            },
            {
              name: "Industry 5.0",
              year: 2020,
              desc: "Human-robot collabration, cognitive systems, customization",
            },
          ].map((value, index) => {
            return (
              <div key={index} className="space-y-4 text-center px-8 py-4">
                <p className="bg-secondary text-center py-2 text rounded-md">
                  {value.name}
                </p>
                <p>{value.year}</p>
                <p className="bg-secondary py-2 px-6 rounded-md">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div> */}
        {/* <div>
          <p className="text-center">
            Get along with Junior Koder to feel and witness the real revolution
            ever in eduaction
          </p>
        </div> */}
      </section>
      {/* 3 */}
      <section className="p-8">
        <h1 className="text-grad text-4xl">Milestones Acheived By Us So Far</h1>
        <div className="py-8 md:px-12 px-4">
          <div className="bg-primary px-8 py-8 flex flex-wrap justify-evenly rounded-lg text-white">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              className="flex flex-col items-center space-y-2 lg:border-r-2 p-4"
            >
              <TbMedal2 className="text-7xl text-white" />
              <p className="text-sm">No. Of Students Complted Courses</p>
              <p className="text-2xl font-semibold">1+</p>
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              className="flex flex-col items-center space-y-2 lg:border-r-2 p-4"
            >
              <GiGraduateCap className="text-7xl text-white" />
              <p className="text-sm">No. Of Students Complted Courses</p>
              <p className="text-2xl font-semibold">10+</p>
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              className="flex flex-col items-center space-y-2 lg:border-r-2 p-4"
            >
              <BsCheck2Circle className="text-7xl text-white" />
              <p className="text-sm">No. Of Students Complted Courses</p>
              <p className="text-2xl font-semibold">100%</p>
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              className="flex flex-col items-center space-y-2 p-4"
            >
              <BsCalendarCheckFill className="text-7xl text-white" />
              <p className="text-sm">No. Of Students Complted Courses</p>
              <p className="text-2xl font-semibold">200+</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4 */}
      <section className="p-8 space-y-6">
        <h1 className="text-grad text-4xl">Courses For Your Child</h1>
        <OwnTab curriculum={basicCurriculum} />
      </section>
      {/* 4.1 */}
      <section className="py-8 pl-8 space-y-1 bg-tertiary">
        <div className="space-y-1">
          <h1 className="text-grad text-4xl">Why to learn coding?</h1>
          <p className="text-primary">
            Wondering why you should choose to learn coding?
          </p>
          <p className="text-secondary">
            Well, here we’ve got plenty of unavoidable reason before you
          </p>
        </div>
        <div className="flex justify-end">
          <div className="md:w-4/5 md:pl-2 px-1 flex py-4 md:space-x-8 space-x-4 overflow-y-hidden overflow-x-scroll scrollbar-hide">
            <div className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] flex flex-col items-center mt-8 text-center space-y-4 rounded-md md:flex-1 md:min-w-[30vw] min-w-[85vw] p-6">
              <img
                className="-mt-16"
                src={images.think.think1}
                alt={images.think.think1}
              />
              <h2 className="text-grad font-bold text-xl">
                Improves Logical Thinking
              </h2>
              <p className="text-justify text-primary">
                With constant use of methods and ideas, your child will be able
                to think critically, thereby enhancing his/her logical thinking.
                It’s a soft skill very important for any individual in any
                field.
              </p>
            </div>
            <div className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] flex flex-col items-center mt-8 text-center space-y-4 rounded-md md:flex-1 md:min-w-[30vw] min-w-[85vw] p-6">
              <img
                className="-mt-16"
                src={images.think.think2}
                alt={images.think.think2}
              />
              <h2 className="text-grad font-bold text-xl">
                Enhance Problem Solving Skill
              </h2>
              <p className="text-justify text-primary">
                Problem-solving skill has always been essential to compete and
                strive. Coding helps your child see problems from a new angle
                and come to different solutions.
              </p>
            </div>
            <div className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] mt-8 flex flex-col items-center text-center space-y-4 rounded-md md:flex-1 md:min-w-[30vw] min-w-[85vw] p-6">
              <img
                className="-mt-16"
                src={images.think.think1}
                alt={images.think.think1}
              />
              <h2 className="text-grad font-bold text-xl">
                Improves Creativity
              </h2>
              <p className="text-justify text-primary">
                With coding, your child will be capable of coming up with
                endless solutions to a problem, hence making him/her creative.
                Coding will make your child creative and useful in many fields.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 5 */}
      <section className="py-6 space-y-8 px-8">
        <div>
          <h1 className="text-grad text-5xl">
            Steps to avail Our Free Trial Classes
          </h1>
          <p className="text-grad text-xl">Follow below steps to get started</p>
        </div>
        <div className="flex flex-wrap justify-evenly space-y-6">
          {[
            {
              heading: "Fill up the prompted lead form",
              text: "Fill your completed details as per instructed in the lead form available at the top",
            },
            {
              heading: "Connect with counselor",
              text: "And it's free! Register for a quick consultation call where we understand the student's needs and answer your questions.",
            },
            {
              heading: "Selecṭ your course",
              text: "Choose from a range of grade-appropriate courses that feature project-based learning and problem solving.",
            },
            {
              heading: "Start Learning!",
              text: "Our courses provide interactive and fun learning experiences in small groups or private classes that fit your schedule.",
            },
          ].map((value, index) => {
            return (
              <div
                className="first:mt-6 flex items-center space-x-6"
                key={index}
              >
                <div className="rounded-full space-y-4 text-center text-white bg-secondary w-72 h-72 flex flex-col justify-center items-center">
                  <div className="space-y-1">
                    <p className="text-2xl font-semibold">
                      {index + 1 < 10 ? "0" + (index + 1) : index + 1}.
                    </p>
                    <p className=" text-xl font-semibold px-2">
                      {value.heading}
                    </p>
                  </div>
                  <p className="font-medium px-4 text-center">{value.text}</p>
                </div>
                {index < 3 ? (
                  <img
                    className="w-16 lg:block hidden"
                    src={images.arrows.left}
                    alt=""
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
      {/* 6 */}
      <section className="py-6 space-y-8 px-8">
        <h1 className="text-grad w-1/5">Why US?</h1>
        <p className="text-primary font-semibold text-xl">
          It’s not Ninja Hathori’s set but still we have proficiency of
          inculcating Ninja’s Coding Techique
        </p>
        <div>
          {[
            {
              title:
                "We primarily focus on imparting knowledge that can be easily comprehended by your child.  We primarily focus on imparting knowledge that can be easily comprehended by your child.",
            },
            {
              title:
                "We primarily focus on imparting knowledge that can be easily comprehended by your child.  We primarily focus on imparting knowledge that can be easily comprehended by your child.",
            },
            {
              title:
                "We primarily focus on imparting knowledge that can be easily comprehended by your child.  We primarily focus on imparting knowledge that can be easily comprehended by your child.",
            },
          ].map((value, idx) => {
            return (
              <div
                key={idx}
                className="flex teacher-alt md:space-x-12 py-4 text-white items-center"
              >
                <div className="md:block hidden">
                  <img
                    className=""
                    src={images.whyus[idx]}
                    alt={images.whyus[idx]}
                  />
                </div>
                <div className="md:block hidden">
                  {(idx + 1) % 2 !== 0 ? (
                    <img src={images.arrows.left} alt={images.arrows.left} />
                  ) : (
                    <img src={images.arrows.right} alt={images.arrows.right} />
                  )}
                </div>
                <div className="bg-primary lg:w-2/5 md:w-3/5 w-full py-4 px-8 rounded-lg">
                  <p className="text-lg">{value.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* 6.1 */}
      <section className="py-6 space-y-1 px-8 bg-tertiary my-24">
        <div className="space-y-1">
          <h1 className="text-grad">Parents who love us</h1>
          <p className="text-primary font-semibold text-xl md:max-w-lg">
            Let’s hear about us from someone like you who have trusted us and
            got soo much in return for their children
          </p>
        </div>
        <div className="flex justify-end">
          <div className="md:w-4/5 pl-2 flex py-4 space-x-8 overflow-y-hidden overflow-x-scroll scrollbar-hide">
            <div className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] space-x-4 flex rounded-md md:flex-1 md:min-w-[35vw] min-w-[80vw] p-6">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt=""
                  className="w-60 rounded-full  shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-grad max-w-xs text-2xl">
                  Mrs. Suzain Malik
                </h2>
                <p className="text-primary">Parent of: Zayra Malik</p>
                <p className="text-secondary text-sm">
                  With constant use of methods and ideas, your child will be
                  able to think critically, there “Junior Koder has laid the
                  perfect foundation for Coding which is eventually going to
                  last forever as her skill. Thank you for making this new
                  domain of my child learning curve so interesting “enhancing
                  his/her logical thinking. It’s a soft skill very important for
                  any individual in any field.
                </p>
              </div>
            </div>
            <div className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] space-x-4 flex rounded-md md:flex-1 md:min-w-[35vw] min-w-[80vw] p-6">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt=""
                  className="w-60 rounded-full  shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-grad max-w-xs text-2xl">Mrs. Suzain Malik
                </h2>
                <p className="text-primary">Parent of: Zayra Malik</p>
                <p className="text-secondary text-sm">
                  With constant use of methods and ideas, your child will be
                  able to think critically, there “Junior Koder has laid the
                  perfect foundation for Coding which is eventually going to
                  last forever as her skill. Thank you for making this new
                  domain of my child learning curve so interesting “enhancing
                  his/her logical thinking. It’s a soft skill very important for
                  any individual in any field.
                </p>
              </div>
            </div>
            <div className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] space-x-4 flex rounded-md md:flex-1 md:min-w-[35vw] min-w-[80vw] p-6">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt=""
                  className="w-60 rounded-full shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-grad max-w-xs text-2xl">
                  Mrs. Suzain Malik
                </h2>
                <p className="text-primary">Parent of: Zayra Malik</p>
                <p className="text-secondary text-sm">
                  With constant use of methods and ideas, your child will be
                  able to think critically, there “Junior Koder has laid the
                  perfect foundation for Coding which is eventually going to
                  last forever as her skill. Thank you for making this new
                  domain of my child learning curve so interesting “enhancing
                  his/her logical thinking. It’s a soft skill very important for
                  any individual in any field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6.2 */}
      <section className="p-8 space-y-4 bg-tertiary">
        <div className="space-y-1">
          <h1 className="text-grad">
            What students have to say about our curriculum
          </h1>
          <p className="text-primary font-semibold text-xl md:max-w-lg">
            No it’s time to have some small interaction with students who have
            been with us to learn this very new and dynamic skill
          </p>
        </div>
        <div className="flex justify-end">
          <div className="md:w-4/5 px-2 flex py-4 space-x-8 overflow-x-scroll scrollbar-hide">
            <div className="space-y-6 md:min-w-[30vw] min-w-[80vw]">
              <video
                className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                controls
              />
              <div className="text-primary text-sm -space-y-1">
                <p className="font-bold text-xl">Kritika Khurana</p>
                <p>Class: VI</p>
                <p>
                  Plan: <span className="font-bold">Standard</span>
                </p>
              </div>
            </div>
            <div className="space-y-6 md:min-w-[30vw] min-w-[80vw]">
              <video
                className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                controls
              />
              <div className="text-primary text-sm -space-y-1">
                <p className="font-bold text-xl">Kritika Khurana</p>
                <p>Class: VI</p>
                <p>
                  Plan: <span className="font-bold">Standard</span>
                </p>
              </div>
            </div>
            <div className="space-y-6 md:min-w-[30vw] min-w-[80vw]">
              <video
                className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                controls
              />
              <div className="text-primary text-sm -space-y-1">
                <p className="font-bold text-xl">Kritika Khurana</p>
                <p>Class: VI</p>
                <p>
                  Plan: <span className="font-bold">Standard</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-2">
          <div>
            <video
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              controls
            />
            <div>
              <p>Kritika Khurana</p>
              <p>Class: VI</p>
              <p>Plan: Standard</p>
            </div>
          </div>
        </div> */}
      </section>
      {/* 7 */}
      {/* <section className="p-8 space-y-4">
        <h1 className="text-grad md:w-1/5">What parents have for US?</h1>
        <div className="">
          <Carousel />
        </div>
      </section> */}

      {/* 8 */}
      <section className="py-8 space-y-4">
        <h1 className="text-grad px-8 md:max-w-sm">Meet Our Instructors</h1>
        <div className="flex overflow-x-auto px-6 cursor-pointer scrollbar-hide space-x-6 py-6 max-w-[95vw] mx-auto">
          {[{
            imgName: images.tutors.divya,
            tutorName: 'Divya aggarwal',
            classGroup: '1-8',
            courses: 'JAVA'
          },
          {
            imgName: images.tutors.jagriti,
            tutorName: 'Jagriti ratnani',
            classGroup: '5-8',
            courses: 'python, JAVA, ML'
          },
          {
            imgName: images.tutors.shanzae,
            tutorName: 'Shanzae ahamed',
            classGroup: '5-8',
            courses: 'Fullstack Developer'
          },
          {
            imgName: images.tutors.hemangi,
            tutorName: 'Hemangi patil',
            classGroup: '5-8',
            courses: 'python, web developer and ML'
          },
          {
            imgName: images.tutors.shruti,
            tutorName: 'Shruti mehrotra',
            classGroup: '9-12',
            courses: 'python, web developer'
          },
          {
            imgName: images.tutors.priyanka,
            tutorName: 'Priyanka das',
            classGroup: '1-4',
            courses: 'C, C++, HTML, JAVA, SQL'
          }].map((res, index) => {
            return (
              <div
                key={index + res.name}
                className="flex max-w-xs basis-full grow-0 shrink-0 bg-shape flex-col py-8 px-6 text-white items-center rounded-xl hover:scale-110 transition-all duration-500"
              >
                <div className="py-2">
                  <img
                    src={res.imgName}
                    className="rounded-full w-48"
                    alt={res.tutorName}
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-2xl font-semibold capitalize">{res.tutorName}</p>
                    <p className="text-lg">{res.classGroup}</p>
                  </div>
                  <p className="text-lg font-semibold">{res.courses}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* 9 */}
      <section className="p-8 space-y-4">
        <h1 className="text-center text-grad">Our Partners</h1>
        <div className="flex flex-wrap pt-4">
          <div className="flex md:flex-1">
            <img
              className="hidden md:block"
              src={images.partners.partners}
              alt={images.partners.partners}
            />
            <div>
              <p>
                Our associations with schools to create a better tomorrow for
                young ones out there.
              </p>
              <h3>Meet Our Partners!</h3>
            </div>
          </div>
          <div className="md:flex-1 flex flex-col justify-between  w-full space-y-4 md:px-8 py-4">
            <div className="md:space-y-2 space-y-4">
              <div className="bg-secondary px-12 rounded-lg py-4 w-fit text-white">
                <img src="" alt="" />
                <p className="font-bold">ABC International School</p>
              </div>
              <div className="bg-secondary px-12 rounded-lg py-4 w-fit text-white md:ml-auto ml-0">
                <img src="" alt="" />
                <p className="font-bold">ABC International School</p>
              </div>

              <div className="bg-secondary px-12 rounded-lg py-4 w-fit text-white">
                <img src="" alt="" />
                <p className="font-bold">ABC International School</p>
              </div>
            </div>
            <div>
              <p className="md:text-right text-grad">
                your organization not in the list? Want to get alon. Join Us Now
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 10 */}
      <section className="p-8 space-y-4">
        <h2 className="text-grad text-6xl text-center py-4">FAQs</h2>
        <div className="flex justify-between items-center ">
          <div className="flex-1">
            <FAQs />
          </div>
          <div className="lg:flex flex-1 flex-col justify-center items-center space-y-2 hidden">
            <img src={images.faq.faq} alt="" />
          </div>
        </div>
      </section>
      <div className="hidden">{JSON.stringify(errorData, null, 2)}</div>
    </main>
  );
}
