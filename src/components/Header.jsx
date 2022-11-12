import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 8 || scrollY - lastScrollY < -8)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);
  return scrollDirection;
}

export default function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`p-4 sticky ${
        scrollDirection === 'down' ? '-top-20' : 'top-0'
      } h-20 bg-secondary z-99999 transition-all duration-500`}
    >
      <nav className="flex justify-between items-center px-12">
        <div className="flex items-center space-x-12">
          <div>
            <Link to="/">
              <img
                src="https://juniorkoder.com/logo/footer_logo.png"
                alt="juniorkoder"
                className="w-24"
              />
            </Link>
          </div>
          <ul className="flex space-x-6">
            {routes.header.map((route) => {
              return (
                <li key={route.name}>
                  <Link
                    to={route.path}
                    className="font-semibold text-orange-50 hover:text-white"
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button className="px-6 py-1 bg-white rounded-md font-bold text-primary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            LOGIN
          </button>
        </div>
      </nav>
    </div>
  );
}
