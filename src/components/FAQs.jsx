import { useState, Fragment } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? 'rotate-180' : ''
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

  const customAnimation = {
    mount: { scale: 1, marginTop: '-0.8rem', marginBottom: '0.2rem' },
    unmount: { scale: 0.7 },
  };

  return (
    <Fragment>
      {[
        {
          title: 'How can we make the payment ?',
          paras: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          ],
        },
        {
          title: 'How basic plan work?',
          paras: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          ],
        },
        {
          title:
            'What is the difference between basic, standard and premium plan?',
          paras: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          ],
        },
        {
          title: 'What is the refund policy for any of your sevices?',
          paras: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          ],
        },
        {
          title: 'What is the refund policy for any of your sevices?',
          paras: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          ],
        },
        {
          title: 'What is the refund policy for any of your sevices?',
          paras: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          ],
        },
      ].map(({ title, paras }, index) => {
        return (
          <Accordion
            className="space-y-2"
            open={open === index + 1}
            animate={customAnimation}
            icon={<Icon id={index + 1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="bg-primary px-6 rounded-md text-white"
            >
              <span className="space-x-4">
                <span className="text-2xl">{index + 1}.</span>{' '}
                <span className="text-base">{title}</span>
              </span>
            </AccordionHeader>
            <AccordionBody className="">
              <p className="bg-slate-100 py-4 px-6 mx-4 rounded-md">{paras}</p>
            </AccordionBody>
          </Accordion>
        );
      })}
    </Fragment>
  );
}
