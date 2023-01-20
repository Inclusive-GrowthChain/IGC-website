import React, { useRef, useState } from 'react';
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
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import './css/contact.css';

import home_img from '../assets/home_img/20943774.jpg';
import Footer from './footer';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const position = [52.26055967532952, 6.808795326260226];
  const position2 = [17.438290505669446, 78.33938473680966];
  const centerPosition = [34.8494, 42.5741];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(name === '' || email === '' || subject === '' || message === '') {
      console.log(name);
      console.log(email);
      console.log(subject);
      console.log(message);
      alert('Please fill all the fields');
      return;
    }

    emailjs.sendForm('service_hfliw7t', 'template_7jsaez6', form.current, 'xd5CsNE-A5KPC31kJ')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully');
      }, (error) => {
          console.log(error.text);
          alert('Something went wrong. Please try again later.');
      });

    e.target.reset();
  };

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
                      India Office
                    </div>
                    <div className='contact_card_text_2'>
                      Twinsset Pvt. Ltd.
                    </div>
                    <div className='contact_card_text_2'>
                      DLabs, Indian School of Business, ISB Road,  Gachibowli, Hyderabad - 500111, India
                    </div>
                    <div className='contact_card_text_3'>
                      Phone: +91-9866896553
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
        </div>
      </div>
      <div className='contact_container_3'>
        <div className='cc3_title'>
          Let's talk business
        </div>
        <div className='cc3_content_container'>
          {/* <div className='contact_form_container'> */}
            {/* <div className='contact_form_input_container'>
              <input type='text' placeholder='Your Name' className='contact_form_input' onChange={(e) => onChangeName(e)} />
            </div>
            <div className='contact_form_input_container'>
              <input type='text' placeholder='Your Email' className='contact_form_input' onChange={(e) => onChangeEmail(e)} />
            </div>
            <div className='contact_form_input_container'>
              <input type='text' placeholder='Subject' className='contact_form_input' onChange={(e) => onChangeSubject(e)} />
            </div>
            <div className='contact_form_input_container'>
              <textarea placeholder='Message' className='contact_form_message' onChange={(e) => onChangeMessage(e)}></textarea>
            </div>
            <div className='contact_form_submit' onClick={(e) => sendEmail(e)}>
              Send Message
            </div> */}
            <form ref={form} onSubmit={sendEmail} className='contact_form'>
              <div className='contact_form_input_container'>
                <input type='text' placeholder='Your Name' className='contact_form_input' name='user_name' onChange={(e) => onChangeName(e)}/>
              </div>
              <div className='contact_form_input_container'>
                <input type='text' placeholder='Your Email' className='contact_form_input' name='user_email' onChange={(e) => onChangeEmail(e)}/>
              </div>
              <div className='contact_form_input_container'>
                <input type='text' placeholder='Subject' className='contact_form_input' name='subject' onChange={(e) => onChangeSubject(e)}/>
              </div>
              <div className='contact_form_input_container'>
                <textarea placeholder='Message' className='contact_form_message' name='message' onChange={(e) => onChangeMessage(e)} />
              </div>
              <div className='contact_form_submit_container'>
                <input type='submit' value='Send Message' className='contact_form_submit'/>
              </div>
            </form>
          {/* </div> */}
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
                  admin@inclusivegrowthchain.com
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
                  <a href='https://www.linkedin.com/company/twinsset/' target='_blank' className='contact_details_social_link'>
                    <FontAwesomeIcon icon={faLinkedin} className='contact_details_social_icon' />
                  </a>
                  <FontAwesomeIcon icon={faTwitter} className='contact_details_social_icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact_container_4'>
        <MapContainer center={centerPosition} zoom={4} scrollWheelZoom={false} className='contact_map_1'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              62 Woltersweg, Hengelo, Netherlands, 7552DD
            </Popup>
          </Marker>
          <Marker position={position2}>
            <Popup>
              DLabs, Indian School of Business, ISB Road,  Gachibowli, Hyderabad
            </Popup>
          </Marker>
        </MapContainer>
        <MapContainer center={centerPosition} zoom={2} scrollWheelZoom={false} className='contact_map_2'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              62 Woltersweg, Hengelo, Netherlands, 7552DD
            </Popup>
          </Marker>
          <Marker position={position2}>
            <Popup>
              Dlabs, Indian School of Business, ISB Road,  Gachibowli, Hyderabad
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Contact;
