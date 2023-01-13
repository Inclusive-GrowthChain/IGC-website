import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './css/blog.css';

import home_img from '../assets/home_img/20943774.jpg';

const blog_items = [
  {
    index: 1,
    title: "Every time you attribute horse gets its holidays unicorn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nunc eu nunc.",
    date: "12 December, 2021",
    topic: "AI & ML",
  },
  {
    index: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nunc eu nunc.",
    date: "12 December, 2021",
    topic: "Blockchain",
  },
  {
    index: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nunc eu nunc.",
    date: "12 December, 2021",
    topic: "NLP",
  },
  {
    index: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam lorem, eget aliquam nisl nunc eu nunc.",
    date: "12 December, 2021",
    topic: "Metaverse",
  },
]

const Blog = () => {

  return (
    <div className='blog_main_container'>
      <div className='blog_container_1'>
        <div className='bc1_title'>
          Blog
        </div>
        <div className='bc1_text'>
          Home &nbsp; {'>'}{'>'} &nbsp; Blog
        </div>
      </div>
      <div className='blog_container_2'>
        <div className='bc2_content_container'>
          <div className='blog_card_container'>
            {
              blog_items.map((item) => (
                <Card className='blog_card'>
                  <CardContent className='blog_card_content'>
                    <div className='blog_card_image_container'>
                      <img
                        src={home_img}
                        alt='card_img'
                        className='blog_card_img'
                      />
                    </div>
                    <div className='blog_card_title'>
                      {item.title}
                    </div>
                    <div className='blog_card_details'>
                      <div className='blog_card_date'>
                        <FontAwesomeIcon icon={faCalendarCheck} className='blog_icon' />
                        {item.date}
                      </div>
                      <div className='blog_card_topic'>
                        <FontAwesomeIcon icon={faFolder} className='blog_icon' />
                        {item.topic}
                      </div>
                    </div>
                    <div className='blog_card_description'>
                      {item.description}
                    </div>
                    <div className='read_more'>
                      {/* <a href={props.item.item1.link} target="_blank"> */}
                      <button className='learn_button' style={{ marginLeft: '-17px' }}>
                        Read More
                      </button>
                      {/* </a> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
          <div className='bc2_side_container'>
            <div className='bc2_search_bar_container'>
              <div className='bc2_search_bar'>
                <input
                  type='text'
                  placeholder='Search'
                  className='bc2_search_input'
                />
                <FontAwesomeIcon icon={faSearch} className='bc2_search_icon' />
              </div>
            </div>
            <div className='bc2_categories_container'>
              <div className='bc2_categories_title'>
                Categories
              </div>
              <div className='bc2_categories_list_container'>
                <ul className='bc2_categories_list'>
                  <li className='bc2_categories_list_item'>
                    <FontAwesomeIcon icon={faChevronRight} className='bc2_categories_list_item_icon' />
                    AI & ML
                  </li>
                  <li className='bc2_categories_list_item'>
                    <FontAwesomeIcon icon={faChevronRight} className='bc2_categories_list_item_icon' />
                    Blockchain
                  </li>
                  <li className='bc2_categories_list_item'>
                    <FontAwesomeIcon icon={faChevronRight} className='bc2_categories_list_item_icon' />
                    NLP
                  </li>
                  <li className='bc2_categories_list_item'>
                    <FontAwesomeIcon icon={faChevronRight} className='bc2_categories_list_item_icon' />
                    Metaverse
                  </li>
                </ul>
              </div>
            </div>
            <div className='bc2_recent_posts_container'>
              <div className='bc2_recent_posts_title'>
                Recent Posts
              </div>
              <div className='bc2_recent_posts_list_container'>
                <ul className='bc2_recent_posts_list'>
                  <li className='bc2_recent_posts_list_item'>
                    <div className='bc2_recent_posts_list_item_img_container'>
                      <img
                        src={home_img}
                        alt="home_img"
                        className='bc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='bc2_recent_posts_list_item_text_container'>
                      <p className='bc2_recent_posts_list_item_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className='bc2_recent_posts_list_item'>
                    <div className='bc2_recent_posts_list_item_img_container'>
                      <img
                        src={home_img}
                        alt="home_img"
                        className='bc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='bc2_recent_posts_list_item_text_container'>
                      <p className='bc2_recent_posts_list_item_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className='bc2_recent_posts_list_item'>
                    <div className='bc2_recent_posts_list_item_img_container'>
                      <img
                        src={home_img}
                        alt="home_img"
                        className='bc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='bc2_recent_posts_list_item_text_container'>
                      <p className='bc2_recent_posts_list_item_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className='bc2_recent_posts_list_item'>
                    <div className='bc2_recent_posts_list_item_img_container'>
                      <img
                        src={home_img}
                        alt="home_img"
                        className='bc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='bc2_recent_posts_list_item_text_container'>
                      <p className='bc2_recent_posts_list_item_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='home_company_container'>
          <div className='home_company_title'>
            IGC
          </div>
          <div className='home_company_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className='home_company_social_container'>
            <FontAwesomeIcon icon={faFacebookF} className='home_social_icon' />
            <FontAwesomeIcon icon={faInstagram} className='home_social_icon' />
            <FontAwesomeIcon icon={faWhatsapp} className='home_social_icon' />
            <FontAwesomeIcon icon={faTwitter} className='home_social_icon' />
            <FontAwesomeIcon icon={faLinkedin} className='home_social_icon' />
          </div>
        </div>
        <div className='home_contact_container_2'>
          <div className='home_contact_title_2'>
            CONTACT US
            <hr className='hc10_line' />
          </div>
          <div className='home_contact_text_2'>
            <p>
              <FontAwesomeIcon icon={faMap} className='home_contact_icon' />
              Address
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className='home_contact_icon' />
              Phone Number
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className='home_contact_icon' />
              Email
            </p>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} className='home_contact_icon' />
              Whatsapp Number
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} className='home_contact_icon' />
              Working Hours
            </p>
          </div>
        </div>
        <div className='home_navigation_container'>
          <div className='home_navigation_title'>
            NAVIGATION
            <hr className='hc10_line' />
          </div>
          <div className='home_navigation_text'>
            <p>
              <FontAwesomeIcon icon={faCircleCheck} className='home_contact_icon' />
              Home
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleCheck} className='home_contact_icon' />
              Industries & service
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleCheck} className='home_contact_icon' />
              About Us
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleCheck} className='home_contact_icon' />
              Contact Us
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleCheck} className='home_contact_icon' />
              News & Media
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleCheck} className='home_contact_icon' />
              Careers
            </p>
          </div>
        </div>
        <div className='home_news_container_2'>
          <div className='home_news_title_2'>
            LATEST NEWS & POSTS
            <hr className='hc10_line' />
          </div>
          <div className='home_news_card_container_2'>
            <div className='home_news_1_2'>
              <Card className='home_news_card_2' sx={{ backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none' }}>
                <CardContent>
                  <div className='home_news_card_2_img_container'>
                    <img
                      src={home_img}
                      alt='home_img'
                      className='home_news_card_img_2'
                    />
                  </div>
                  <div className='home_news_card_2_text'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className='home_news_2_2'>
              <Card className='home_news_card_2' sx={{ backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none' }}>
                <CardContent>
                  <div className='home_news_card_2_img_container'>
                    <img
                      src={home_img}
                      alt='home_img'
                      className='home_news_card_img_2'
                    />
                  </div>
                  <div className='home_news_card_2_text'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className='home_news_3_2'>
              <Card className='home_news_card_2' sx={{ backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none' }}>
                <CardContent>
                  <div className='home_news_card_2_img_container'>
                    <img
                      src={home_img}
                      alt='home_img'
                      className='home_news_card_img_2'
                    />
                  </div>
                  <div className='home_news_card_2_text'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
