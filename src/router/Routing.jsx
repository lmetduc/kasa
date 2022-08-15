import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import House from "../pages/House/House";

export default function createRouter() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/house/:id" element={<House />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  );
}
