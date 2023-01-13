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
import Footer from './footer';

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
      <Footer />
    </div>
  );
}

export default Careers;
