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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

import './css/contact.css';

import home_img from '../assets/home_img/20943774.jpg';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const position = [52.26055967532952, 6.808795326260226];
  const position2 = [17.438290505669446, 78.33938473680966];
  const centerPosition = [34.8494, 42.5741];

  return (
    <div className='contact_main_container'>
      <div className='contact_container_1'>
        <div className='cc1_title'>
          Contact Us
        </div>
        <div className='cc1_text'>
          Home &nbsp; {'>'}{'>'} &nbsp; Contact
        </div>
      </div>
      <div className='contact_container_2'>
        <div className='contact_card_container'>
          <div className='contact_card_1'>
            <Card className='contact_contact_card'>
              <CardContent>
                <div className='contact_card_content'>
                  <div className='contact_card_icon_container'>
                    <FontAwesomeIcon icon={faMap} className='contact_card_icon' />
                  </div>
                  <div className='contact_card_text_container'>
                    <div className='contact_card_text_1'>
                      Netherlands Office
                    </div>
                    <div className='contact_card_text_2'>
                      62 Woltersweg, Hengelo, Netherlands, 7552DD
                    </div>
                    <div className='contact_card_text_3'>
                      Phone: +31-653987807
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='contact_card_2'>
            <Card className='contact_contact_card'>
              <CardContent>
                <div className='contact_card_content'>
                  <div className='contact_card_icon_container'>
                    <FontAwesomeIcon icon={faMap} className='contact_card_icon' />
                  </div>
                  <div className='contact_card_text_container'>
                    <div className='contact_card_text_1'>
                      India Office
                    </div>
                    <div className='contact_card_text_2'>
                      Dlabs, Indian School of Business, ISB Road,  Gachibowli, Hyderabad - 500111, India
                    </div>
                    <div className='contact_card_text_3'>
                      Phone: +91-9866896553
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='contact_container_3'>
        <div className='cc3_title'>
          Let's talk business
        </div>
        <div className='cc3_content_container'>
          <div className='contact_form_container'>
            <div className='contact_form_input_container'>
              <input type='text' placeholder='Your Name' className='contact_form_input' />
            </div>
            <div className='contact_form_input_container'>
              <input type='text' placeholder='Your Email' className='contact_form_input' />
            </div>
            <div className='contact_form_input_container'>
              <input type='text' placeholder='Subject' className='contact_form_input' />
            </div>
            <div className='contact_form_input_container'>
              <textarea placeholder='Message' className='contact_form_message'></textarea>
            </div>
            <div className='contact_form_submit'>
              Send Message
            </div>
          </div>
          <div className='contact_details_container'>
            <div className='contact_details_1_container'>
              <div className='contact_details_icon_container'>
                <FontAwesomeIcon icon={faPhone} className='contact_details_icon' />
              </div>
              <div className='contact_details_text_container'>
                <div className='contact_details_text_title'>
                  Phone Support
                </div>
                <div className='contact_details_text'>
                  +31-653987807
                </div>
                <div className='contact_details_text'>
                  +91-9866896553
                </div>
              </div>
            </div>
            <div className='contact_details_2_container'>
              <div className='contact_details_icon_container'>
                <FontAwesomeIcon icon={faEnvelope} className='contact_details_icon' />
              </div>
              <div className='contact_details_text_container'>
                <div className='contact_details_text_title'>
                  Email Us
                </div>
                <div className='contact_details_text'>
                  sampleemail1@gmail.com
                </div>
                <div className='contact_details_text'>
                  sampleemail2@gmail.com
                </div>
              </div>
            </div>
            <div className='contact_details_3_container'>
              <div className='contact_details_icon_container'>
                <FontAwesomeIcon icon={faShare} className='contact_details_icon' />
              </div>
              <div className='contact_details_text_container'>
                <div className='contact_details_text_title'>
                  Social Media
                </div>
                <div className='contact_details_social_icon_container'>
                  <FontAwesomeIcon icon={faFacebookF} className='contact_details_social_icon' />
                  <FontAwesomeIcon icon={faInstagram} className='contact_details_social_icon' />
                  <FontAwesomeIcon icon={faWhatsapp} className='contact_details_social_icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact_container_4'>
        <MapContainer center={centerPosition} zoom={2} scrollWheelZoom={false} className='contact_map'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            {/* <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
          </Marker>
          <Marker position={position2}>
            {/* <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
          </Marker>
        </MapContainer>
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

export default Contact;
