import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { navItems } from "./navitems";

import "./css/navbar.css";

import { news_list } from "./navitems";
import { about_list } from "./navitems";
import logo from "../assets/logo/4.png"
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showHamburgerAboutDropdown, setShowHamburgerAboutDropdown] = useState(false);
  const [showHamburgerNewsDropdown, setShowHamburgerNewsDropdown] = useState(false);
  const [hamburgerNewsDropdown, setHamburgerNewsDropdown] = useState(false);
  const [hamburgerAboutDropdown, setHamburgerAboutDropdown] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navbar_classes = ['navbar'];
  let nav_item_a_classes = ['nav_item_a'];
  if (scrolled) {
    navbar_classes.push('navbar_scrolled');
    nav_item_a_classes.push('nav_item_a_scrolled');
  }

  // let hamburger_navbar_classes = ['navbar'];
  // let hamburger_nav_item_a_classes = ['nav_item_a'];
  // if (scrolled) {
  //   hamburger_navbar_classes.push('navbar_scrolled');
  //   hamburger_nav_item_a_classes.push('nav_item_a_scrolled');
  // }

  return (
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
          navItems.map((item) => {
            if (item.title === "ABOUT") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  onMouseLeave={() => setShowAboutDropdown(false)}
                >
                  <Link to={item.path} className={nav_item_a_classes.join(" ")}>{item.title}</Link>
                  {
                    showAboutDropdown && (
                      <ul className={aboutDropdown ? "about_menu.clicked" : "about_menu"} onClick={() => {
                        setAboutDropdown(false);
                        setShowAboutDropdown(false);
                      }}>
                        {
                          about_list.map((item) => {
                            return (
                              <li key={item.id}>
                                <Link to={item.path} className={item.cName} onClick={() => setAboutDropdown(false)}>{item.title}</Link>
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
      <div className="hamburger_menu" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
        <div className="hamburger_menu_line"></div>
        <div className="hamburger_menu_line"></div>
        <div className="hamburger_menu_line"></div>
      </div>
      {
        hamburgerOpen && (
          <div className="hamburger_container">
            <ul className="hamburger_menu_list">
              {
                navItems.map((item) => {
                  if (item.title === "ABOUT") {
                    return (
                      <li
                        key={item.id}
                        className='hamburger_menu_list_item'
                        onMouseEnter={() => setShowAboutDropdown(true)}
                        onMouseLeave={() => setShowAboutDropdown(false)}
                      >
                        <Link to={item.path} className='hamburger_nav_item_a' onClick={() => setHamburgerOpen(false)}>{item.title}</Link>
                        <FontAwesomeIcon icon={showHamburgerAboutDropdown ? faCaretDown : faCaretRight} className="hamburger_menu_list_item_icon" onClick={() => setShowHamburgerAboutDropdown(!showHamburgerAboutDropdown)} />
                        <hr className="hamburger_menu_list_line" />
                        {
                          showHamburgerAboutDropdown && (
                            <ul className={hamburgerAboutDropdown ? "hamburger_about_menu.clicked" : "hamburger_about_menu"} onClick={() => {
                              setHamburgerAboutDropdown(false);
                              setShowHamburgerAboutDropdown(false);
                            }}>
                              {
                                about_list.map((item) => {
                                  return (
                                    <li key={item.id}>
                                      <Link 
                                        to={item.path} 
                                        className='hamburger_nav_item_a' 
                                        onClick={() => {
                                          setHamburgerAboutDropdown(false);
                                          setHamburgerOpen(false);
                                        }}>
                                          {item.title}
                                        </Link>
                                      <hr className="hamburger_menu_list_line" />
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
                  if (item.title === "NEWS & MEDIA") {
                    return (
                      <li
                        key={item.id}
                        className='hamburger_menu_list_item'
                        onMouseEnter={() => setShowNewsDropdown(true)}
                        onMouseLeave={() => setShowNewsDropdown(false)}
                      >
                        <Link to={item.path} className='hamburger_nav_item_a' onClick={() => setHamburgerOpen(false)}>{item.title}</Link>
                        <FontAwesomeIcon icon={showHamburgerNewsDropdown ? faCaretDown : faCaretRight} className="hamburger_menu_list_item_icon" onClick={() => setShowHamburgerNewsDropdown(!showHamburgerNewsDropdown)} />
                        <hr className="hamburger_menu_list_line" />
                        {
                          showHamburgerNewsDropdown && (
                            <ul className={hamburgerNewsDropdown ? "hamburger_news_menu.clicked" : "hamburger_news_menu"} onClick={() => {
                              setHamburgerNewsDropdown(false);
                              setShowHamburgerNewsDropdown(false);
                            }}>
                              {
                                news_list.map((item, index) => {
                                  return (
                                    <li key={item.id}>
                                      <Link
                                        to={item.path} 
                                        className='hamburger_nav_item_a' 
                                        onClick={() => {
                                          setHamburgerNewsDropdown(false);
                                          setHamburgerOpen(false);
                                        }}>
                                          {item.title}
                                        </Link>
                                      <hr className="hamburger_menu_list_line" />
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
                    <li key={item.id} className='hamburger_menu_list_item'>
                      <Link to={item.path} className='hamburger_nav_item_a' onClick={() => setHamburgerOpen(false)}>{item.title}</Link>
                      <hr className="hamburger_menu_list_line" />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
    </nav>
  );
}

export default Navbar;
