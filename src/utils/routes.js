import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Privacy from '../pages/Privacy';
import Refund from '../pages/Refund';
import Terms from '../pages/Terms';

export const routes = {
  header: [
    {
      path: '/',
      element: <Home />,
      name: 'Home',
    },
    {
      path: '/about',
      element: <About />,
      name: 'About',
    },
    {
      path: '/contact',
      element: <Contact />,
      name: 'Contact',
    },
  ],
  footer: [
    {
      path: '/',
      element: <Home />,
      name: 'Home',
    },
    {
      path: '/about',
      element: <About />,
      name: 'About',
    },
    {
      path: '/contact',
      element: <Contact />,
      name: 'Contact',
    },
  ],
  policies: [
    {
      path: '/privacy',
      element: <Privacy />,
      name: 'Privacy',
    },
    {
      path: '/terms-and-conditions',
      element: <Terms />,
      name: 'Terms And Conditions',
    },
    {
      path: '/refund',
      element: <Refund />,
      name: 'Refund',
    },
  ],
};
