import About from "../pages/About";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Empty from "../pages/Empty";
import Home from "../pages/Home";
import Join from "../pages/Join";
// import JoinOurTeam from "../pages/JoinOurTeam";
import LeadForm from "../pages/LeadForm";
import Privacy from "../pages/Privacy";
import Refund from "../pages/Refund";
import Terms from "../pages/Terms";
import Test from "../pages/Test";

export const routes = {
  header: [
    {
      path: "/",
      element: <Home />,
      name: "Home",
    },
    {
      path: "/about",
      element: <About />,
      name: "About",
    },
    {
      path: "/courses",
      element: <Courses />,
      name: "Courses",
    },
    {
      path: "/coding-bootcamps",
      element: <Contact />,
      name: "Coding Bootcamps",
    },
    {
      path: "/schools",
      element: <Contact />,
      name: "Schools",
    },
  ],
  footer: [
    {
      path: "/",
      element: <Home />,
      name: "Home",
    },
    {
      path: "/about",
      element: <About />,
      name: "About",
    },
    {
      path: "/contact",
      element: <Contact />,
      name: "Contact",
    },
    {
      path: "/teacher-login",
      element: <Empty />,
      name: "Teacher login",
    },
    {
      path: "/test",
      element: <Test />,
      name: "Test",
    },
  ],
  policies: [
    {
      path: "/privacy",
      element: <Privacy />,
      name: "Privacy",
    },
    {
      path: "/terms-and-conditions",
      element: <Terms />,
      name: "Terms And Conditions",
    },
    {
      path: "/refund",
      element: <Refund />,
      name: "Refund",
    },
  ],
  productsAndServices: [
    {
      path: "/courses",
      element: <Courses />,
      name: "Courses",
    },
    {
      path: "/lead-form",
      element: <LeadForm />,
      name: "Book a free trial",
    },
    {
      path: "/join-our-team",
      element: <Join />,
      name: "Join our Team",
    },
  ],
  others: [
    {
      path: "/lead-form",
      element: <LeadForm />,
      name: "leadform",
    },
  ],
};

// https://form.jotform.com/223543129834053
