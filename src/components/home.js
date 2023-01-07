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
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './css/home.css';

import home_img from '../assets/home_img/20943774.jpg';
import hc7_img_1 from '../assets/hc7_companies/1.png';
import hc7_img_2 from '../assets/hc7_companies/2.png';
import hc7_img_3 from '../assets/hc7_companies/3.png';
import hc7_img_4 from '../assets/hc7_companies/4.png';
import hc7_img_5 from '../assets/hc7_companies/5.png';

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
      <div className='home_main_container'>
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
              <Card className='service_card'>
                <CardContent>
                  <div className='service_card_icon_container'>
                    <FontAwesomeIcon icon={faCode} className='service_icon'/>
                  </div>
                  <p className='service_card_title'>
                    App Development
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='tab_2'>
              <Card className='service_card'>
                <CardContent>
                  <div className='service_card_icon_container'>
                    <FontAwesomeIcon icon={faCode} className='service_icon'/>
                  </div>
                  <p className='service_card_title'>
                    Web Development
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='tab_3'>
              <Card className='service_card'>
                <CardContent>
                  <div className='service_card_icon_container'>
                    <FontAwesomeIcon icon={faMicrochip} className='service_icon'/>
                  </div>
                  <p className='service_card_title'>
                    AI & ML
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='tab_4'>
              <Card className='service_card'>
                <CardContent>
                  <div className='service_card_icon_container'>
                    <FontAwesomeIcon icon={faCode} className='service_icon'/>
                  </div>
                  <p className='service_card_title'>
                    Blockchain
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
              <Card className='platform_card'>
                <CardContent>
                  <div className='platform_icon_container'>
                    <FontAwesomeIcon icon={faHeartPulse} className='platform_icon'/>
                  </div>
                  <p className='platform_card_title'>
                    Health Care
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='platform_2'>
              <Card className='platform_card'>
                <CardContent>
                  <div className='platform_icon_container'>
                    <FontAwesomeIcon icon={faCreditCard} className='platform_icon'/>
                  </div>
                  <p className='platform_card_title'>
                    Fin-Tech
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='platform_3'>
              <Card className='platform_card'>
                <CardContent>
                  <div className='platform_icon_container'>
                    <FontAwesomeIcon icon={faSeedling} className='platform_icon'/>
                  </div>
                  <p className='platform_card_title'>
                    Agri Tech
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='platform_4'>
              <Card className='platform_card'>
                <CardContent>
                  <div className='platform_icon_container'>
                    <FontAwesomeIcon icon={faTachographDigital} className='platform_icon'/>
                  </div>
                  <p className='platform_card_title'>
                    IGC-Data Logger
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='platform_5'>
              <Card className='platform_card'>
                <CardContent>
                  <div className='platform_icon_container'>
                    <FontAwesomeIcon icon={faSeedling} className='platform_icon'/>
                  </div>
                  <p className='platform_card_title'>
                    Agri Tech
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='platform_6'>
              <Card className='platform_card'>
                <CardContent>
                  <div className='platform_icon_container'>
                    <FontAwesomeIcon icon={faTachographDigital} className='platform_icon'/>
                  </div>
                  <p className='platform_card_title'>
                    IGC-Data Logger
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className='home_container_5'>
          <div className='about_container'>
            <div className='about_container_title'>
              ABOUT US
            </div>
            <div className='about_container_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <p className='about_container_desc'>
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
        <div className='home_container_7'>
            <div className='hc7_row_1'>
              <div className='hc7_col_1'>
                <img
                  src={hc7_img_1}
                  alt='hc7_img_1'
                  className='hc7_img_1'
                />
              </div>
              <div className='hc7_col_2'>
                <img
                  src={hc7_img_2}
                  alt='hc7_img_2'
                  className='hc7_img_2'
                />
              </div>
              <div className='hc7_col_3'>
                <img
                  src={hc7_img_3}
                  alt='hc7_img_3'
                  className='hc7_img_3'
                />
              </div>
              <div className='hc7_col_4'>
                <img
                  src={hc7_img_4}
                  alt='hc7_img_4'
                  className='hc7_img_4'
                />
              </div>
              <div className='hc7_col_5'>
                <img
                  src={hc7_img_5}
                  alt='hc7_img_5'
                  className='hc7_img_5'
                />
              </div>
            </div>
            <div className='hc7_row_2'>
              <div className='hc7_col_1'>
                <img
                  src={hc7_img_1}
                  alt='hc7_img_1'
                  className='hc7_img_1'
                />
              </div>
              <div className='hc7_col_2'>
                <img
                  src={hc7_img_2}
                  alt='hc7_img_2'
                  className='hc7_img_2'
                />
              </div>
              <div className='hc7_col_3'>
                <img
                  src={hc7_img_3}
                  alt='hc7_img_3'
                  className='hc7_img_3'
                />
              </div>
              <div className='hc7_col_4'>
                <img
                  src={hc7_img_4}
                  alt='hc7_img_4'
                  className='hc7_img_4'
                />
              </div>
            </div>
        </div>
        <div className='home_container_8'>
          <div className='subscribe_icon_container'>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className='subscribe_icon'/>
          </div>
          <div className='subscribe_title'>
            Subscribe
          </div>
          <div className='subscribe_text'>
            Subscribe to our newsletter & stay updated
          </div>
          <div className='subscribe_input_container'>
            <input
              type='text'
              placeholder='Your email address'
              className='subscribe_input'
            />
            <button className='subscribe_button'>
              <FontAwesomeIcon icon={faPaperPlane} className='send_icon'/>
            </button>
          </div>
        </div>
        <div className='home_container_9'>
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
        <div className='footer'>
          <div className='company_container'>
            <div className='company_title'>
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

export default Home;
