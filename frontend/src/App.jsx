import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { HomePage } from "./pages/HomePage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};
export default App;
