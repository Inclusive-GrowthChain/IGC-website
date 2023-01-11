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

import logo from '../assets/logo/4.png';

import './css/careers.css';

import home_img from '../assets/home_img/20943774.jpg';

const Careers = () => {

  return (
    <div className='careers_main_container'>
      <div className='careers_container_1'>
        <div className='csc1_title'>
          Careers
        </div>
        <div className='csc1_text'>
          Home &nbsp; {'>'}{'>'} &nbsp; Careers
        </div>
      </div>
      <div className='careers_container_2'>
        <div className='careers_card_container'>
          <div className='careers_card_1'>
            <Card className='careers_card'>
              <CardContent>
                <div className='careers_card_logo_container'>
                  <img src={logo} className='careers_card_logo' />
                </div>
                <div className='careers_card_company_container'>
                  <b>Inclusive Growth Chain</b> (Twinsset Private Limited)
                </div>
                <div className='careers_card_title'>
                  Android Developer
                </div>
                <div className='careers_card_content_container'>
                  <ul className='careers_card_info_list'>
                    <li><b>Sector: </b>Deep Tech</li>
                    <li><b>Job Location: </b>Indian School of Business, Hyderabad</li>
                    <li><b>Job Type: </b>Full Time</li>
                  </ul>
                </div>
                <div className='careers_card_button'>
                  View Details
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='careers_card_2'>
            <Card className='careers_card'>
              <CardContent>
                <div className='careers_card_logo_container'>
                  <img src={logo} className='careers_card_logo' />
                </div>
                <div className='careers_card_company_container'>
                  <b>Inclusive Growth Chain</b> (Twinsset Private Limited)
                </div>
                <div className='careers_card_title'>
                  Blockchain Developer
                </div>
                <div className='careers_card_content_container'>
                  <ul className='careers_card_info_list'>
                    <li><b>Sector: </b>Deep Tech</li>
                    <li><b>Job Location: </b>Indian School of Business, Hyderabad</li>
                    <li><b>Job Type: </b>Full Time</li>
                  </ul>
                </div>
                <div className='careers_card_button'>
                  View Details
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='careers_card_3'>
            <Card className='careers_card'>
              <CardContent>
                <div className='careers_card_logo_container'>
                  <img src={logo} className='careers_card_logo' />
                </div>
                <div className='careers_card_company_container'>
                  <b>Inclusive Growth Chain</b> (Twinsset Private Limited)
                </div>
                <div className='careers_card_title'>
                  Backend Developer
                </div>
                <div className='careers_card_content_container'>
                  <ul className='careers_card_info_list'>
                    <li><b>Sector: </b>Deep Tech</li>
                    <li><b>Job Location: </b>Indian School of Business, Hyderabad</li>
                    <li><b>Job Type: </b>Full Time</li>
                  </ul>
                </div>
                <div className='careers_card_button'>
                  View Details
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='careers_card_4'>
            <Card className='careers_card'>
              <CardContent>
                <div className='careers_card_logo_container'>
                  <img src={logo} className='careers_card_logo' />
                </div>
                <div className='careers_card_company_container'>
                  <b>Inclusive Growth Chain</b> (Twinsset Private Limited)
                </div>
                <div className='careers_card_title'>
                  User Interface Developer
                </div>
                <div className='careers_card_content_container'>
                  <ul className='careers_card_info_list'>
                    <li><b>Sector: </b>Deep Tech</li>
                    <li><b>Job Location: </b>Indian School of Business, Hyderabad</li>
                    <li><b>Job Type: </b>Full Time</li>
                  </ul>
                </div>
                <div className='careers_card_button'>
                  View Details
                </div>
              </CardContent>
            </Card>
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

export default Careers;
