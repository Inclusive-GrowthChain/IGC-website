import React from 'react';
import { Card, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMap, faPhone, faEnvelope, faClock, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import home_img from '../assets/home_img/20943774.jpg';
import './css/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_company_container'>
        <div className='footer_company_title'>
          IGC
        </div>
        <div className='footer_company_text'>
          Impact that Empowers
        </div>
        <div className='footer_company_social_container'>
          <FontAwesomeIcon icon={faFacebookF} className='footer_social_icon' />
          <FontAwesomeIcon icon={faInstagram} className='footer_social_icon' />
          <FontAwesomeIcon icon={faWhatsapp} className='footer_social_icon' />
          <FontAwesomeIcon icon={faTwitter} className='footer_social_icon' />
          <FontAwesomeIcon icon={faLinkedin} className='footer_social_icon' />
        </div>
      </div>
      <div className='footer_contact_container_2'>
        <div className='footer_contact_title_2'>
          CONTACT US
          <hr className='footer_line' />
        </div>
        <div className='footer_contact_text_2'>
          <p>
            <FontAwesomeIcon icon={faMap} className='footer_contact_icon' />
            Address
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className='footer_contact_icon' />
            Phone Number
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className='footer_contact_icon' />
            Email
          </p>
          <p>
            <FontAwesomeIcon icon={faWhatsapp} className='footer_contact_icon' />
            Whatsapp Number
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} className='footer_contact_icon' />
            Working Hours
          </p>
        </div>
      </div>
      <div className='footer_navigation_container'>
        <div className='footer_navigation_title'>
          NAVIGATION
          <hr className='footer_line' />
        </div>
        <div className='footer_navigation_text'>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className='footer_contact_icon' />
            <Link to="../" className='footer_navigation_link'>
              Home
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className='footer_contact_icon' />
            <Link to="../impact-stories" className='footer_navigation_link'>
              Impact Stories
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className='footer_contact_icon' />
            <Link to="../about" className='footer_navigation_link'>
              About Us
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className='footer_contact_icon' />
            <Link to="../contact" className='footer_navigation_link'>
              Contact Us
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className='footer_contact_icon' />
            <Link to="../news" className='footer_navigation_link'>
              News & Media
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className='footer_contact_icon' />
            <Link to="../careers" className='footer_navigation_link'>
              Careers
            </Link>
          </p>
        </div>
      </div>
      <div className='footer_news_container_2'>
        <div className='footer_news_title_2'>
          LATEST NEWS & POSTS
          <hr className='footer_line' />
        </div>
        <div className='footer_news_card_container_2'>
          <div className='footer_news_1_2'>
            <Card className='footer_news_card_2' sx={{ backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none' }}>
              <CardContent>
                <div className='footer_news_card_2_img_container'>
                  <img
                    src={home_img}
                    alt='home_img'
                    className='footer_news_card_img_2'
                  />
                </div>
                <div className='footer_news_card_2_text'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='footer_news_2_2'>
            <Card className='footer_news_card_2' sx={{ backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none' }}>
              <CardContent>
                <div className='footer_news_card_2_img_container'>
                  <img
                    src={home_img}
                    alt='home_img'
                    className='footer_news_card_img_2'
                  />
                </div>
                <div className='footer_news_card_2_text'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='footer_news_3_2'>
            <Card className='footer_news_card_2' sx={{ backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none' }}>
              <CardContent>
                <div className='footer_news_card_2_img_container'>
                  <img
                    src={home_img}
                    alt='home_img'
                    className='footer_news_card_img_2'
                  />
                </div>
                <div className='footer_news_card_2_text'>
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
  )
}

export default Footer;
