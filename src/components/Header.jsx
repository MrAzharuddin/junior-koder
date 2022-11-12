import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

export default function Header() {
  return (
    <div className="">
      <nav className="flex justify-between items-center px-12">
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
                <Link to={route.path} className="">
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
