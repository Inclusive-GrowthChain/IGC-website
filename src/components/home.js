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
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

import './css/home.css';

import home_img from '../assets/home_img/20943774.jpg';
import app_icon from '../assets/card_icons/app_icon/16.jpg';
import logo from '../assets/logo/logo2.png';

const Home = () => {
  const [showWelcomeTitle, setShowWelcomeTitle] = useState(false);
  const [showWelcomeText, setShowWelcomeText] = useState(false);
  const [showLearnButton, setShowLearnButton] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowWelcomeTitle(true);
    }, 1000);
    setInterval(() => {
      setShowWelcomeText(true);
    }, 2000);
    setInterval(() => {
      setShowLearnButton(true);
    }, 3000);
    setInterval(() => {
      setAllLoaded(true);
    }, 3500);
  }, []);

  return (
      <div className='home_container'>
        <div className='home_container_1'>
          <div className='welcome_container'>
            <div className={showWelcomeTitle ? 'welcome_title' : 'welcome_title_loading'}>
              WELCOME TO IGC
            </div>
            <div className={showWelcomeText ? 'welcome_text' : 'welcome_text_loading'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className='learn_more'>
              <button className={allLoaded ? 'learn_button' : showLearnButton ? 'learn_button_loaded' : 'learn_button_loading'}>
                LEARN MORE
              </button>
            </div>
          </div>
          <div className='img_container'>
            <img
              src={home_img}
              alt='home_img'
              className='home_img'
            />
          </div>
        </div>
        <div className='home_container_2'>
          <div className='tab_container'>
            <div className='tab_1'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    App Development
                  </p>
                  <p className='card_desc'>
                    App Development Description
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='tab_2'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    Web Development
                  </p>
                  <p className='card_desc'>
                    Web Development Description
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='tab_3'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    AI & ML
                  </p>
                  <p className='card_desc'>
                    AI & ML Description
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='tab_4'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    Blockchain
                  </p>
                  <p className='card_desc'>
                    Blockchain Description
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className='desc_container'>
            <div className='desc_title'>
              SERVICES
            </div>
            <div className='desc_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <p className='desc_desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <div className='learn_more_2'>
              <button className='learn_button'>
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className='home_container_3'>
          <div className='stats_container'>
            <div className='stat_1_container'>
              <div className='stat_1'>
                <div className='stat_firstLine'>
                  6000+
                </div>
                <div className='stat_secondLine'>
                  Complete Projects
                </div>
              </div>
            </div>
            <div className='stat_2_container'>
              <div className='stat_2'>
                <div className='stat_firstLine'>
                  4000+
                </div>
                <div className='stat_secondLine'>
                  NLP Experts
                </div>
              </div>
            </div>
            <div className='stat_3_container'>
              <div className='stat_3'>
                <div className='stat_firstLine'>
                  3500+
                </div>
                <div className='stat_secondLine'>
                  Satisfied Clients
                </div>
              </div>
            </div>
            <div className='stat_4_container'>
              <div className='stat_4'>
                <div className='stat_firstLine'>
                  6000+
                </div>
                <div className='stat_secondLine'>
                  Industries Served
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home_container_4'>
          <div className='platform_container'>
            <div className='platform_title'>
              INDUSTRIES & PLATFORMS
            </div>
            <div className='platform_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <p className='platform_desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <div className='learn_more_3'>
              <button className='learn_button'>
                LEARN MORE
              </button>
            </div>
          </div>
          <div className='platform_card_container'>
            <div className='platform_1'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    Health Care
                  </p>
                  <p className='card_desc'>
                    Health Description
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='platform_2'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    Fin-Tech
                  </p>
                  <p className='card_desc'>
                    Fin-Tech Description
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='platform_3'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    Agri Tech
                  </p>
                  <p className='card_desc'>
                    Agri Tech Description
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='platform_4'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    IGC-Data Logger
                  </p>
                  <p className='card_desc'>
                    IGC-Data Logger Description
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className='home_container_5'>
          <div className='about_container'>
            <div className='about_title'>
              ABOUT US
            </div>
            <div className='about_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <p className='about_desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <div className='learn_more_4'>
              <button className='learn_button'>
                LEARN MORE
              </button>
            </div>
          </div>
          <div className='img_container_2'>
            <img
              src={home_img}
              alt='home_img'
              className='home_img'
            />
          </div>
        </div>
        <div className='home_container_6'>
          <div className='news_container'>
            <div className='news_title'>
              NEWS & MEDIA
            </div>
            <div className='news_text'>
              Recent News Posts
            </div>
            <div className='news_card_container'>
              <div className='news_1'>
                <Card className='news_card'>
                  <CardContent>
                    <img
                      src={home_img}
                      alt='home_img'
                      className='news_card_img'
                    />
                    <p className="news_card_date">
                      <FontAwesomeIcon icon={faCalendarCheck} className='news_icon'/>
                      October 10, 2020
                    </p>
                    <p className='news_card_title'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className='news_card_desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='read_more'>
                      <button className='learn_button'>
                        Read More
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className='news_2'>
                <Card className='news_card'>
                  <CardContent>
                    <img
                      src={home_img}
                      alt='home_img'
                      className='news_card_img'
                    />
                    <p className="news_card_date">
                      <FontAwesomeIcon icon={faCalendarCheck} className='news_icon'/>
                      October 10, 2020
                    </p>
                    <p className='news_card_title'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className='news_card_desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='read_more'>
                      <button className='learn_button'>
                        Read More
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className='news_3'>
                <Card className='news_card'>
                  <CardContent>
                    <img
                      src={home_img}
                      alt='home_img'
                      className='news_card_img'
                    />
                    <p className="news_card_date">
                      <FontAwesomeIcon icon={faCalendarCheck} className='news_icon'/>
                      October 10, 2020
                    </p>
                    <p className='news_card_title'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className='news_card_desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='read_more'>
                      <button className='learn_button'>
                        Read More
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className='home_container_7'>
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
              <hr className='hc7_line' />
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
              <hr className='hc7_line' />
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
              <hr className='hc7_line' />
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

export default Home;
