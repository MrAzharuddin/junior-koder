import About from '../pages/About';
import Contact from '../pages/Contact';
import Empty from '../pages/Empty';
// import Features from '../pages/Features';
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
      path: '/courses',
      element: <Contact />,
      name: 'Courses',
    },
    // {
    //   path: '/features',
    //   element: <Features />,
    //   name: 'Features',
    // },
    {
      path: '/coding-bootcamps',
      element: <Contact />,
      name: 'Coding Bootcamps',
    },
    {
      path: '/schools',
      element: <Contact />,
      name: 'Schools',
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
    {
      path: '/teacher-login',
      element: <Empty />,
      name: 'Teacher login',
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

  productsAndServices: [
    {
      path: '/courses',
      element: <Empty />,
      name: 'Courses',
    },
    {
      path: '/Book-a-free-trial',
      element: <Empty />,
      name: 'Book a free trial',
    },
    {
      path: '/Join our Team',
      element: <Empty />,
      name: 'Join our Team',
    },
  ],
};
