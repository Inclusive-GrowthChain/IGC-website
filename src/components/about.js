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

import './css/about.css';

import home_img from '../assets/home_img/20943774.jpg';
import about_img from '../assets/home_img/about.png';
import Footer from './footer';

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
            src={about_img}
            alt='about_img'
            className='about_img'
          />
        </div>
        <div className='about_inner_container'>
          <div className='about_title'>
            ABOUT US
          </div>
          <div className='about_text'>
            Inclusive Growth Chain
          </div>
          {/* <div className='about_text_2'>
              Impact that Empowers
            </div> */}
          <p className='about_desc'>
            Inclusive Growth Chain was founded by renowned professors/scientists in 2021. Within one year, we created impact by providing blockchain, AI&ML and IoT enabled solutions for women empowerment, reliable transport of critical drugs, increasing financial access through co-lending arrangement between banks, farmer empowerment by creating farmer centric engagement services and citizen science initiatives for better environment. In the last one year, our team won two major blockchain hackathons conducted by Plugin, Dubai and National Payment Corporation of India.
          </p>
          <div className='about_list'>
            <div className='about_list_1'>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon' />
                  Blockchain
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon' />
                  IoT
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon' />
                  AI & ML
                </li>
              </ul>
            </div>
            <div className='about_list_2'>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon' />
                  Citizen Science
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon' />
                  Natural Language Processing
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} className='about_list_icon' />
                  Metaverse
                </li>
              </ul>
            </div>
          </div>
          {/* <div className='about_learn_more'>
              <button className='learn_button'>
                LEARN MORE
              </button>
            </div> */}
        </div>
      </div>
      {/* <div className='about_container_3'>
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
        </div> */}
      <div className='about_container_4'>
        <div className='team_container'>
          <div className='team_title'>
            MEET OUR FOUNDERS
          </div>
          {/* <div className='team_text'>
              Meet with engineers
            </div> */}
          <div className='team_card_container'>
            {/* <div className='team_back_arrow_container_1'>
                {
                  showTeamBackArrow && (
                    <div className='back_arrow'>
                      <FontAwesomeIcon icon={faChevronLeft} className='back_arrow_icon'/>
                    </div>
                  )
                }
              </div> */}
            <div className='team_inner_container'>
              <div className='team_member_1'>
                <Card className='team_member_card'>
                  <CardContent>
                    {/* <div className='team_member_card_title_container'>
                        <div className='team_member_card_user_container'>
                          <div className='team_member_card_name_container'>
                            Name
                          </div>
                          <div className='team_member_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div> */}
                    {/* <div className='team_member_card_social'>
                        <FontAwesomeIcon icon={faGooglePlus} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faLinkedin} className='team_member_card_social_icon'/>
                      </div> */}
                  </CardContent>
                </Card>
              </div>
              <div className='team_member_2'>
                <Card className='team_member_card'>
                  <CardContent>
                    {/* <div className='team_member_card_title_container'>
                        <div className='team_member_card_user_container'>
                          <div className='team_member_card_name_container'>
                            Name
                          </div>
                          <div className='team_member_card_designation_container'>
                            Designation
                          </div>
                        </div>
                      </div> */}
                    {/* <div className='team_member_card_social'>
                        <FontAwesomeIcon icon={faGooglePlus} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='team_member_card_social_icon'/>
                        <FontAwesomeIcon icon={faLinkedin} className='team_member_card_social_icon'/>
                      </div> */}
                  </CardContent>
                </Card>
              </div>
              <div className='team_member_card_title_container'>
                <div className='team_member_card_user_container'>
                  <div className='team_member_card_name_container'>
                    Prof. Vijaya B Marisetty
                  </div>
                  <div className='team_member_card_designation_container'>
                    Co-Founder
                  </div>
                </div>
              </div>
              <div className='team_member_card_title_container'>
                <div className='team_member_card_user_container'>
                  <div className='team_member_card_name_container'>
                    Dr. Varsha Mamidi
                  </div>
                  <div className='team_member_card_designation_container'>
                    Co-Founder
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='team_back_arrow_container_2'>
                {
                  showTeamBackArrow && (
                    <div className='back_arrow'>
                      <FontAwesomeIcon icon={faChevronRight} className='back_arrow_icon'/>
                    </div>
                  )
                }
              </div> */}
          </div>
        </div>
      </div>
      {/* <div className='about_container_5'>
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
                      {/* <div className='review_card_rating'>
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
                      {/* <div className='review_card_rating'>
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
                      {/* <div className='review_card_rating'>
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
        </div> */}
      <Footer />
    </div>
  );
}

export default About;
