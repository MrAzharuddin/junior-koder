import { useEffect, useRef } from "react";
import FAQs from "../components/FAQs";
import { TbMedal2 } from "react-icons/tb";
import { GiGraduateCap } from "react-icons/gi";
import { BsCheck2Circle, BsCalendarCheckFill } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { images } from "../utils/images";
import Aos from "aos";
import "aos/dist/aos.css";
import { whyus } from "../data/data";
import { FreeTrail, FreeTrailMobile } from "../components/FreeTrail";
import Landing from "../components/Landing";
import CourseHome from "../components/CourseHome";

export default function Home() {
  const instructorRef = useRef(null);
  const curriculumRef = useRef(null);
  const parentRef = useRef(null);
  const learnRef = useRef(null);

  function slideLeft(ref) {
    ref.current.scrollLeft -= 500;
    console.log(ref.current.scrollLeft);
  }
  function slideRight(ref) {
    ref.current.scrollLeft += 500;
    console.log(ref.current.scrollLeft);
  }
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });
  }, []);

  return (
    <main className="space-y-4 font-medium">
      {/* 1 */}
      <section>
        <Landing />
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
      </section>
      {/* 3 */}
      <section className="p-8">
        <h1 className="text-grad text-4xl">Milestones Acheived By Us So Far</h1>
        <div className="py-8 md:px-12 px-4">
          <div className="bg-primary px-8 py-8 flex flex-wrap justify-evenly rounded-lg text-white">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              className="flex flex-col items-center space-y-2 lg:border-r-2 md:p-4 p-2"
            >
              <TbMedal2 className="sm:text-7xl text-3xl text-white" />
              <div className="text-center">
                <p className="sm:text-sm text-xs">
                  No. Of Students Completed Courses
                </p>
                <p className="text-2xl font-semibold">1+</p>
              </div>
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              className="flex flex-col items-center space-y-2 lg:border-r-2 md:p-4 p-2"
            >
              <GiGraduateCap className="sm:text-7xl text-3xl text-white" />
              <div className="text-center">
                <p className="text-sm">No. Of Students Complted Courses</p>
                <p className="text-2xl font-semibold">10+</p>
              </div>
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              className="flex flex-col items-center space-y-2 lg:border-r-2 md:p-4 p-2"
            >
              <BsCheck2Circle className="sm:text-7xl text-3xl text-white" />
              <div className="text-center">
                <p className="text-sm">No. Of Students Complted Courses</p>
                <p className="text-2xl font-semibold">100%</p>
              </div>
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              className="flex flex-col items-center space-y-2 md:p-4 p-2"
            >
              <BsCalendarCheckFill className="sm:text-7xl text-3xl text-white" />
              <div className="text-center">
                <p className="text-sm">No. Of Students Complted Courses</p>
                <p className="text-2xl font-semibold">200+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4 */}
      <section>
        <CourseHome />
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
          <div
            ref={learnRef}
            className="md:w-4/5 md:pl-2 px-1 flex py-4 md:space-x-8 space-x-4 overflow-y-hidden overflow-x-scroll scrollbar-hide scroll-smooth"
          >
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
        <div className="flex gap-4 px-8 justify-end">
          <AiOutlineLeft
            onClick={() => slideLeft(learnRef)}
            className="font-black cursor-pointer rounded-full md:block hidden w-8 h-8 p-1.5 bg-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in-out"
          />
          <AiOutlineRight
            onClick={() => slideRight(learnRef)}
            className="font-black cursor-pointer rounded-full md:block hidden w-8 h-8 p-1.5 bg-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in-out"
          />
        </div>
      </section>
      {/* 5 */}
      <section className="py-6 ">
        <div className="md:block hidden">
          <FreeTrail />
        </div>
        <div className="block md:hidden">
          <FreeTrailMobile />
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
          {whyus.map((value, idx) => {
            let rand = Math.floor(Math.random() * 3);
            return (
              <div
                key={idx}
                className="flex teacher-alt md:space-x-12 py-4 text-white items-center"
              >
                <div className="md:block hidden">
                  <img
                    className=""
                    src={images.whyus[rand]}
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
                  <p className="text-lg">{value}</p>
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
          <div
            ref={parentRef}
            className="md:w-4/5 pl-2 flex py-4 space-x-8 overflow-y-hidden overflow-x-scroll scrollbar-hide scroll-smooth"
          >
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
        <div className="flex gap-4 px-8 justify-end">
          <AiOutlineLeft
            onClick={() => slideLeft(parentRef)}
            className="font-black cursor-pointer rounded-full md:block hidden w-8 h-8 p-1.5 bg-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in-out"
          />
          <AiOutlineRight
            onClick={() => slideRight(parentRef)}
            className="font-black cursor-pointer rounded-full md:block hidden w-8 h-8 p-1.5 bg-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in-out"
          />
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
          <div
            ref={curriculumRef}
            className="md:w-4/5 px-2 flex py-4 space-x-8 overflow-x-scroll scrollbar-hide scroll-smooth"
          >
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
        <div className="flex gap-4 px-8 justify-end">
          <AiOutlineLeft
            onClick={() => slideLeft(curriculumRef)}
            className="font-black cursor-pointer rounded-full md:block hidden w-8 h-8 p-1.5 bg-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in-out"
          />
          <AiOutlineRight
            onClick={() => slideRight(curriculumRef)}
            className="font-black cursor-pointer rounded-full md:block hidden w-8 h-8 p-1.5 bg-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in-out"
          />
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
        <div className="flex items-center">
          <AiOutlineLeft
            onClick={() => slideLeft(instructorRef)}
            className="font-black cursor-pointer rounded-full md:block hidden w-8 h-8 p-1.5 bg-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in-out mx-2"
          />
          <div
            ref={instructorRef}
            className="flex overflow-x-auto px-6 cursor-pointer scrollbar-hide scroll-smooth space-x-6 py-6 md:max-w-[92vw] mx-auto transition-all duration-500 ease-in-out"
          >
            {[
              {
                imgName: images.tutors.divya,
                tutorName: "Divya aggarwal",
                classGroup: "1-8",
                courses: "JAVA",
              },
              {
                imgName: images.tutors.jagriti,
                tutorName: "Jagriti ratnani",
                classGroup: "5-8",
                courses: "python, JAVA, ML",
              },
              {
                imgName: images.tutors.shanzae,
                tutorName: "Shanzae ahamed",
                classGroup: "5-8",
                courses: "Fullstack Developer",
              },
              {
                imgName: images.tutors.hemangi,
                tutorName: "Hemangi patil",
                classGroup: "5-8",
                courses: "python, web developer and ML",
              },
              {
                imgName: images.tutors.shruti,
                tutorName: "Shruti mehrotra",
                classGroup: "9-12",
                courses: "python, web developer",
              },
              {
                imgName: images.tutors.priyanka,
                tutorName: "Priyanka das",
                classGroup: "1-4",
                courses: "C, C++, HTML, JAVA, SQL",
              },
              {
                imgName: images.tutors.ankit,
                tutorName: "Ankit Pandey",
                classGroup: "9-12",
                courses: "Frontend Developer",
              },
            ].map((res, index) => {
              return (
                <div
                  key={index}
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
                      <p className="text-2xl font-semibold capitalize">
                        {res.tutorName}
                      </p>
                      <p className="text-lg">{res.classGroup}</p>
                    </div>
                    <p className="text-lg font-semibold">{res.courses}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <AiOutlineRight
            onClick={() => slideRight(instructorRef)}
            className="font-black cursor-pointer rounded-full md:block hidden w-8 h-8 p-1.5 bg-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in-out mx-2"
          />
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
    </main>
  );
}
