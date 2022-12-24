import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-primary px-8 py-4 text-white relative space-y-4 mt-28">
      <div className="bg-secondary py-6 flex flex-col items-center space-y-6 relative text-center -mt-28 shadow-[0_4px_4px_0px_rgba(0,0,0,0.45)] md:max-w-5xl rounded-3xl rounded-tr-none mx-auto">
        <p className="text-2xl font-semibold ">
          Still Not Sure? Get Access to Best of Free Trial Classes
        </p>
        <button className="bg-primary rounded-md py-1 px-4 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.45)] shadow-none transition-all duration-200">
          <a href="/">Start Learning For Free</a>
        </button>
      </div>
      <nav className="px-12 flex justify-evenly">
        <div className="self-center flex-1">
          <Link to="/">
            <img
              src="https://juniorkoder.com/logo/footer_logo.png"
              alt="juniorkoder"
              className="w-28"
            />
          </Link>
        </div>
        <div className="space-y-4 flex-1">
          <h3 className="text-xl font-bold">Junior Koder</h3>
          <ul className="space-y-1">
            {routes.footer.map((route) => {
              return (
                <li key={route.name}>
                  <Link to={route.path} preventScrollReset={true}>
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="space-y-4 flex-1">
          <h3 className="text-xl font-bold">Policies</h3>
          <ul className="space-y-1">
            {routes.policies.map((route) => {
              return (
                <li key={route.name}>
                  <Link to={route.path} preventScrollReset={true}>
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="space-y-4 flex-1">
          <h3 className="text-xl font-bold">Products And Services</h3>
          <ul className="space-y-1">
            {routes.productsAndServices.map((route) => {
              return (
                <li key={route.name}>
                  {route.path.includes("http") ||
                  route.path.includes("https") ? (
                    <a target={"_blank"} rel="noreferrer" href={route.path}>
                      {route.name}
                    </a>
                  ) : (
                    <Link to={route.path} preventScrollReset={true}>
                      {route.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" flex-1 space-y-2">
          <h3 className="text-base font-bold">Connect with us</h3>
          <div className="flex space-x-4 py-2">
            <div className="border-2 border-white rounded-full p-1.5">
              <a
                href="https://www.linkedin.com/company/juniorkoder/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
            <div className="border-2 border-white rounded-full p-1.5">
              <a
                href="https://www.instagram.com/junior_koder/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
            <div className="border-2 border-white rounded-full p-1.5">
              <a
                href="https://www.facebook.com/people/Junior-Koder/100079522596198/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Contact us</h3>
            <a href="tel:+917676566376">+91 7676 566 376</a> <br />
            <a href="mailto:support@juniorkoder.com">support@juniorkoder.com</a>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Our Main Branch:</h3>
            <address>
              LGF-C8, B1/19A Mohan Cooperative Society, Mohan Estate.
              Badarpur-New Delhi 110044
            </address>
          </div>
        </div>
      </nav>
      <div>
        <p className="text-center">
          Copyright &#169; 2022 Junior Koder. All rights reserved.
        </p>
      </div>
    </div>
  );
}
