export default function Contact() {
  const contact = [
    {
      title: "Student Helpline",
      email: "abc@xyz.com",
      phone: "1800 2099 199",
    },
    {
      title: "Business Helpline",
      email: "abc@xyz.com",
      phone: "1800 2099 199",
    },
    {
      title: "Find Us",
      map: "Junior Koder location",
      address:
        "LGF-C8, B1/19A Mohan Cooperative Society, Mohan Estate. Badarpur-New Delhi 110044",
    },
  ];
  const address = [
    {
      city: "Bangalore Office",
      place:
        "No. 328, Ground Floor, 8th Main Road, MS Ramaiah Enclave, Nagasandra Post, S Tumkur Road, Bangalore- 560073. India",
    },
    {
      city: "New Delhi Office",
      place:
        "LGF-C8, B1/19A Mohan Cooperative Society, Mohan Estate. Badarpur-New Delhi 110044",
    },
    {
      city: "Lucknow Office",
      place:
        "JuniorKoder Co-Spaces Boxely- 2nd floor Leela Hiehts,Vibhuti khand Gomtinagar,Lucknow-226010",
    },
    {
      city: "Mumbai Office",
      place:
        "108, Lodha Boulevard,Above Mc Donald's,Near Majiwada flyover Thane, Mumbai -400609",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary min-h-[35vh] flex justify-center items-center">
        <h1 className="text-center text-white font-bold text-4xl">
          Contact Us
        </h1>
      </div>
      <div className="-mt-12 mx-auto w-3/4 bg-background flex flex-wrap py-6 px-12 shadow-xl rounded-lg md:gap-y-0 gap-y-4">
        {contact.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex-1 px-4 ${
                idx !== 0 ? "md:border-l-2 md:border-gray-900/40" : ""
              }`}
            >
              <div className="space-y-1">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>
                  {Object.keys(item).includes("email") ? (
                    <a
                      className="text-black/60 font-semibold"
                      href="mailto:someone@example.com"
                    >
                      {item.email}
                    </a>
                  ) : (
                    <a
                      className="text-black/60 font-semibold"
                      href="mailto:someone@example.com"
                    >
                      {item.map}
                    </a>
                  )}
                </p>
                <p>
                  {Object.keys(item).includes("phone") ? (
                    <a
                      className="text-black/60 font-semibold"
                      href="tel:+918686512271"
                    >
                      {item.phone}
                    </a>
                  ) : (
                    <address className="text-black/60 font-semibold">
                      {item.address}
                    </address>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12 md:p-12 p-4">
        <h2 className="text-3xl text-center font-bold">Our Offices</h2>
        <p className="text-center md:text-lg px-4">
          Our offices are open from Mon to Fri, 9 AM TO 6 PM <br />
          You can also drop us an email at{" "}
          <span>
            <a href="mailto:support@toppr.com">support@toppr.com</a>
          </span>
        </p>
        <div className="flex flex-wrap md:p-12 gap-12 py-6 justify-center">
          {address.map((item, idx) => {
            return (
              <div
                key={idx}
                className="md:max-w-[30vw] bg-white shadow-lg md:p-12 p-6 rounded-lg space-y-2"
              >
                <h2 className="text-center font-bold text-lg">{item.city}</h2>
                <address>{item.place}</address>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
