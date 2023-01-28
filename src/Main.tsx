import * as React from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Country = React.lazy(() => import("./pages/Country"));

const Loading = () => <p>Loading ...</p>;

const Main = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:countryCode" element={<Country />} />
        </Routes>
      </main>
    </React.Suspense>
  );
};
export default Main;
