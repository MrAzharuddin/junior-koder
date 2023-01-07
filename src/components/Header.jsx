import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
// import { HiOutlineChevronDown } from "react-icons/hi";
import { FaTimes, FaBars } from "react-icons/fa";
import { images } from "../utils/images";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 8 || scrollY - lastScrollY < -8)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);
  return scrollDirection;
}

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(null);
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`md:p-4 p-2 sticky ${
        scrollDirection === "down" ? "sm:-top-18 -top-72" : "top-0"
      } bg-white h-18 z-10 transition-all duration-500`}
    >
      <nav className="flex justify-between items-center sm:px-12 px-4">
        <div className="flex items-center space-x-12">
          <div>
            <Link to="/">
              <img
                src={images.logo.juniorkoder}
                alt="juniorkoder"
                className="w-24"
              />
            </Link>
          </div>
          {/* <ul className="md:flex space-x-6 hidden">
            {routes.header.map((route) => {
              return (
                <li key={route.name}>
                  <Link to={route.path} className="font-semibold text-primary">
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul> */}
        </div>
        {/* menu */}
        <div>
          <ul
            className={`sm:flex ${
              menuToggle != null && menuToggle ? "sm:top-0 top-16 opacity-100" : "sm:top-0 -top-48 sm:opacity-100 opacity-0"
            } sm:space-x-6 sm:space-y-0 space-y-2 sm:py-0 py-4 sm:px-0 px-6 bg-white sm:relative absolute inset-x-0 transition-all duration-1000 sm:z-0 -z-20`}
          >
            {routes.header.map((route) => {
              return (
                <li key={route.name}>
                  <Link to={route.path} className="font-semibold text-primary">
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* menu icon */}
        <div className="sm:hidden" onClick={() => setMenuToggle(!menuToggle)}>
          {menuToggle ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>
        {/* Login button */}
        {/* <div className="hidden">
          <button className="px-6 py-1 bg-primary rounded-md font-bold text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            LOGIN
          </button>
        </div> */}
      </nav>
      {/* <div className={`sm:hidden ${menuToggle ? "block" : "hidden"}`}>
        <ul className="z-10 absolute">
          {routes.header.map((route) => {
            return (
              <li key={route.name}>
                <Link to={route.path} className="font-semibold text-primary">
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
}

// HiOutlineChevronDown
