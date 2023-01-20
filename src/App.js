import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import AboutFounders from "./components/about-founders";
import ImpactStories from "./components/impact-stories";
import Contact from "./components/contact";
import Careers from "./components/careers";
import News from "./components/news";
import Blog from "./components/blog";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

import './App.css';
import './components/css/responsive.css';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/impact-stories" element={<ImpactStories />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-founders" element={<AboutFounders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
