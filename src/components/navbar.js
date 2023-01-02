import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { navItems } from "./navitems";

import "./css/navbar.css";

import ServiceDropdown from "./nav-service_dropdown";
import PlatformDropdown from "./nav-platform_dropdown";
import logo from "../assets/logo/logo2.png"

const Navbar = () => {
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [platformDropdown, setPlatformDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 80 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navbar_classes=['navbar'];
  let nav_item_a_classes=['nav_item_a'];
  if(scrolled) {
    navbar_classes.push('navbar_scrolled');
    nav_item_a_classes.push('nav_item_a_scrolled');
  }

  return (
    <>
    <nav className={navbar_classes.join(" ")}>
      <Link to="/" className="navbar_logo">
        <img
          src={logo}
          alt="logo"
          className="navbar_logo_img"
        />
        IGC
      </Link>
      <ul className='nav_item'>
        {
          navItems.map((item, index) => {
            if (item.title === "SERVICES") {
              return (
                <li 
                  key={item.id} 
                  className={item.cName} 
                  onMouseEnter={() => setServiceDropdown(true)} 
                  onMouseLeave={() => setServiceDropdown(false)}
                >
                  <Link to={item.path} className={nav_item_a_classes.join(" ")}>{item.title}</Link>
                  { serviceDropdown && <ServiceDropdown /> }
                </li>
              )
            }
            if (item.title === "PLATFORM") {
              return (
                <li 
                  key={item.id} 
                  className={item.cName} 
                  onMouseEnter={() => setPlatformDropdown(true)} 
                  onMouseLeave={() => setPlatformDropdown(false)}
                >
                  <Link to={item.path} className={nav_item_a_classes.join(" ")}>{item.title}</Link>
                  { platformDropdown && <PlatformDropdown /> }
                </li>
              )
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path} className={nav_item_a_classes.join(" ")}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <Link to="demo">
        <button className="demo_button">REQUEST DEMO</button>
      </Link>
    </nav>
    </>
  );
}

export default Navbar;