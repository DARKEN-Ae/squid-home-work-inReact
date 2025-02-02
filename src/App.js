import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Loading from "./components/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/Notfound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<Loading />}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/news"
              element={
                <Suspense fallback={<Loading />}>
                  <News />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
