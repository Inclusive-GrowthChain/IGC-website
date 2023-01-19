// import React, { useState } from 'react';
// import Carousel from 'react-material-ui-carousel';

// import img_22 from '../assets/impact_stories_imgs/22.png';
// import img_12 from '../assets/impact_stories_imgs/12.jpg';
// import img_23 from '../assets/impact_stories_imgs/23.jpg';
// import img_14 from '../assets/impact_stories_imgs/14.jpg';
// import img_19 from '../assets/impact_stories_imgs/19.jpg';
// import img_15 from '../assets/impact_stories_imgs/15.jpg';
// import img_16 from '../assets/impact_stories_imgs/16.jpg';

// import './css/impact_stories.css';

// const ImpactStoriesSliderContent = () => {
//   var items = [
//     {
//       index: 1,
//       title: "Building Farming Ecosystem with Blockchain for Empowering Farmers",
//       image: img_22,
//     },
//     {
//       index: 2,
//       title: "Protecting Medicine Logistics for Better Health Care Infrastructure",
//       image: img_12,
//     },
//     {
//       index: 3,
//       title: "Improving Funding Opportunities for the Bottom of the Pyramid of the Society",
//       image: img_23,
//     },
//     {
//       index: 4,
//       title: "Saving Industry Water Consumption",
//       image: img_14,
//     },
//     {
//       index: 5,
//       title: "Making Corporate Debt Market for Ordinary Retail Investors",
//       image: img_19,
//     },
//     {
//       index: 6,
//       title: "Protecting the Environment through better Air Quality Monitoring Model",
//       image: img_15,
//     },
//     {
//       index: 7,
//       title: "Protecting the Environment through better Water Quality Monitoring Model",
//       image: img_16,
//     },
//   ]

//   return (
//     <div>
//       <Carousel className='is_carousel'>
//         {
//           items.map((item, i) => <Item key={i} item={item} />)
//         }
//       </Carousel>
//     </div>
//   )
// }

// function Item(props) {
//   const [currentStory, setCurrentStory] = useState(0);

//   return (
//     <div className='is_responsive_posts_outer_container'>
//       <p className='is_responsive_posts_title'>Read More</p>
//       <div className='is_responsive_posts_container'>
//         <ul className='is_responsive_posts_list'>
//           <li className='is_responsive_posts_list_item'>
//             <div className='is_responsive_posts_list_item_img_container'>
//               <img
//                 src={props.item.image}
//                 alt={props.item.title}
//                 className='is_responsive_posts_list_item_img'
//               />
//             </div>
//             <div className='is_responsive_posts_list_item_text_container'>
//               <p className={currentStory === props.item.index - 1 ? 'is_responsive_posts_list_item_text_selected' : 'is_responsive_posts_list_item_text'} onClick={() => {
//                 setCurrentStory(props.item.index - 1);
//                 localStorage.setItem('impact-story', props.item.index - 1);
//               }}>
//                 {props.item.title}
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default ImpactStoriesSliderContent;