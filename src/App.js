import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import HealthCare from "./components/health_care";
import Contact from "./components/contact";
import Careers from "./components/careers";
import Blog from "./components/blog";
import Navbar from "./components/navbar";

import './App.css';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/health-care" element={<HealthCare />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
