// import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
export default function Home() {
  return (
    <main className="space-y-4">
      <section className="">
        <div className="bg-secondary pt-16">
          <div className="flex flex-wrap justify-around items-start pb-32">
            <div className="bg-primary p-12 rounded-md text-white w-full md:max-w-[45vw]">
              <div className="flex flex-col space-y-2 text-lg">
                <h1 className="text-center font-bold">Book Your Free Trial</h1>
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
                      <div>
                        <input type="radio" name="" id="" />
                        <label htmlFor="temp">Yes</label>
                      </div>
                      <div>
                        <input type="radio" name="" id="" />
                        <label htmlFor="temp">No</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" name="check" id="" />
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
              </div>
            </div>
            <div className="w-full p-12 md:max-w-[45vw] text-white text-center">
              <article className="flex flex-col space-y-4">
                <h1 className="font-bold text-5xl">
                  Code your Future with Junior Koder
                </h1>
                <p className="text-xl">
                  A place where your kid is taught to love coding
                </p>
              </article>
              <img
                src="https://i.ibb.co/6DNRDTz/hero-student.png"
                alt="hero-student"
              />
            </div>
          </div>
          <div className="relative">
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
        <div className="flex items-center space-x-16 px-8 py-4">
          {[
            {
              text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
              name: 'Suzain Malik',
              class: 'Class 6',
            },
            {
              text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
              name: 'Suzain Malik',
              class: 'Class 6',
            },
            {
              text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
              name: 'Suzain Malik',
              class: 'Class 6',
            },
          ].map((res, index) => {
            return (
              <div
                key={res.name + index}
                className="p-10 bg-primary text-white space-y-6 rounded-md"
              >
                <div className="px-8 py-2">
                  <img
                    className=" rounded-md"
                    src="https://thumbs.dreamstime.com/b/indian-family-three-portrait-happy-standing-indoors-56830036.jpg"
                    alt=""
                  />
                </div>
                <p>{res.text}</p>
                <div>
                  <p>{res.name}</p>
                  <p>{res.class}</p>
                </div>
              </div>
            );
          })}
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
            <Accordion className="space-y-2">
              {[
                {
                  title: 'Accordion 1',
                  paras: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                  ],
                },
                {
                  title: 'Accordion 2',
                  paras: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                  ],
                },
                {
                  title: 'Accordion 3',
                  paras: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                  ],
                },
                {
                  title: 'Accordion 4',
                  paras: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                  ],
                },
                {
                  title: 'Accordion 5',
                  paras: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                  ],
                },
                {
                  title: 'Accordion 6',
                  paras: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                  ],
                },
              ].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  className="transition-all duration-500"
                >
                  <AccordionItemHeading className="bg-primary rounded-md px-6 py-2">
                    <AccordionItemButton className="space-x-4 text-white transition-all duration-500">
                      <span className="text-xl">
                        {idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}.
                      </span>
                      <span>{item.title}</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="transition-all duration-500">
                    {item.paras.join(' ')}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="text-grad text-3xl">FAQs</h2>
            <img
              className="w-1/2"
              src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="p-8 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8 items-center text-primary">
            <p className="text-8xl">4</p>
            <p className="text-4xl">
              major <br />
              <span className="text-6xl">CORNERSTONES</span>
              <br />
              of Junior Koder <br />
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              className="w-full"
              src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <ul className="space-y-4">
            <li className="text-secondary">
              Bilingual Tutor - Learn in your own choice of language
            </li>
            <li className="text-secondary">
              Personalised Relation Manager - Solve your queries and doubt
              instantly with your personal Relationship Manager support.
            </li>
            <li className="text-secondary">
              Flexibility in scheduling classes - Choose your convenient slots -
              Available6 days a week up to 8 slots a day
            </li>
            <li className="text-secondary">
              Video summary of every class - Revise your learning with a
              recorded video provided after each session
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-center font-semibold text-4xl">
            <span className="text-6xl font-bold">Why</span> Junior Koder ?
          </h1>
          <ul>
            <li>
              <h2>1 Well-guided sessions</h2>

              <p>
                We believe that every complex thing taught step-by-step solves
                half of the future confusion, thus each of our sessions is
                well-guided, taught with sincerity and focuses on the clear end
                result of the concepts maintaining the learning style of each
                kid. Introduction to Multiple Coding Platform
              </p>
            </li>
            <li>
              <h2> 2 Introduction to Multiple Coding Platform</h2>
              <p>
                To teach and practice syntax concepts of coding repeatedly,
                various platforms and situations will be introduced.
              </p>
            </li>
            <li>
              <h2>3 GAME, ANIMATION and Design Based Learning</h2>
              <p>
                We follow game, animation and deign based approach to keep our
                child's interest intact we believe teaching with fun is the best
                way Promote soft skills improvement
              </p>
            </li>
            <li>
              <h2>4 Promote soft skills improvement</h2>
              <p>
                Soft skills are character traits and interpersonal skills that
                characterize a person's relationships with other people. It is
                important how well you interact and treat others for career
                success.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p>
            &ldquo;So, What more are you looking for? Let your children be the
            creators of the new world.&rdquo;
          </p>
        </div>
      </section>
    </main>
  );
}
