import { images } from "../utils/images";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function FooterResponsive() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <footer className="px-4 py-8 bg-primary text-white">
      <div>
        <img
          className="w-24"
          src={images.logo.juniorkoderWhite}
          alt="Junior koder footer"
        />
        <p>
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
            className="text-base flex"
            onClick={() => handleOpen(1)}
          >
            Product and Services
          </AccordionHeader>
          <AccordionBody>
            <Link to="/courses">Courses</Link>
            <Link to="/">Book a free trial</Link>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Join our Team
            </a>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={open === 2 ? <BsChevronUp /> : <BsChevronDown />}
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={open === 3 ? <BsChevronUp /> : <BsChevronDown />}
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </footer>
  );
}
