import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
export default function FAQs() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // const customAnimation = {
  //   mount: { scale: 1, marginTop: '-0.75rem' },
  //   unmount: { scale: 0.7 },
  // };

  return (
    <Fragment>
      {[
        {
          title: "Can I attend classes/learn the coding on mobile phone?",
          paras:
            "No, Laptop is recommended for joining the classes as there are activity in each class that student are supposed to do and on mobile phone it becomes difficult to access the platform.",
        },
        {
          title: "How many classes are available for free?",
          paras:
            "Students can attend their first class free of cost, to unlock further course you will need to enroll for that particular course.",
        },
        {
          title:
            "How to avail the free class? ",
          paras:
            `Kindly fill out the registration form to book your first free class. Our counsellor will get back to you confirming the date and time of the class.`,
        },
        {
          title: "Are there any recorded classes?",
          paras:
            "No, the classes are live 1:1 ( 1 teacher and 1 student) and online in nature. Student can interact with the tutor and get their doubts cleared at very same instant. However, we provide a recorded short video summary for each topic to all our students that they can use to recall any concept at any point in time.",
        },
        {
          title: "How can we make the payment?",
          paras:
            "You can choose any of the following method for the payment <br/> 1.Pay cash to the counselor visited home for trial class <br/>2. Make an online payment <br/> 3. Make cheque payment",
        },
        {
          title: "How basic plan works?",
          paras:
            "In basic plan, you will get the credit of 8 classes in which you will learn the fundamental of coding depending on the grade group you are in.",
        },
        {
          title: "What is the difference between Basic, Standard and Premium plans?",
          paras:
            "All 3 plans differs in terms of their number of classes, curriculum and depth of learning along with the assignments and projects. To know more about each plan, please refer to Courses",
        },
      ].map(({ title, paras }, index) => {
        return (
          <Accordion
            key={index}
            className="my-3"
            open={open === index + 1}
            // animate={customAnimation}
            icon={<Icon id={index + 1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="bg-primary rounded-md text-white md:px-6 px-2"
            >
              <span className="space-x-4">
                <span className="text-2xl">{index + 1}.</span>{" "}
                <span className="text-base">{title}</span>
              </span>
            </AccordionHeader>
            <AccordionBody className="px-2 bg-slate-100 rounded-md mt-2">
              {paras}
              {/* <p className="bg-slate-100 py-4 px-6 mx-4 rounded-md">{paras}</p> */}
            </AccordionBody>
          </Accordion>
        );
      })}
    </Fragment>
  );
}
