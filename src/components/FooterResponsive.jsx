import { images } from "../utils/images";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterResponsive() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <footer className="px-4 py-8 bg-primary text-white">
      <div className="flex flex-col justify-center items-center text-center px-6 gap-4">
        <img
          className="w-24"
          src={images.logo.juniorkoderWhite}
          alt="Junior koder footer"
        />
        <p className="text-sm">
          An organization looking forward to inculcate the newest technology of
          the time in young minds
        </p>
      </div>
      <div>
        <Accordion
          className=""
          open={open === 1}
          icon={open === 1 ? <BsChevronUp /> : <BsChevronDown />}
        >
          <AccordionHeader
            className="text-base flex justify-start gap-4 items-center py-2"
            onClick={() => handleOpen(1)}
          >
            Product and Services
          </AccordionHeader>
          <AccordionBody className="flex flex-col gap-3 py-2 text-white">
            <Link to="/courses">Courses</Link>
            <Link to="/">Book a free trial</Link>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Join our Team
            </a>
          </AccordionBody>
        </Accordion>
        <Accordion
          className=""
          open={open === 2}
          icon={open === 2 ? <BsChevronUp /> : <BsChevronDown />}
        >
          <AccordionHeader
            className="text-base flex justify-start gap-4 items-center py-2"
            onClick={() => handleOpen(2)}
          >
            Product and Services
          </AccordionHeader>
          <AccordionBody className="flex flex-col gap-3 py-2 text-white">
            <Link to="/courses">Courses</Link>
            <Link to="/">Book a free trial</Link>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Join our Team
            </a>
          </AccordionBody>
        </Accordion>
        <Accordion
          className=""
          open={open === 3}
          icon={open === 3 ? <BsChevronUp /> : <BsChevronDown />}
        >
          <AccordionHeader
            className="text-base flex justify-start gap-4 items-center py-2"
            onClick={() => handleOpen(3)}
          >
            Product and Services
          </AccordionHeader>
          <AccordionBody className="flex flex-col gap-3 py-2 text-white">
            <Link to="/courses">Courses</Link>
            <Link to="/">Book a free trial</Link>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Join our Team
            </a>
          </AccordionBody>
        </Accordion>
      </div>
    </footer>
  );
}
