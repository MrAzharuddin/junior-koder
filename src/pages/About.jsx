import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HoverCard from "../components/HoverCard";
import { ourValues } from "../data/data";
import { images } from "../utils/images";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });
  }, []);
  return (
    <div className="min-h-[calc(100vh-12vh)] py-6">
      <section className="space-y-6 ">
        <h1
          data-aos="fade-down"
          className="text-center text-secondary text-2xl font-bold py-4"
        >
          Let’s Empower Ourselves with Today’s
          <span className="block text-3xl">Language of Creativity</span>
        </h1>
        <div className="flex px-8">
          <div
            data-aos="fade-right"
            className="bg-primary p-12 rounded-lg space-y-6 text-white lg:max-w-[65vw]"
          >
            <p className="text-4xl">Our Story</p>
            <p>
              In a world where technology is getting smarter, we need to make
              our kids the smartest! To compete in this world full of
              competition, we need to be prepared. As Stephen Hawking said, "You
              want to pursue a career in the 21st Century, basic computer
              programming is an essential skill to learn". <br /> <br /> We, at
              Junior Koder, provide one-on-one live and interactive online
              coding classes for ages 6-18 years. From the comfort of your home,
              watch your child become a coder with ease. <br /> <br /> The
              classes are conducted by trained and professional faculty. Let
              your children be the creators of the new world. Steve Jobs rightly
              said, "Everyone should learn how to code, it teaches you how to
              think"
            </p>
          </div>
          <div data-aos="fade-left" className="lg:block hidden">
            <img src={images.about.about} alt="" />
          </div>
        </div>
      </section>
      <section className="p-8 space-y-4">
        <div className="space-y-6">
          <h1 className="text-grad text-center">Know Us Better</h1>
          <HoverCard />
        </div>
      </section>
      <section className="p-8 space-y-12">
        <div>
          <h1 className="text-center text-grad text-4xl font-extrabold">
            Our Values
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly gap-8">
          {ourValues.map((value, index) => {
            return (
              <div
                key={index}
                className="py-8 px-16 lg:w-[30%] md:w-[45%] bg-background space-y-4 rounded-lg relative group"
              >
                <div class="w-11 overflow-hidden inline-block absolute left-0 top-0 opacity-0 group-hover:rotate-[360deg] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div class=" h-16  bg-secondary rotate-45 transform origin-top-right"></div>
                </div>
                <h2 className="text-grad  text-center text-xl font-extrabold">
                  {value.title}
                </h2>
                <p className="text-primary text-semibold leading-5">
                  {value.data}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="p-8 space-y-4">
        <h1 className="text-grad">Meet Our Instructors</h1>
        <div className="space-x-8 flex justify-center py-6">
          {[
            {
              name: "Maria Aziz",
              role: "Software Engineer and Instructor",
              desc: "Machine Learning Instructor",
            },
            {
              name: "Maria Aziz",
              role: "Software Engineer and Instructor",
              desc: "Machine Learning Instructor",
            },
            {
              name: "Maria Aziz",
              role: "Software Engineer and Instructor",
              desc: "Machine Learning Instructor",
            },
            {
              name: "Maria Aziz",
              role: "Software Engineer and Instructor",
              desc: "Machine Learning Instructor",
            },
          ].map((res, index) => {
            return (
              <div
                key={index + res.name}
                className="flex bg-shape flex-col py-8 px-6 text-white items-center rounded-xl hover:scale-110 transition-all duration-500"
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
      <section className="p-8 bg-background">
        <div className="flex items-center">
          <div className="space-y-12 w-full md:px-16 ">
            <div className="md:w-3/5 space-y-6">
              <h2 className="text-grad text-4xl">
                Want to become part of JKoder team
              </h2>
              <p className="md:w-4/5 text-lg pr-4 text-primary leading-5">
                Yes as a part of thank giving gesture for visitng us we’re
                providing you a free trial class
              </p>
            </div>
            <div className="flex md:justify-end justify-center">
              <button className="px-8 py-2 rounded-full bg-secondary shadow-lg">
                <Link
                  className="text-white font-semibold md:text-base text-sm"
                  to="/"
                >
                  Click Here To Connect with Us
                </Link>
              </button>
            </div>
          </div>
          <div className="max-w-[40vw] md:block hidden">
            <img src={images.landing.rocketGif} alt="vacancy" />
          </div>
        </div>
      </section>
    </div>
  );
}
