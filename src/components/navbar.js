import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { navItems } from "./navitems";

import "./css/navbar.css";

import { platform_list } from "./navitems";
import { news_list } from "./navitems";
import logo from "../assets/logo/4.png"

const Navbar = () => {
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [platformDropdown, setPlatformDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);

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
        <div className="navbar_logo_text">
          <div className="navbar_logo_text_1">
            Inclusive Growth Chain
          </div>
          <div className="navbar_logo_text_2">
            Impact that Empowers
          </div>
        </div>
      </Link>
      <ul className='nav_item'>
        {
          navItems.map((item, index) => {
            // if (item.title === "IMPACT STORIES") {
            //   return (
            //     <li 
            //       key={item.id} 
            //       className={item.cName} 
            //       onMouseEnter={() => setShowPlatformDropdown(true)} 
            //       onMouseLeave={() => setShowPlatformDropdown(false)}
            //     >
            //       <Link to={item.path} className={nav_item_a_classes.join(" ")}>{item.title}</Link>
            //       {
            //         showPlatformDropdown && (
            //           <ul className={platformDropdown ? "platform_menu.clicked" : "platform_menu"} onClick={() => {
            //             setPlatformDropdown(false);
            //             setShowPlatformDropdown(false);
            //           }}>
            //             {
            //               platform_list.map((item, index) => {
            //                 return (
            //                   <li key={item.id}>
            //                     <Link to={item.path} className={item.cName} onClick={() => setPlatformDropdown(false)}>{item.title}</Link>
            //                   </li>
            //                 )
            //               })
            //             }
            //           </ul>
            //         )
            //       }
            //     </li>
            //   )
            // }
            if (item.title === "NEWS & MEDIA") {
              return (
                <li 
                  key={item.id} 
                  className={item.cName} 
                  onMouseEnter={() => setShowNewsDropdown(true)} 
                  onMouseLeave={() => setShowNewsDropdown(false)}
                >
                  <Link to={item.path} className={nav_item_a_classes.join(" ")}>{item.title}</Link>
                  {
                    showNewsDropdown && (
                      <ul className={newsDropdown ? "news_menu.clicked" : "news_menu"} onClick={() => {
                        setNewsDropdown(false);
                        setShowNewsDropdown(false);
                      }}>
                        {
                          news_list.map((item, index) => {
                            return (
                              <li key={item.id}>
                                <Link to={item.path} className={item.cName} onClick={() => setNewsDropdown(false)}>{item.title}</Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    )
                  }
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
      <div className="demo_button_container">
        <Link to="./contact">
          <button className="demo_button">CONTACT US</button>
        </Link>
      </div>
    </nav>
    </>
  );
}

export default Navbar;