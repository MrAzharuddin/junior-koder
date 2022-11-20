// import { useState } from 'react';
import Carousel from '../components/Carousel';
import FAQs from '../components/FAQs';
import { TbMedal2 } from 'react-icons/tb';
import { GiGraduateCap } from 'react-icons/gi';
import { BsCheck2Circle,BsCalendarCheckFill } from 'react-icons/bs';
export default function Home() {
  return (
    <main className="space-y-4 font-medium">
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
                      />
                    </div>
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Parent’s Name"
                      />
                    </div>
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Parent’s Number"
                      />
                    </div>
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Parent’s email ID"
                      />
                    </div>
                    <div className="py-2">
                      <input
                        className="junior-input"
                        type="text"
                        placeholder="Standard selection Table"
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
                            value="Yes"
                          />
                          <label htmlFor="yes">Yes</label>
                        </div>
                        <div className="space-x-2">
                          <input
                            type="radio"
                            name="laptop"
                            id="no"
                            value="No"
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <input type="checkbox" name="check" id="check" />
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
            <div className="w-full p-12 md:max-w-[50vw] text-white text-center">
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
      <section className="p-8 bg-primary space-y-4 text-white">
        <div>
          <h1>Education 4.0</h1>
          <p>The Saga of Ultimate Revolutionary change in Education</p>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 justify-self-center">
          {[
            {
              name: 'Industry 1.0',
              year: 1880,
              desc: 'Mechanisation, water and stream powers',
            },
            {
              name: 'Industry 2.0',
              year: 1900,
              desc: 'Mass production, electric power, assembly line',
            },
            {
              name: 'Industry 3.0',
              year: 2000,
              desc: 'Computers, automated production, electronics',
            },
            {
              name: 'Industry 4.0',
              year: 2010,
              desc: 'Cyber-physical, systems, IoT, networking, machine learning',
            },
            {
              name: 'Industry 5.0',
              year: 2020,
              desc: 'Human-robot collabration, cognitive systems, customization',
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
        </div>
        <div>
          <p className="text-center">
            Get along with Junior Koder to feel and witness the real revolution
            ever in eduaction
          </p>
        </div>
      </section>
      <section className="p-8">
        <h1 className="text-grad text-4xl">Milestones Acheived By Us So Far</h1>
        <div className="py-8 px-12">
        <div className="bg-primary px-8 py-8 flex justify-evenly rounded-lg text-white">
          <div className='flex flex-col items-center space-y-2'>
            <TbMedal2 className="text-5xl text-white" />
            <p className="text-sm">No. Of Students Complted Courses</p>
            <p className="text-2xl font-semibold">1+</p>
          </div>
          <div className='flex flex-col items-center space-y-2'>
            <GiGraduateCap className="text-5xl text-white" />
            <p className="text-sm">No. Of Students Complted Courses</p>
            <p className="text-2xl font-semibold">10+</p>
          </div>
          <div className='flex flex-col items-center space-y-2'>
          <BsCheck2Circle className="text-5xl text-white"/>
          <p className="text-sm">No. Of Students Complted Courses</p>
          <p className="text-2xl font-semibold">100%</p>
          </div>
          <div className='flex flex-col items-center space-y-2'>
          <BsCalendarCheckFill className="text-5xl text-white"/>
          <p className="text-sm">No. Of Students Complted Courses</p>
          <p className="text-2xl font-semibold">200+</p>
          </div>
        </div>
        </div>
      </section>
      <section className="py-6 space-y-8 px-8">
        <h1 className="text-grad w-2/3 text-5xl">
          Explore Our Courses especially curated for YOUR CHILD
        </h1>
        <p>Design Yet to update!!</p>
        <div>
          <h1 className="text-grad text-5xl text-right">
            Steps to avail Our Free Trial Classes
          </h1>
          <p className="text-grad text-xl text-right">
            Follow below steps to get started
          </p>
        </div>
      </section>
      <section className="p-8 bg-primary flex flex-col space-y-6">
        {[
          {
            heading: 'Fill up the prompted Lead form',
            text: 'Fill your completed details as per instructed in the lead form available at the top',
          },
          {
            heading: 'Fill up the prompted Lead form',
            text: 'Fill your completed details as per instructed in the lead form available at the top',
          },
          {
            heading: 'Fill up the prompted Lead form',
            text: 'Fill your completed details as per instructed in the lead form available at the top',
          },
          {
            heading: 'Fill up the prompted Lead form',
            text: 'Fill your completed details as per instructed in the lead form available at the top',
          },
        ].map((res, index) => {
          return (
            <div
              key={index + 'abc'}
              className="flex items-center space-x-6 left-right text-white p-8 bg-secondary rounded-xl"
            >
              <div>
                <h1 className="font-semibold text-2xl">
                  {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                </h1>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-2xl">{res.heading}</h1>
                <p className="text-lg">{res.text}</p>
              </div>
            </div>
          );
        })}
      </section>
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
              img: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
            },
            {
              title:
                'We primarily focus on imparting knowledge that can be easily comprehended by your child.  We primarily focus on imparting knowledge that can be easily comprehended by your child.',
              img: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
            },
            {
              title:
                'We primarily focus on imparting knowledge that can be easily comprehended by your child.  We primarily focus on imparting knowledge that can be easily comprehended by your child.',
              img: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
            },
          ].map((value, idx) => {
            return (
              <div
                key={idx}
                className="flex teacher space-x-6 justify-between py-4 text-primary items-center"
              >
                <div>
                  <img className="w-[50vw]" src={value.img} alt="" />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-2xl">
                    {idx < 9 ? '0' + (idx + 1) : idx + 1}
                  </p>
                  <p className=" text-lg">{value.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="p-8 space-y-4">
        <h1 className="text-grad w-1/5">What parents have for US?</h1>
        <div className="">
          <Carousel />
        </div>
      </section>
      <section className="p-8 space-y-4">
        <h1 className="text-grad">Meet Our Team</h1>
        <div className="space-x-8 flex justify-center py-6">
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
      <section className="p-8 space-y-4">
        <div className="flex justify-between items-center ">
          <div className="w-full">
            <FAQs />
          </div>
          <div className="lg:flex flex-col justify-center items-center space-y-2 hidden">
            <h2 className="text-grad text-3xl">FAQs</h2>
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
