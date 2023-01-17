import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
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
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '@iconify/react';

import './css/home.css';

import home_img from '../assets/home_img/20943774.jpg';
import hc7_img_1 from '../assets/home_img/Partners/dlabs.jpg';
import hc7_img_2 from '../assets/home_img/Partners/IITD.jpg';
import hc7_img_3 from '../assets/home_img/Partners/Hawking.png';
import hc7_img_4 from '../assets/home_img/Partners/WaterInsight.jpg';
import hc7_img_5 from '../assets/home_img/Partners/DrReddys.png';
import hc7_img_6 from '../assets/home_img/Partners/eFresh.png';
import hc7_img_7 from '../assets/home_img/Partners/Samunnati.png';
import hc7_img_8 from '../assets/home_img/Partners/SecureKloud.png';
import hc7_img_9 from '../assets/home_img/Partners/suvik.png';
import about_img from '../assets/home_img/about2.png';

import HomeSliderContent from './HomeSliderContent';
import NewsSliderContent from './NewsSliderContent';
import Footer from './footer';

const Home = () => {
  const [showPlatformCard, setShowPlatformCard] = useState(1);
  const [showServiceCard, setShowServiceCard] = useState(1);

  return (
    <div className='home_main_container'>
      <HomeSliderContent />
      <div className='home_container_2'>
        <div className='tab_container'>
          <div className='tab_1'>
            <Card className={showPlatformCard === 1 ? 'platform_card_selected' : 'platform_card'} onClick={() => setShowPlatformCard(1)}>
              <CardContent>
                <div className='platform_card_icon_container'>
                  <FontAwesomeIcon icon={faCreditCard} className='platform_icon' />
                </div>
                <p className='platform_card_title'>
                  Fin-Tech
                </p>
                <p className='platform_card_desc'>
                  Disrupting Financial Services Industry to empower bottom of the pyramid population
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='tab_2'>
            <Card className={showPlatformCard === 2 ? 'platform_card_selected' : 'platform_card'} onClick={() => setShowPlatformCard(2)}>
              <CardContent>
                <div className='platform_card_icon_container'>
                  <FontAwesomeIcon icon={faSeedling} className='platform_icon' />
                  {/* <Icon icon="charm:plant-pot" className='platform_icon'/> */}
                </div>
                <p className='platform_card_title'>
                  Agri-Tech
                </p>
                <p className='platform_card_desc'>
                  Making markets work for small holder farmers
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='tab_3'>
            <Card className={showPlatformCard === 3 ? 'platform_card_selected' : 'platform_card'} onClick={() => setShowPlatformCard(3)}>
              <CardContent>
                <div className='platform_card_icon_container'>
                  {/* <FontAwesomeIcon icon={faHeartPulse} className='platform_icon' /> */}
                  <Icon icon="healthicons:health-outline" className='platform_icon' />
                </div>
                <p className='platform_card_title'>
                  Health Care
                </p>
                <p className='platform_card_desc'>
                  Protecting lives with timely data and information
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='tab_4'>
            <Card className={showPlatformCard === 4 ? 'platform_card_selected' : 'platform_card'} onClick={() => setShowPlatformCard(4)}>
              <CardContent>
                <div className='platform_card_icon_container'>
                  <FontAwesomeIcon icon={faPeopleRoof} className='platform_icon' />
                </div>
                <p className='platform_card_title'>
                  Citizen Science
                </p>
                <p className='platform_card_desc'>
                  Disruptive data aggregation models to empower ordinary citizens to make a better world
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='desc_container'>
          <div className='desc_title'>
            INDUSTRIES
          </div>
          <div className='desc_text'>
            {
              showPlatformCard === 1 && (
                <p>Fin-Tech for Inclusive Growth</p>
              )
            }
            {
              showPlatformCard === 2 && (
                <p>Farmer centric Agri-Tech for democratic distribution of wealth in agri-ecosystem</p>
              )
            }
            {
              showPlatformCard === 3 && (
                <p>Data that guide better health outcomes</p>
              )
            }
            {
              showPlatformCard === 4 && (
                <p>Disrupting data aggregation model for creating a better world</p>
              )
            }
          </div>
          {
            showPlatformCard === 1 && (
              <p className='desc_desc'>
                Inclusive Growth Chain did the first pilot in India, by using Blockchain technology, for onboarding poor farmers for financial inclusion and developing credit history for better access to finance.
              </p>
            )
          }
          {
            showPlatformCard === 2 && (
              <p className='desc_desc'>
                Inclusive Growth Chain partnered with IIT Dhanbad for creating India’s first blockchain, AI&ML platform for empowering tribal farmers in Jharkhand state by developing an integrated platform that onboards input suppliers, financial institutions, output customers for unleashing the value chain benefits and distributing higher dividends to famers, who are the central and most significant players of the whole ecosystem.
              </p>
            )
          }
          {
            showPlatformCard === 3 && (
              <p className='desc_desc'>
                Inclusive Growth Chain provides secured services to store health data on blockchain and provides real-time access through cutting edge IoT devices.
              </p>
            )
          }
          {
            showPlatformCard === 4 && (
              <p className='desc_desc'>
                Inclusive Growth Chain believes in the power of data and its aggregation. We strive to build models that ensure data ownership and its monetization lies with the data generators. Further, we believe ordinary citizens can play an important role in transforming societies by sourcing and supplying data on a secured blockchain platform.
              </p>
            )
          }
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
                6+
              </div>
              <div className='stat_secondLine'>
                Ongoing Projects
              </div>
            </div>
          </div>
          <div className='stat_2_container'>
            <div className='stat_2'>
              <div className='stat_firstLine'>
                5+
              </div>
              <div className='stat_secondLine'>
                Number of Clients
              </div>
            </div>
          </div>
          <div className='stat_3_container'>
            <div className='stat_3'>
              <div className='stat_firstLine'>
                100+
              </div>
              <div className='stat_secondLine'>
                Years of Combined Experience
              </div>
            </div>
          </div>
          <div className='stat_4_container'>
            <div className='stat_4'>
              <div className='stat_firstLine'>
                18
              </div>
              <div className='stat_secondLine'>
                Team Members
              </div>
            </div>
          </div>
          <div className='stat_5_container'>
            <div className='stat_5'>
              <div className='stat_firstLine'>
                6+
              </div>
              <div className='stat_secondLine'>
                Different Platforms Provided
              </div>
            </div>
          </div>
          <div className='stat_6_container'>
            <div className='stat_6'>
              <div className='stat_firstLine'>
                5+
              </div>
              <div className='stat_secondLine'>
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home_container_4'>
        <div className='service_container'>
          <div className='service_title'>
            SERVICES
          </div>
          <div className='service_text'>
            {
              showServiceCard === 1 && (
                <p>Smart Assistance for Empowerment Solutions</p>
              )
            }
            {
              showServiceCard === 2 && (
                <p>Governance, Transparency and Trust Solutions</p>
              )
            }
            {
              showServiceCard === 3 && (
                <p>Unleashing the Power of Data</p>
              )
            }
            {
              showServiceCard === 4 && (
                <p>Helping companies moving from Web 2.0 to Web 3.0 world</p>
              )
            }
          </div>
          {
            showServiceCard === 1 && (
              <p className='service_desc'>
                We use AI and ML for providing smart assistance to people the bottom end of the pyramid. They can create their own digital identity securely and engage with world for accessing resources.
              </p>
            )
          }
          {
            showServiceCard === 2 && (
              <p className='service_desc'>
                We provide, both permissioned and permissionless, blockchain enabled services for building trust and transparency between stakeholders in several business environments.
              </p>
            )
          }
          {
            showServiceCard === 3 && (
              <p className='service_desc'>
                We innovate by developing custom made IoT devices where reliable and real time data is critical for decision making. We integrate IoT devices seamlessly on blockchain platform.
              </p>
            )
          }
          {
            showServiceCard === 4 && (
              <p className='service_desc'>
                Our expertise helps in hand holding companies to unleash the opportunities of web3.0 ecosystem through diligent audit and digital transformation engagement
              </p>
            )
          }
          {/* <div className='learn_more_3'>
            <button className='learn_button'>
              LEARN MORE
            </button>
          </div> */}
        </div>
        <div className='service_card_container'>
          <div className='service_1'>
            <Card className={showServiceCard === 1 ? 'service_card_selected' : 'service_card'} onClick={() => setShowServiceCard(1)}>
              <CardContent>
                <div className='service_icon_container'>
                  <Icon icon="eos-icons:ai" className='service_icon' />
                </div>
                <p className='service_card_title'>
                  AI & ML
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='service_2'>
            <Card className={showServiceCard === 2 ? 'service_card_selected' : 'service_card'} onClick={() => setShowServiceCard(2)}>
              <CardContent>
                <div className='service_icon_container'>
                  <Icon icon="eos-icons:blockchain" className='service_icon' />
                </div>
                <p className='service_card_title'>
                  Blockchain
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='service_3'>
            <Card className={showServiceCard === 3 ? 'service_card_selected' : 'service_card'} onClick={() => setShowServiceCard(3)}>
              <CardContent>
                <div className='service_icon_container'>
                  <Icon icon="fluent:iot-20-regular" className='service_icon' />
                </div>
                <p className='service_card_title'>
                  IOT
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='service_4'>
            <Card className={showServiceCard === 4 ? 'service_card_selected' : 'service_card'} onClick={() => setShowServiceCard(4)}>
              <CardContent>
                <div className='service_icon_container'>
                  <FontAwesomeIcon icon={faTachographDigital} className='service_icon' />
                </div>
                <p className='service_card_title'>
                  Digital Transformation
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
            Inclusive Growth Chain is a technology platform provider for creating impact that leads to empowerment.
          </div>
          <p className='about_container_desc'>
            We are a startup, founded by renowned professors/scientists, incubated initially at the University of Hyderabad and later the Indian School of Business, Hyderabad.
          </p>
          <div className='learn_more_4'>
            <button className='learn_button'>
              <Link to={'./about'} className="learn_button_link">LEARN MORE</Link>
            </button>
          </div>
        </div>
        <div className='img_container_2'>
          <img
            src={about_img}
            alt='about_img'
            className='about_img'
          />
        </div>
      </div>
      <div className='home_container_7'>
        <div className='partners_title'>
          OUR PARTNERS
        </div>
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
              src={hc7_img_6}
              alt='hc7_img_6'
              className='hc7_img_6'
            />
          </div>
          <div className='hc7_col_2'>
            <img
              src={hc7_img_7}
              alt='hc7_img_7'
              className='hc7_img_7'
            />
          </div>
          <div className='hc7_col_3'>
            <img
              src={hc7_img_8}
              alt='hc7_img_8'
              className='hc7_img_8'
            />
          </div>
          <div className='hc7_col_4'>
            <img
              src={hc7_img_9}
              alt='hc7_img_9'
              className='hc7_img_9'
            />
          </div>
        </div>
      </div>
      <div className='home_container_8'>
        <div className='home_subscribe_icon_container'>
          <FontAwesomeIcon icon={faEnvelopeOpenText} className='home_subscribe_icon' />
        </div>
        <div className='home_subscribe_title'>
          Subscribe
        </div>
        <div className='home_subscribe_text'>
          Subscribe to our newsletter & stay updated
        </div>
        <div className='home_subscribe_input_container'>
          <input
            type='text'
            placeholder='Your email address'
            className='home_subscribe_input'
          />
          <button className='home_subscribe_button'>
            <FontAwesomeIcon icon={faPaperPlane} className='send_icon' />
          </button>
        </div>
      </div>
      <div className='home_container_9'>
        <div className='home_news_container'>
          <div className='home_news_title'>
            NEWS & MEDIA
          </div>
          <div className='home_news_text'>
            Recent News Posts
          </div>
          <NewsSliderContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
