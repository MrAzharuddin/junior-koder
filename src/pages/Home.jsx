import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
export default function Home() {
  const [accordionBtn, setAccordionBtn] = useState(-1);
  return (
    <main className="min-h-[calc(100vh-9.5vh)] space-y-4">
      <section className="">
        <div className="relative bg-shape pt-16">
          <div className="flex flex-wrap justify-around items-start relative">
            <div className="bg-primary p-12 rounded-md text-secondary w-full md:max-w-[45vw] relative">
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
                  <div>
                    <button>Book Free Trial</button>
                  </div>
                  <div>
                    <p>Already have an account? | LOGIN</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-12 md:max-w-[45vw] text-primary text-center relative">
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
        </div>
        <div className="flex justify-center items-center relative -mt-12 pb-12">
          <div className="bg-primary px-8 py-4 rounded-md text-center space-y-1 text-white">
            <p>Explore the new & most interesting domain of your life</p>
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
        ].map((res, index) => {
          return (
            <div
              key={index + 'abc'}
              className="flex items-start space-x-2 left-right text-white p-8"
            >
              <div>
                <h1 className="font-semibold text-3xl">
                  {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                </h1>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-3xl">{res.heading}</h1>
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
              <div className="flex teacher space-x-6 justify-between py-4 text-primary items-center">
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
        <div className="space-y-6">
          {[
            {
              name: 'XYZ',
              role: 'Designation',
              desc: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            },
            {
              name: 'XYZ',
              role: 'Designation',
              desc: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            },
            {
              name: 'XYZ',
              role: 'Designation',
              desc: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            },
            {
              name: 'XYZ',
              role: 'Designation',
              desc: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            },
          ].map((res, index) => {
            return (
              <div
                key={index + res.name}
                className="flex teacher justify-between items-end py-6"
              >
                <div>
                  <div className="w-64 grad2 rounded-md">
                    <div className="w-full p-1.5">
                      <img
                        className="w-full rounded-md"
                        src="https://images.squarespace-cdn.com/content/v1/5d4873a0393738000125c3ae/1568238301411-0ML583FKHA0RXW5ZEX5B/Screen+Shot+2019-09-11+at+5.34.47+PM.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-2/3 space-y-2 py-3">
                  <div>
                    <p className="text-3xl font-bold">{res.name}</p>
                    <p className="text-base">{res.role}</p>
                  </div>
                  <p className="text-base">{res.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="p-8 space-y-4">
        <div className="flex justify-between">
          <div className='w-full'>
            <Accordion className="space-y-2 transition">
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
                <AccordionItem key={idx}>
                  <AccordionItemHeading className="bg-primary px-6 py-2">
                    <AccordionItemButton className="space-x-4 text-white">
                      <span>{idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>
                      <span>{item.title}</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {item.paras.join(' ')}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
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
