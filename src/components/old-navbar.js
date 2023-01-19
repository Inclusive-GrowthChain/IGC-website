// import React, {useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// import './css/old-navbar.css';

// const OldNavbar = () => {
//   const navigate = useNavigate();

//   const [scrolled, setScrolled] = useState(false);
  
//   const [servicesSelected, setServicesSelected] = useState(true);
//   const [platformSelected, setPlatformSelected] = useState(false);
  
//   const handleScroll=() => {
//     const offset=window.scrollY;
//     if(offset > 80 ){
//       setScrolled(true);
//     }
//     else{
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//   });

//   const handleServicesSelect = () => {
//     setServicesSelected(true);
//     setPlatformSelected(false);
//   };
//   const handlePlatformSelect = () => {
//     setPlatformSelected(true);
//     setServicesSelected(false);
//   };

//   const handleServicesDeselect = () => setServicesSelected(false);
//   const handlePlatformDeselect = () => setPlatformSelected(false);

//   const handleDeselect = () => {
//     setServicesSelected(false);
//     setPlatformSelected(false);
//   };
 
//   let navbar_classes=['navbar'];
//   let options_home_classes=['options_home'];
//   let options_services_classes=['options_services'];
//   let options_platform_classes=['options_platform'];
//   let options_about_classes=['options_about'];
//   let options_contact_classes=['options_contact'];
//   let options_news_classes=['options_news'];
//   let options_careers_classes=['options_careers'];

//   if(scrolled) {
//     navbar_classes.push('navbar_scrolled');
//     options_home_classes.push('options_scrolled');
//     options_services_classes.push('options_scrolled');
//     options_platform_classes.push('options_scrolled');
//     options_about_classes.push('options_scrolled');
//     options_contact_classes.push('options_scrolled');
//     options_news_classes.push('options_scrolled');
//     options_careers_classes.push('options_scrolled');
//   }

//   return (
//       <div className={navbar_classes.join(" ")}>
//         <div className="navbar_container" onMouseLeave={handleDeselect}>
//           <div className="logo_container">
//             <button color="inherit" className='logo'>
//               IGC
//             </button>
//           </div>
//           {/* <Box sx={{ flexGrow: 0.95 }} /> */}
//           {/* <Button color="inherit" onClick={() => navigate("/users")}>
//             Users
//           </Button> */}
//           {/* {localStorage.getItem('userType') == "vendor" && ( */}
//           <div className="options_container">
//             <button
//               color="inherit" 
//               className={options_home_classes.join(" ")}
//               onMouseOver={handleDeselect}
//             >
//               Home
//             </button>
//             <button
//               color="inherit"
//               className={options_services_classes.join(" ")}
//               onMouseOver={handleServicesSelect}
//             >
//               Services
//             </button>
//             {
//               servicesSelected && (
//                 <div className="services_list" onMouseLeave={handleServicesDeselect}>
//                 <ul>
//                   <li>App Development</li>
//                   <li>Web Development</li>
//                   <li>AI & ML</li>
//                   <li>Blockchain</li>
//                   <li>IOT</li>
//                 </ul>
//               </div>
//               )
//             }
//             <button 
//               color="inherit" 
//               className={options_platform_classes.join(" ")}
//               onMouseOver={handlePlatformSelect}
//             >
//               Industries & Platform
//             </button>
//             {
//               platformSelected && (
//                 <div className="platform_list" onMouseLeave={handlePlatformDeselect}>
//                 <ul>
//                   <li>Health Care</li>
//                   <li>Fin-Tech</li>
//                   <li>Agri Tech</li>
//                   <li>IGC-Data Logger</li>
//                 </ul>
//               </div>
//               )
//             }
//             <button 
//               color="inherit" 
//               className={options_about_classes.join(" ")}
//               onMouseOver={handleDeselect}
//             >
//               About Us
//             </button>
//             <button 
//               color="inherit" 
//               className={options_contact_classes.join(" ")}
//               onMouseOver={handleDeselect}
//             >
//               Contact Us
//             </button>
//             <button 
//               color="inherit" 
//               className={options_news_classes.join(" ")}
//               onMouseOver={handleDeselect}
//             >
//               News & Media
//             </button>
//             <button 
//               color="inherit" 
//               className={options_careers_classes.join(" ")}
//               onMouseOver={handleDeselect}
//             >
//               Careers
//             </button>
//           </div>
//           <div className="demo_container">
//             <button color="inherit" className='demo'>
//               Request Demo
//             </button>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default OldNavbar;