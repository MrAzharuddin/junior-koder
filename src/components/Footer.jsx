import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

export default function Footer() {
  return (
    <div className="">
      <nav className="px-12 flex space-x-8">
        <div className="space-y-4">
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
        <div className="space-y-4">
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
      </nav>
    </div>
  );
}
