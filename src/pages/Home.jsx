import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import FAQs from '../components/FAQs';
import OwnTab from '../components/OwnTab';
import { TbMedal2 } from 'react-icons/tb';
import { GiGraduateCap } from 'react-icons/gi';
import { BsCheck2Circle, BsCalendarCheckFill } from 'react-icons/bs';
import { images } from '../utils/images';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { db } from '../data/firebase.js';

export default function Home() {
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [table, setTable] = useState('');
  const [laptop, setLaptop] = useState('');
  const [remainder, setRemainder] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 120,
    });
  }, []);
  console.log(childName, parentName, phone, email, table, laptop, remainder);
  return (
    <main className="space-y-4 font-medium">
      {/* 1 */}
      <section className="relative">
        <div className="p-8">
          <div className="flex flex-wrap justify-around items-start">
            <div className="bg-primary p-12 rounded-md text-white w-full md:max-w-[35vw]">
              <div className="flex flex-col space-y-2 text-lg">
                <h1 className="text-center font-bold">Book Your Free Trial</h1>
                <form action="/">
                  <div className="flex flex-col space-y-2">
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Child’s Name"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                      />
                    </div>
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Parent’s Name"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                      />
                    </div>
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Parent’s Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Parent’s email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Standard selection Table"
                        value={table}
                        onChange={(e) => setTable(e.target.value)}
                      />
                    </div>
                    <div>
                      <p>Do you laptop/PC?</p>
                      <div className="flex space-x-12">
                        <div className="space-x-2">
                          <input
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
                      <button className="w-4/5 bg-white px-8 py-2 rounded-md text-primary font-bold">
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
        <div className="pb-8">
          <h1 className="font-bold">Education 4.0</h1>
          <p>The Saga of Ultimate Revolutionary change in Education</p>
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
        <OwnTab />
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
              heading: 'Fill up the prompted lead form',
              text: 'Fill your completed details as per instructed in the lead form available at the top',
            },
            {
              heading: 'Connect with counselor',
              text: "And it's free! Register for a quick consultation call where we understand the student's needs and answer your questions.",
            },
            {
              heading: 'Selecṭ your course',
              text: 'Choose from a range of grade-appropriate courses that feature project-based learning and problem solving.',
            },
            {
              heading: 'Start Learning!',
              text: 'Our courses provide interactive and fun learning experiences in small groups or private classes that fit your schedule.',
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
                      {index + 1 < 10 ? '0' + (index + 1) : index + 1}.
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
                'We primarily focus on imparting knowledge that can be easily comprehended by your child.  We primarily focus on imparting knowledge that can be easily comprehended by your child.',
            },
            {
              title:
                'We primarily focus on imparting knowledge that can be easily comprehended by your child.  We primarily focus on imparting knowledge that can be easily comprehended by your child.',
            },
            {
              title:
                'We primarily focus on imparting knowledge that can be easily comprehended by your child.  We primarily focus on imparting knowledge that can be easily comprehended by your child.',
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
                <div className="bg-primary xl:w-1/5 lg:2/5 md:3/5 w-full py-4 px-8 rounded-lg">
                  <p className="text-lg">{value.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* 7 */}
      <section className="p-8 space-y-4">
        <h1 className="text-grad w-1/5">What parents have for US?</h1>
        <div className="">
          <Carousel />
        </div>
      </section>
      {/* 8 */}
      <section className="py-8 space-y-4">
        <h1 className="text-grad px-8">Meet Our Team</h1>
        <div className="flex xl:justify-center overflow-x-auto px-8 cursor-pointer space-x-6 py-6 w-full">
          {[
            {
              name: 'Maria Aziz',
              role: 'Software Engineer and Instructor',
              desc: 'Machine Learning Instructor',
            },
            {
              name: 'Maria Aziz',
              role: 'Software Engineer and Instructor',
              desc: 'Machine Learning Instructor',
            },
            {
              name: 'Maria Aziz',
              role: 'Software Engineer and Instructor',
              desc: 'Machine Learning Instructor',
            },
            {
              name: 'Maria Aziz',
              role: 'Software Engineer and Instructor',
              desc: 'Machine Learning Instructor',
            },
          ].map((res, index) => {
            return (
              <div
                key={index + res.name}
                className="flex bg-shape min-w-max flex-col py-8 px-6 text-white items-center rounded-xl hover:scale-110 transition-all duration-500"
              >
                <div className="py-4">
                  <img
                    src="https://via.placeholder.com/150"
                    className="rounded-full"
                    alt=""
                  />
                </div>
                <div className="text-center space-y-4">
                  <div>
                    <p className="text-xl font-semibold">{res.name}</p>
                    <p className="text-sm">{res.role}</p>
                  </div>
                  <p className="text-xl font-semibold">{res.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* 9 */}
      <section className="p-8 space-y-4">
        <h1 className="text-center text-grad">Our Service Sponsors</h1>
        <p className="text-center">
          Partners Helping us in creating a better tomorrow for you
        </p>
      </section>
      {/* 10 */}
      <section className="p-8 space-y-4 lg:mb-40 md:mb-44 sm:mb-52 mb-64">
        <h2 className="text-grad text-6xl text-center py-4">FAQs</h2>
        <div className="flex justify-between items-center ">
          <div className="w-full">
            <FAQs />
          </div>
          <div className="lg:flex flex-col justify-center items-center space-y-2 hidden">
            <img
              className="w-1/2"
              src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
