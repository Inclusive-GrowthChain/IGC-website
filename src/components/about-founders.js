import React from 'react';

import './css/about_founders.css';

// import home_img from '../assets/home_img/20943774.jpg';
// import about_img from '../assets/home_img/about2.png';
import img_1 from '../assets/about_profiles/5.jpg';
import img_2 from '../assets/about_profiles/6.jpg';
// import Footer from './footer';

const AboutFounders = () => {

  return (
    <div className='about_founders_main_container'>
      <div className='about_founders_container_1'>
        <div className='afc1_title'>
          Meet the Founders
        </div>
        <div className='afc1_text'>
          Home &nbsp; {'>'}{'>'} &nbsp; Founders
        </div>
      </div>
      <div className='about_founders_container_2'>
        <div className='about_founders_content_container_2'>
          <div className='founder_container'>
            <div className='founder_img_container'>
              <img src={img_1} alt='founder' className='founder_img' />
            </div>
            <div className='founder_details'>
              <div className='founder_name'>
                Prof. Vijaya B Marisetty
              </div>
              <hr className='founder_line' />
              <div className='founder_social'>
                <a href='https://www.linkedin.com/in/vijaya-marisetty-689988179/' target='_blank' rel="noreferrer">Vijaya Marisetty | LinkedIn</a>
              </div>
              <div className='founder_text'>
                Professor. Marisetty has 25 years of work experience as a faculty member at Monash University, Australia, Indian Institute of Management, Bangalore, India, RMIT University, Australia, Indian School of Business, Hyderabad, India, University of Hyderabad, India and University of Twente, Netherlands. He has received several best paper awards in international conferences and journals. He is the recipient of <b>Peter Brownell Manuscript Award</b> from the Accounting and Finance Association of Australia and New Zealand <b>(AFAANZ); Chartered Financial Analysts Institute (CFA, USA) Best Paper Award; Citation of Excellence Award</b> from Emerald Publishers Group.
              </div>
              <div className='founder_text'>
                Since 2015 Prof. Marisetty focused on Blockchain research and attracted several research grants for implementing blockchain enabled solutions. He received several research grants relating to blockchain, finance and fintech from Ministry of Education, India; Ministry of Electronics and IT, India; Reserve Bank of India; Institute of Eminence grants, Government of India; Ministry of Corporate Affairs, Government of India; and New York University and National Stock Exchange research grant.  He implemented India’s first blockchain enabled platform to onboard farmers for financial inclusion. In partnership with Dr. Reddy’s Labs, he led a team to create Blockchain-IoT platform for improving cold chain logistics in the pharmaceuticals industry. Through citizen science initiative, he teamed up with Netherlands based water expert company, Water Insights, to create water quality monitoring devices and distribute to ordinary citizens for creating a Blockchain enabled data lake for disrupting data aggregation model and ensuring water quality suppliers will be directly incentivized by the consumers of the data.
              </div>
              <div className='founder_text'>
                Prof. Marisetty acted as a consultant for United Nations and World Bank funded projects. He is currently acting as a consultant to the Indian School of Business for building Blockchain- Metaverse enabled Digital Asset Lab.
              </div>
              <div className='founder_text'>
                Prof. Marisetty received PhD from Monash University and Post-Doc from Wharton Business School and Indian School of Business.
              </div>
            </div>
          </div>
          <div className='founder_container'>
            <div className='founder_img_container'>
              <img src={img_2} alt='founder' className='founder_img' style={{height: '400px'}}/>
            </div>
            <div className='founder_details'>
              <div className='founder_name'>
                Prof. Varsha Mamidi
              </div>
              <hr className='founder_line' />
              <div className='founder_social'>
                <a href='https://www.linkedin.com/in/varsha-mamidi-13865328/' target='_blank' rel="noreferrer">Varsha Mamidi | LinkedIn</a>
              </div>
              <div className='founder_text'>
                Professor. Varsha Mamidi has spent around 18 years in the IT industry before joining as a machine learning and analytics professor at the University of Hyderabad. She worked in Hewlitt-Packard, Telstra, Coles-Myer, Tanla Solutions and Causeway UK in various capacities, ranging from software developer to country delivery head. She is a certified Project Management Professional from PMP, USA. She is the recipient of an award from Telstra for creating algorithms for fraud detection in mobile retail networks in Australia.
              </div>
              <div className='founder_text'>
                Prof. Mamidi’s research focuses on machine learning models for mapping hidden data and Natural Language Processing(NLP). She has led teams using NLP models to provide better communication networks with people at the bottom end of the pyramid. She is currently managing several projects that integrate machine learning with Blockchain technology. She is developing robo-advising tools to engage with farmers in Jharkhand state, India in partnership with IIT Dhanbad. In partnership with Water Insights, Netherlands, she is leading a team to improve water quality measurement through computer vision. She led teams and won Blockchain Hackathons organized by Plugin,  Dubai and NPCI, India.
              </div>
              <div className='founder_text'>
                Prof. Mamidi earned PhD from School of Information Technology, Monash University, Australia.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFounders;
