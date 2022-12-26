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
      <div className="space-y-2">
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
              Junior Koder
            </AccordionHeader>
            <AccordionBody className="flex flex-col gap-3 py-2 text-white">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/">Teacher Login</Link>
              <Link to="/">Contact Us</Link>
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
              Policies
            </AccordionHeader>
            <AccordionBody className="flex flex-col gap-3 py-2 text-white">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms and Conditions </Link>
              <Link to="/refund">Refund Policy</Link>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="space-y-2">
          <h2>Connect with Us</h2>
          <div className="flex gap-4">
            <div className="">
              <a
                href="https://www.linkedin.com/company/juniorkoder/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  className="w-10"
                  src={images.social.linkedin}
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="">
              <a
                href="https://www.instagram.com/junior_koder/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  className="w-10"
                  src={images.social.instagram}
                  alt="instagram"
                />
              </a>
            </div>
            <div className="">
              <a
                href="https://www.facebook.com/people/Junior-Koder/100079522596198/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  className="w-10"
                  src={images.social.facebook}
                  alt="facebook"
                />
              </a>
            </div>
            <div className="">
              <a
                href="https://api.whatsapp.com/send?phone=15551234567&text=Send20%a20%quote"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  className="w-10"
                  src={images.social.whatsapp}
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-background">
          <p className="text-sm text-center py-2">
            Copyright &#169; 2022 Junior Koder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
