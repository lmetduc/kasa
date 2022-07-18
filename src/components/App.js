import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Error from "./Error";
import House from "./House";

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/house/:id" element={<House />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
