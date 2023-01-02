import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/nav-dropdown.css";

import { platform_list } from "./navitems";

const PlatformDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul className={dropdown ? "platform_menu.clicked" : "platform_menu"} onClick={() => setDropdown(!dropdown)}>
        {
            platform_list.map((item, index) => {
                return (
                    <li key={item.id}>
                        <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                    </li>
                )
            })
        }
    </ul>
  );
}

export default PlatformDropdown;