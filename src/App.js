import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home";
import logo from './logo.svg';
// import OldNavbar from './components/old-navbar';
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
