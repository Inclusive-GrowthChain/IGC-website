import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/nav-dropdown.css";

import { service_list } from "./navitems";

const ServiceDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul className={dropdown ? "services_menu.clicked" : "services_menu"} onClick={() => setDropdown(!dropdown)}>
        {
            service_list.map((item, index) => {
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

export default ServiceDropdown;