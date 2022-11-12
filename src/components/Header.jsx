import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

export default function Header() {
  return (
    <div className="">
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
                  <Link to={route.path} className="font-bold text-white">
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
