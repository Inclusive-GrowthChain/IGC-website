import React, { useLayoutEffect, useState } from 'react';
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

import './css/about.css';

import home_img from '../assets/home_img/20943774.jpg';

const About = () => {
  const [showReviewBackArrow, setShowReviewBackArrow] = useState(false);
  const [showTeamBackArrow, setShowTeamBackArrow] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);

  const handleReviewHover = () => {
    setShowReviewBackArrow(true);
  };

  const handleReviewHoverLeave = () => {
    setShowReviewBackArrow(false);
  };

  const handleTeamHover = () => {
    setShowTeamBackArrow(true);
  };

  const handleTeamHoverLeave = () => {
    setShowTeamBackArrow(false);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
      <div className='about_main_container'>
        <div className='about_container_1'>
          <div className='ac1_title'>
            About
          </div>
          <div className='ac1_text'>
            Home &nbsp; {'>'}{'>'} &nbsp; About
          </div>
        </div>
        <div className='about_container_2'>
          <div className='about_img_container_2'>
            <img
              src={home_img}
              alt='home_img'
              className='home_img'
            />
          </div>
          <div className='about_inner_container'>
            <div className='about_title'>
              ABOUT US
            </div>
            <div className='about_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <p className='about_desc'>
            We are a startup, founded by renowned professors/scientists, incubated initially at the University of Hyderabad and later the Indian School of Business, Hyderabad. We are founded in 2022 and in less than one year, we created impact by providing blockchain, AI&ML and IoT enable solutions for women empowerment, reliable transport of critical drugs, increasing financial access through co-lending arrangement between banks, farmer empowerment by creating farmer centric engagement services and citizen science initiatives for better environment. In the last one year, out team won two major blockchain hackathons conducted by Plugin, Dubai and National Payment Corporate of India.
            </p>
            <div className='about_list'>
              <div className='about_list_1'>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon'/>
                    Machine Learning
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon'/>
                    Deep Learning
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon'/>
                    Artificial Intelligence
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon'/>
                    Language Processing
                  </li>
                </ul>
              </div>
              <div className='about_list_2'>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon'/>
                    Machine Learning
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon'/>
                    Deep Learning
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon'/>
                    Artificial Intelligence
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon'/>
                    Language Processing
                  </li>
                </ul>
              </div>
            </div>
            <div className='about_learn_more'>
              <button className='learn_button'>
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className='about_container_3'>
          <div className='about_services_container'>
            <div className='about_services_title'>
              WHAT WE DO
            </div>
            <div className='about_services_text'>
              Services we are offering
            </div>
            <div className='about_services_tab_container'>
              <div 
                className={serviceIndex==0 ? 'about_services_tab_selected' : 'about_services_tab_1'}
                onClick={() => setServiceIndex(0)}
              >
                <p>Machine Learning</p>
              </div>
              <div 
                className={serviceIndex==1 ? 'about_services_tab_selected' : 'about_services_tab_2'}
                onClick={() => setServiceIndex(1)}
              >
                <p>Deep Learning</p>
              </div>
              <div 
                className={serviceIndex==2 ? 'about_services_tab_selected' : 'about_services_tab_3'}
                onClick={() => setServiceIndex(2)}
              >
                <p>Artificial Intelligence</p>
              </div>
            </div>
            <div className='about_services_card_container'>
              <div className={serviceIndex==0 ? 'about_services_inner_container_selected' : 'about_services_inner_container_1'}>
                <div className='about_services_service_1'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faBrain} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_2'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faBrain} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_3'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faBrain} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_4'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faBrain} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className={serviceIndex==1 ? 'about_services_inner_container_selected' : 'about_services_inner_container_2'}>
                <div className='about_services_service_1'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faClock} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_2'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faClock} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_3'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faClock} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_4'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faClock} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className={serviceIndex==2 ? 'about_services_inner_container_selected' : 'about_services_inner_container_3'}>
                <div className='about_services_service_1'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faEnvelope} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_2'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faEnvelope} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_3'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faEnvelope} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='about_services_service_4'>
                  <Card className='about_service_card'>
                    <CardContent>
                      <div className='about_service_card_icon_container'>
                        <FontAwesomeIcon icon={faEnvelope} className='about_service_card_icon'/>
                      </div>
                      <div className='about_service_card_title_container'>
                        <p>Video Surveillance</p>
                      </div>
                      <div className='about_service_card_text_container'>
                        <p>
                          Capitalized one lown hanging fruits today identify a ball  added activity to beta test. 
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='about_container_4'>
          <div className='team_container'>
            <div className='team_title'>
              OUR TEAM
            </div>
            <div className='team_text'>
              Meet with engineers
            </div>
            <div className='team_card_container' onMouseOver={handleTeamHover} onMouseLeave={handleTeamHoverLeave}>
              <div className='team_back_arrow_container_1'>
                {
                  showTeamBackArrow && (
                    <div className='back_arrow'>
                      <FontAwesomeIcon icon={faChevronLeft} className='back_arrow_icon'/>
                    </div>
                  )
                }
              </div>
              <div className='team_inner_container'>
                <div className='team_member_1'>
                  <Card className='team_member_card'>
                    <CardContent>
                      <div className='team_member_card_title_container'>
                        <div className='team_member_card_user_container'>
                          <div className='team_member_card_name_container'>
                            Name
                          </div>
                          <div className='team_member_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div>
                      <div className='team_member_card_social'>
                        <FontAwesomeIcon icon={faGooglePlus} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faLinkedin} className='team_member_card_social_icon'/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='team_member_2'>
                  <Card className='team_member_card'>
                    <CardContent>
                      <div className='team_member_card_title_container'>
                        <div className='team_member_card_user_container'>
                          <div className='team_member_card_name_container'>
                            Name
                          </div>
                          <div className='team_member_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div>
                      <div className='team_member_card_social'>
                        <FontAwesomeIcon icon={faGooglePlus} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faLinkedin} className='team_member_card_social_icon'/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='team_member_3'>
                  <Card className='team_member_card'>
                    <CardContent>
                      <div className='team_member_card_title_container'>
                        <div className='team_member_card_user_container'>
                          <div className='team_member_card_name_container'>
                            Name
                          </div>
                          <div className='team_member_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div>
                      <div className='team_member_card_social'>
                        <FontAwesomeIcon icon={faGooglePlus} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faLinkedin} className='team_member_card_social_icon'/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='team_member_4'>
                  <Card className='team_member_card'>
                    <CardContent>
                      <div className='team_member_card_title_container'>
                        <div className='team_member_card_user_container'>
                          <div className='team_member_card_name_container'>
                            Name
                          </div>
                          <div className='team_member_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div>
                      <div className='team_member_card_social'>
                        <FontAwesomeIcon icon={faGooglePlus} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faLinkedin} className='team_member_card_social_icon'/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className='team_back_arrow_container_2'>
                {
                  showTeamBackArrow && (
                    <div className='back_arrow'>
                      <FontAwesomeIcon icon={faChevronRight} className='back_arrow_icon'/>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className='about_container_5'>
          <div className='review_container'>
            <div className='review_title'>
              CLIENT REVIEWS
            </div>
            <div className='review_text'>
              What our clients say
            </div>
            <div className='review_card_container' onMouseOver={handleReviewHover} onMouseLeave={handleReviewHoverLeave}>
              <div className='review_back_arrow_container_1'>
                {
                  showReviewBackArrow && (
                    <div className='back_arrow'>
                      <FontAwesomeIcon icon={faChevronLeft} className='back_arrow_icon'/>
                    </div>
                  )
                }
              </div>
              <div className='review_inner_container'>
                <div className='review_1'>
                  <Card className='review_card'>
                    <CardContent>
                      <div className='review_card_title_container'>
                        <div className='review_card_profile_container'>
                          <FontAwesomeIcon icon={faUser} className='review_card_profile_icon'/>
                        </div>
                        <div className='review_card_user_container'>
                          <div className='review_card_name_container'>
                            Name
                          </div>
                          <div className='review_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div>
                      <p className='review_card_desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className='review_card_rating'>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='review_2'>
                  <Card className='review_card'>
                    <CardContent>
                      <div className='review_card_title_container'>
                        <div className='review_card_profile_container'>
                          <FontAwesomeIcon icon={faUser} className='review_card_profile_icon'/>
                        </div>
                        <div className='review_card_user_container'>
                          <div className='review_card_name_container'>
                            Name
                          </div>
                          <div className='review_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div>
                      <p className='review_card_desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className='review_card_rating'>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='review_3'>
                  <Card className='review_card'>
                    <CardContent>
                      <div className='review_card_title_container'>
                        <div className='review_card_profile_container'>
                          <FontAwesomeIcon icon={faUser} className='review_card_profile_icon'/>
                        </div>
                        <div className='review_card_user_container'>
                          <div className='review_card_name_container'>
                            Name
                          </div>
                          <div className='review_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div>
                      <p className='review_card_desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className='review_card_rating'>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                        <FontAwesomeIcon icon={faStar} className='review_card_star'/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className='review_back_arrow_container_2'>
                {
                  showReviewBackArrow && (
                    <div className='back_arrow'>
                      <FontAwesomeIcon icon={faChevronRight} className='back_arrow_icon'/>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='company_container'>
            <div className='company_title'>
              {/* <img
                src={logo}
                alt='logo'
                className='logo'
              /> */}
              IGC
            </div>
            <div className='company_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className='company_social_container'>
              <FontAwesomeIcon icon={faFacebookF} className='social_icon'/>
              <FontAwesomeIcon icon={faInstagram} className='social_icon'/>
              <FontAwesomeIcon icon={faWhatsapp} className='social_icon'/>
              <FontAwesomeIcon icon={faTwitter} className='social_icon'/>
              <FontAwesomeIcon icon={faLinkedin} className='social_icon'/>
            </div>
          </div>
          <div className='contact_container_2'>
            <div className='contact_title_2'>
              CONTACT US
              <hr className='hc10_line' />
            </div>
            <div className='contact_text_2'>
              <p>
                <FontAwesomeIcon icon={faMap} className='contact_icon'/>
                Address
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className='contact_icon'/>
                Phone Number
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className='contact_icon'/>
                Email
              </p>
              <p>
                <FontAwesomeIcon icon={faWhatsapp} className='contact_icon'/>
                Whatsapp Number
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className='contact_icon'/>
                Working Hours
              </p>
            </div>
          </div>
          <div className='navigation_container'>
            <div className='navigation_title'>
              NAVIGATION
              <hr className='hc10_line' />
            </div>
            <div className='navigation_text'>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} className='contact_icon'/>
                Home
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} className='contact_icon'/>
                Industries & Platform
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} className='contact_icon'/>
                About Us
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} className='contact_icon'/>
                Contact Us
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} className='contact_icon'/>
                News & Media
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} className='contact_icon'/>
                Careers
              </p>
            </div>
          </div>
          <div className='news_container_2'>
            <div className='news_title_2'>
              LATEST NEWS & POSTS
              <hr className='hc10_line' />
            </div>
            <div className='news_card_container_2'>
              <div className='news_1_2'>
                <Card className='news_card_2' sx={{backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none'}}>
                  <CardContent>
                    <div className='news_card_2_img_container'>
                      <img
                        src={home_img}
                        alt='home_img'
                        className='news_card_img_2'
                      />
                    </div>
                    <div className='news_card_2_text'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className='news_2_2'>
                <Card className='news_card_2' sx={{backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none'}}>
                  <CardContent>
                    <div className='news_card_2_img_container'>
                      <img
                        src={home_img}
                        alt='home_img'
                        className='news_card_img_2'
                      />
                    </div>
                    <div className='news_card_2_text'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className='news_3_2'>
                <Card className='news_card_2' sx={{backgroundColor: 'rgb(250, 250, 250)', border: 'none', boxShadow: 'none'}}>
                  <CardContent>
                    <div className='news_card_2_img_container'>
                      <img
                        src={home_img}
                        alt='home_img'
                        className='news_card_img_2'
                      />
                    </div>
                    <div className='news_card_2_text'>
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

export default About;
