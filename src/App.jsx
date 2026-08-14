import { lazy, Suspense, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";

import Header from "./components/Header";
import { ROUTES } from "./routes/path";
import ContactModal from "./ContactModal";
import HireModal from "./components/HireModal";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageAnimation({ children }) {
  const containerRef = useRef(null);
  const {pathname} = useLocation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay:0.4,
          duration: 1,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}

function App() {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <PageAnimation>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </PageAnimation>
      </Suspense>

      <ContactModal />
      <HireModal />
    </div>
  );
}

export default App;