import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
          className="text-center text-secondary text-2xl font-bold"
        >
          Let’s Empower Ourselves with Today’s
          <span className="block text-3xl">Language of Creativity</span>
        </h1>
        <div className="flex px-8">
          <div
            data-aos="fade-right"
            className="bg-primary p-12 rounded-lg space-y-6 text-white max-w-[65vw]"
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
          <div data-aos="fade-left">
            <img
              src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-grad text-center">Know Us Better</h1>
          <div className="flex space-x-24 justify-center">
            <div
              data-aos="zoom-in"
              className="bg-primary rounded-md text-white w-80 h-80"
            >
              <p>Our Purpose</p>
            </div>
            <div
              data-aos="zoom-in"
              className="bg-primary rounded-md text-white w-80 h-80"
            >
              <p>Our Mission</p>
            </div>
            <div
              data-aos="zoom-in"
              className="bg-primary rounded-md text-white w-80 h-80"
            >
              <p>Our Vision</p>
            </div>
          </div>
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
    </div>
  );
}

