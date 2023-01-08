import { address, contact } from "../data/data";

export default function Contact() {
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
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p>
                  {Object.keys(item).includes("email") ? (
                    <a
                      className="text-black/60 text-lg font-semibold"
                      href="mailto:someone@example.com"
                    >
                      {item.email}
                    </a>
                  ) : (
                    <a
                      className="text-black/60 text-lg font-semibold"
                      href="mailto:someone@example.com"
                    >
                      {item.map}
                    </a>
                  )}
                </p>
                {Object.keys(item).includes("phone") ? (
                  <a
                    className="text-black/60 text-lg font-semibold"
                    href="tel:+918686512271"
                  >
                    {item.phone}
                  </a>
                ) : (
                  <address className="text-black/60 text-lg font-semibold">
                    {item.address}
                  </address>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12 md:p-12 p-4">
        <h2 className="text-3xl text-center font-bold">Our Offices</h2>
        <p className="text-center md:text-xl px-4">
          Our offices are open from Mon to Fri, 9 AM TO 6 PM <br />
          You can also drop us an email at{" "}
          <span>
            <a href="mailto:support@toppr.com">support@toppr.com</a>
          </span>
        </p>
        <div className="flex flex-wrap lg:p-12 gap-12 py-6 justify-center">
          {address.map((item, idx) => {
            return (
              <div
                key={idx}
                className="lg:max-w-[30vw] md:max-w-[35vw] bg-white shadow-lg lg:p-12 p-6 rounded-lg space-y-2"
              >
                <h2 className="text-center font-bold text-xl">{item.city}</h2>
                <address className="text-lg">{item.place}</address>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
