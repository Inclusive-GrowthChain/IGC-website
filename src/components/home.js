import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
                Learn More
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
            <div className='tab_5'>
              <Card className='card'>
                <CardContent>
                  <img
                    src={app_icon}
                    alt='app_icon'
                    className='card_icon'
                  />
                  <p className='card_title'>
                    IOT
                  </p>
                  <p className='card_desc'>
                    IOT Description
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
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className='home_container_3'>
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
                Learn More
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
        <div className='home_container_4'>
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
                Learn More
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
        <div className='home_container_5'>
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
        <div className='home_container_6'>
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
          </div>
          <div className='contact_container_2'>
            <div className='contact_title_2'>
              CONTACT US
            </div>
            <div className='contact_text_2'>
              <p>Address Line 1</p>
              <p>Address Line 2</p>
              <p>Address Line 3</p>
              <p>Phone Number</p>
              <p>Email Address</p>
              <p>Active Hours</p>
            </div>
          </div>
          <div className='navigation_container'>
            <div className='navigation_title'>
              NAVIGATION
            </div>
            <div className='navigation_text'>
              <p>Home</p>
              <p>Services</p>
              <p>Industries & Platform</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>News & Media</p>
              <p>Careers</p>
            </div>
          </div>
          <div className='news_container_2'>
            <div className='news_title_2'>
              LATEST NEWS & POSTS
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
