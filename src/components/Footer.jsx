import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

export default function Footer() {
  return (
    <div className="bg-primary px-8 py-4 text-white">
      <nav className="px-12 flex justify-evenly">
        <div className="self-center flex-1">
          <Link to="/">
            <img
              src="https://juniorkoder.com/logo/logo.png"
              alt=""
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
                  <Link to={route.path} preventScrollReset={true}>
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" flex-1">
          <h3 className="text-base font-bold">Connect with us</h3>
          <div className="flex">
            <div>
              <a href="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QnJ-vwe8gMSvUX37R2XC8q1JSgGGr30a_AwxHzQI&s"
                  alt="instagram"
                />
              </a>
            </div>
            <div>
              <a href="/">
                <img src="" alt="" />
              </a>
            </div>
            <div>
              <a href="/"></a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold">Contact us</h3>
            <a href="tel:+917676566376">+91 7676 566 376</a> <br />
            <a href="mailto:support@juniorkoder.com">support@juniorkoder.com</a>
          </div>
          <div>
            <h3 className="text-base font-semibold">Our Main Branch:</h3>
            <address>
              LGF-C8, B1/19A Mohan Cooperative Society, Mohan Estate.
              Badarpur-New Delhi 110044
            </address>
          </div>
        </div>
      </nav>
    </div>
  );
}
