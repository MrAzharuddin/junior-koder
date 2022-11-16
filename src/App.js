import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { routes } from './utils/routes';

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  useScrollToTop();
  return (
    <div className="">
      <Header />
      <Routes>
        {routes.header.map((route) => {
          return (
            <Route key={route.name} path={route.path} element={route.element} />
          );
        })}
        {routes.footer.map((route) => {
          return (
            <Route key={route.name} path={route.path} element={route.element} />
          );
        })}
        {routes.policies.map((route) => {
          return (
            <Route key={route.name} path={route.path} element={route.element} />
          );
        })}
      </Routes>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
