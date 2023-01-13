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
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './css/news.css';

import home_img from '../assets/home_img/20943774.jpg';

import img_1 from '../assets/news_imgs/1.jpeg';
import img_2 from '../assets/news_imgs/2.jpg';
// import img_3 from '../assets/news_imgs/3.jpg';
import img_4 from '../assets/news_imgs/4.jpg';
import img_5 from '../assets/news_imgs/5.jpg';
import img_6 from '../assets/news_imgs/6.jpg';
import img_7 from '../assets/news_imgs/7.jpeg';
import img_8 from '../assets/news_imgs/8.jpg';
import img_9 from '../assets/news_imgs/9.jpeg';
// import img_10 from '../assets/news_imgs/10.jpg';
import img_11 from '../assets/news_imgs/11.jpg';
import img_12 from '../assets/news_imgs/12.jpeg';
import img_13 from '../assets/news_imgs/13.jpg';
import img_14 from '../assets/news_imgs/14.jpg';
// import img_15 from '../assets/news_imgs/15.jpg';
import img_16 from '../assets/news_imgs/16.jpg';
import img_17 from '../assets/news_imgs/17.jpg';
import img_18 from '../assets/news_imgs/18.jpg';
// import img_19 from '../assets/news_imgs/19.jpg';
import img_20 from '../assets/news_imgs/20.jpg';
import img_21 from '../assets/news_imgs/21.jpg';
import img_25 from '../assets/news_imgs/25.jpg';
import img_26 from '../assets/news_imgs/26.jpg';
import img_27 from '../assets/news_imgs/27.jpg';
import img_31 from '../assets/news_imgs/31.jpg';
import img_32 from '../assets/news_imgs/32.png';
import img_33 from '../assets/news_imgs/33.jpeg';
import img_34 from '../assets/news_imgs/34.jpg';
import Footer from './footer';

var news_items = [
  {
    index: 1,
    item1: {
      date: 'August 26, 2021',
      title: 'Samunnati, University of Hyderabad to rope in FPOs',
      desc: 'Farmers in Tamil Nadu, and their peers in other States, are about to soon taste the benefits of blockchain, artificial intelligence and machine learning solutions.',
      link: 'https://www.thehindubusinessline.com/economy/agri-business/samunnati-university-of-hyderabad-to-rope-in-fpos/article36110692.ece',
      image: img_1,
    },
    item2: {
      date: 'August 27, 2021',
      title: 'UoH, Samunnati tie up for agri blockchain platform',
      desc: ' Integrated agri blockchain developed by the University of Hyderabad with Synchrony IT as funding partner has got support from two more entities.',
      link: 'https://telanganatoday.com/uoh-samunnati-tie-up-for-agri-blockchain-platform',
      image: img_2,
    },
    item3: {
      date: 'August 26, 2021',
      title: 'Samunnati to back University of Hyderabad’s integrated agri blockchain platform',
      desc: 'The programme, a statement said, is aimed at bringing the entire agri ecosystem, from farmers to financing experts, to a single platform.',
      link: 'https://www.techcircle.in/2021/08/26/samunnati-to-back-university-of-hyderabad-s-integrated-agri-blockchain-platform/',
      image: home_img,
    },
  },
  {
    index: 2,
    item1: {
      date: 'September 01, 2021',
      title: 'This team of researchers from UoH has developed a first-of-its-kind Blockchain platform to aid farmers. We find out how it works',
      desc: 'Harnessing the hottest new tech in town these researchers have created a farmer-centric Blockchain ecosystem that aims to distribute value back to the farmers',
      link: 'https://www.edexlive.com/happening/2021/sep/01/team-of-researchers-from-uoh-developed-first-of-its-kind-blockchain-platform-to-aid-farmers-23689.html',
      image: img_4,
    },
    item2: {
      date: 'August 27, 2021',
      title: 'Samunnati, University of Hyderabad to rope in FPOs',
      desc: 'Samunnati, a Chennai-based organisation which works with Farmer Producer Organisations (FPOs) and other players in the agri ecosystem, has joined hands with the University of Hyderabad to introduce these deep technologies that promise to reduce operational inefficiencies.',
      link: 'https://www.en.krishakjagat.org/seed-industry/samunnati-university-of-hyderabad-to-rope-in-fpos/',
      image: img_5,
    },
    item3: {
      date: 'January 07, 2022',
      title: "UoH and Dr Reddy's to develop blockchain solutions for pharma firms. Here's more about it",
      desc: 'This project is supported by the Institution of Eminence (IoE) entrepreneurial research grant of the University of Hyderabad ',
      link: 'https://www.edexlive.com/news/2022/jan/07/uoh-and-dr-reddys-to-develop-blockchain-solutions-for-pharma-firms-26732.html',
      image: img_6,
    },
  },
  {
    index: 3,
    item1: {
      date: 'January 06, 2022',
      title: "UoH, Dr. Reddy's to develop cold chain logistics solutions for pharma industry",
      desc: "Two professors of the University of Hyderabad (UoH) will lead a project in partnership with the pharma company, Dr. Reddy's Laboratories, to develop cold chain logistics solutions for pharmaceutical firms.",
      link: 'https://m.newsmeter.in/article/education/uoh-dr-reddys-to-develop-cold-chain-logistics-solutions-for-pharma-industry-689231',
      image: img_7,
    },
    item2: {
      date: 'January 07, 2022',
      title: "University of Hyderabad, Dr Reddy's to build cold chain solutions for pharma industry",
      desc: "Prof Vijaya Bhaskar Marisetty and Dr Varsha Mamidi, School of Management Studies, University of Hyderabad (UoH), will lead a project, in partnership with Dr Reddy’s Laboratories, for developing cold chain logistics solutions for pharmaceutical firms.",
      link: 'https://www.thehansindia.com/news/cities/hyderabad/university-of-hyderabad-dr-reddys-to-build-cold-chain-solutions-for-pharma-industry-723572',
      image: img_8,
    },
    item3: {
      date: 'January 06, 2022',
      title: 'UoH, Dr Reddy’s join hands to develop blockchain solutions for pharma industry',
      desc: 'They are developing cold chain logistics solutions',
      link: 'https://www.thehindubusinessline.com/companies/uoh-dr-reddys-join-hands-to-develop-blockchain-solutions-for-pharma-industry/article38150295.ece',
      image: img_9,
    },
  },
  {
    index: 4,
    item1: {
      date: '12/12/2022',
      title: 'Hackathon 10',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
      link: 'https://www.bhaskar.com/local/jharkhand/dhanbad/news/iit-will-make-platform-for-lac-farmers-and-industries-efforts-will-be-made-to-increase-income-129094120.html',
      image: home_img,
    },
    item2: {
      date: 'December 17, 2022',
      title: 'Hyderabad: UoH Gets Rs 1 Crore Research Grant From MeitY To Develop Blockchain Platform, Benefit Farmers',
      desc: "The grant will assist the University Of Hyderabad in creating a blockchain platform with a robot-advising feature for the pilot phase's onboarding of about one million farmers throughout India.",
      link: 'https://thelogicalindian.com/education/university-of-hyderabad-get-rs-1-crore-research-grant-to-develop-blockchain-platform-39310',
      image: img_11,
    },
    item3: {
      date: 'December 15, 2022',
      title: 'Rs 1 cr MeitY grant for UoH faculty',
      desc: 'The ministry of electronics and IT, government of India, has sanctioned a competitive research grant of close to Rs 1 crore to Prof. Vijaya B. Marisetty and Dr Varsha Mamidi from the School of Management Studies, University of Hyderabad (UoH).',
      link: 'https://www.deccanchronicle.com/education/151222/rs-1-cr-meity-grant-for-uoh-faculty.html',
      image: img_12,
    },
  },
  {
    index: 5,
    item1: {
      date: 'December 14, 2022',
      title: 'UoH Receives Rs 1 Crore Research Grant From Ministry of Electronics And Information Technology',
      desc: 'Around one million farmers across India to be on- board in blockchain platform with a robo-advising facility.',
      link: 'https://www.ndtv.com/education/uoh-receives-rs-1-crore-research-grant-from-ministry-of-electronics-and-information-technology',
      image: img_13,
    },
    item2: {
      date: 'December 14, 2022',
      title: 'Around one million farmers across India to be on- board in blockchain platform with a robo-advising facility.',
      desc: 'The management faculty from the University of Hyderabad (UoH) receives a Rs 1 crore competitive research grant close to Rs 1 crore from the ministry of electronics and information technology (IT).',
      link: 'https://news.careers360.com/hyderabad-universitys-management-faculty-receive-rs-1-crore-grant-from-government',
      image: img_14,
    },
    item3: {
      date: 'January 18, 2022',
      title: 'Samunnati Supports Integrated Agri Blockchain in Partnership with University of Hyderabad, SEEDS and Synchrony',
      desc: 'Samunnati, an agri value chain enabler has announced its support to the Integrated Agri Blockchain platform created by University of Hyderabad team with Synchrony IT as the funding partner and Social Education Economical Development Society (SEEDS) as the deployment partner',
      link: 'https://krishijagran.com/industry-news/samunnati-supports-integrated-agri-blockchain-in-partnership-with-university-of-hyderabad-seeds-and-synchrony/',
      image: home_img,
    },
  },
  {
    index: 6,
    item1: {
      date: 'October 30, 2020',
      title: 'University of Hyderabad to use blockchain tech for agri solutions',
      desc: "Synchrony, a premier consumer financial services company, has signed a Memorandum of Agreement (MoA) with the University of Hyderabad (UoH) to help fund India's first blockchain project for providing financial services to farmers in need",
      link: 'https://www.thehansindia.com/news/cities/hyderabad/university-of-hyderabad-to-use-blockchain-tech-for-agri-solutions-653675',
      image: img_16,
    },
    item2: {
      date: 'December 14, 2022',
      title: 'Rs 1 crore Research Grant from Ministry of Electronics and IT for UoH Management Faculty',
      desc: 'The grant will help in developing a blockchain platform with a robo-advising facility for on-boarding of around 1 million farmers across India in the pilot phase.',
      link: 'https://telanganatoday.com/rs-1-crore-research-grant-from-ministry-of-electronics-and-it-for-uoh-management-faculty',
      image: img_17,
    },
    item3: {
      date: 'November 15, 2021',
      title: 'Bumper Harvests: Blockchain can benefit the agricultural ecosystem',
      desc: 'This niche technology can be applied to simplify financial procedures, as well as to integrate all the stakeholders in the agri sector',
      link: 'https://www.financialexpress.com/life/technology-bumper-harvests-blockchain-can-benefit-the-agricultural-ecosystem-2368148/',
      image: img_18,
    },
  },
  {
    index: 7,
    item1: {
      date: 'November 08, 2021',
      title: 'IIT-ISM Dhanbad to bridge gap between lac farmers, industries',
      desc: 'In a move to provide employment to the youths of the State, the Indian Institute of Technology (IIT) ISM Dhanbad is preparing a new platform for lac farmers. Such blockchain technology is being developed where farmers and industry will come together on one platform.',
      link: 'https://www.dailypioneer.com/2021/state-editions/iit-ism-dhanbad-to-bridge-gap-between-lac-farmers--industries.html',
      image: home_img,
    },
    item2: {
      date: 'April 14, 2022',
      title: 'IGC at UoH wins International Blockchain Hackathon',
      desc: 'IGC aims at addressing social and environmental problems in India through Blockchain, Artificial Intelligence (AI) and Machine Learning',
      link: 'https://telanganatoday.com/igc-at-uoh-wins-international-blockchain-hackathon',
      image: img_20,
    },
    item3: {
      date: 'April 16, 2022',
      title: "Here's how this UoH-backed start-up won the International Blockchain Hackathon",
      desc: 'The team at Inclusive Growth Chain has tapped into Blockchain tech in order to make measuring air pollution accurate and tamper-proof',
      link: 'https://www.edexlive.com/news/2022/apr/16/heres-how-this-uoh-backed-start-up-won-the-international-blockchain-hackathon-28345.html',
      image: img_21,
    },
  },
  {
    index: 8,
    item1: {
      date: 'April 12, 2022',
      title: 'IGC at UoH wins International Blockchain Hackathon',
      desc: 'Inclusive Growth Chain (IGC), a start-up incubated in the University of Hyderabad (UoH) by the Faculty of the School of Management Studies, Prof. Vijaya Bhaskar Marisetty and Dr. Varsha Mamidi, has won the international blockchain hackathon.',
      link: 'https://www.indcareer.com/news/igc-at-uoh-wins-international-blockchain-hackathon/',
      image: img_20,
    },
    item2: {
      date: 'December 14, 2022',
      title: 'Hyderabad: UoH faculty get Rs 1 crore research grant from Ministry of Electronics and IT',
      desc: 'The grant will help in developing a blockchain platform with a robo-advising facility for on-boarding of around 1 million farmers across India in the pilot phase.',
      link: 'https://www.siasat.com/hyderabad-uoh-faculty-get-rs-1-crore-research-grant-from-ministry-of-electronics-and-it-2479773/',
      image: img_17,
    },
    item3: {
      date: 'December 19, 2022',
      title: 'Robot-assisted tech platform to help a million farmers',
      desc: 'The University of Hyderabad (UoH) has got a grant of Rs 1 crore from the Union Ministry of Electronics and Information Technology (MeitY) for the project. Prof. Vijaya B Marisetty and Dr Varsha Mamidi from the School of Management Studies will be leading the effort to develop the pilot phase of the blockchain platform.',
      link: 'https://eng.ruralvoice.in/technology-16/robot-assisted-tech-platform-to-help-a-million-farmers.html',
      image: img_17,
    },
  },
  {
    index: 9,
    item1: {
      date: 'December 14, 2022',
      title: 'Rs 1-crore central grant for UoH management faculty',
      desc: 'Professors from the school of management studies, UoH were sanctioned a competitive research grant of close to Rs 1 crore by the Ministry of Electronics, GOI',
      link: 'https://www.newstap.in/education/rs-1-crore-central-grant-for-uoh-management-faculty-1452511',
      image: img_25,
    },
    item2: {
      date: 'December 14, 2022',
      title: 'Pilot project. Blockchain platform targets to enrol 10 lakh farmers',
      desc: "UoH faculty’s pilot to onboard input suppliers, consumers, lenders on secure platform",
      link: 'https://www.thehindubusinessline.com/economy/agri-business/blockchain-platform-targets-to-enrol-10-lakh-farmers/article66262153.ece',
      image: img_26,
    },
    item3: {
      date: 'April 15, 2022',
      title: 'IGC at University of Hyderabad bags International Blockchain Hackathon',
      desc: 'Inclusive Growth Chain (IGC), a start-up incubated in the University of Hyderabad (UoH) by the Faculty of the School of Management Studies, Prof Vijaya Bhaskar Marisetty and D. Varsha Mamidi won the international blockchain hackathon.',
      link: 'https://www.thehansindia.com/news/cities/hyderabad/igc-at-university-of-hyderabad-bags-international-blockchain-hackathon-738137',
      image: img_27,
    },
  },
  {
    index: 10,
    item1: {
      date: 'June 13, 2022',
      title: 'Plugin & Inclusive Growth Chain: Leveraging Smart Contracts to Check Air Pollution in Real-Time',
      desc: "Plugin and Inclusive Growth Chain have joined hands collectively to make technological implications, on a much-wished answer for today`s real-international problems.",
      link: 'https://www.nasdaq.com/press-release/plugin-inclusive-growth-chain:-leveraging-smart-contracts-to-check-air-pollution-in',
      image: home_img,
    },
    item2: {
      date: '12/12/2022',
      title: 'Hackathon 29',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
      link: 'https://www.investing.com/news/cryptocurrency-news/plugin-inclusive-growth-chain-integrates-to-tackle-air-pollution-2836543',
      image: home_img,
    },
    item3: {
      date: 'June 14, 2022',
      title: 'Plugin & Inclusive Growth Chain: Leveraging Smart Contracts to Check Air Pollution in Real-Time',
      desc: 'Through the Plugin---IGC partnership, the entities will work towards implementing the "Project Pollution Check".',
      link: 'https://finance.yahoo.com/news/plugin-inclusive-growth-chain-leveraging-033400833.html',
      image: home_img,
    },
  },
  {
    index: 11,
    item1: {
      date: 'August 27, 2021',
      title: 'UoH, Samunnati, SEEDS And Synchrony Support Integrated Agri-Blockchain',
      desc: 'The University of Hyderabad (UoH) in partnership with Samunnati has announced its support for the Integrated Agri Blockchain platform.',
      link: 'https://indtoday.com/uoh-samunnati-seeds-and-synchrony-support-integrated-agri-blockchain/',
      image: img_31,
    },
    item2: {
      date: 'October 29, 2020',
      title: 'Synchrony inks MoA with UoH for agri project',
      desc: "US-based consumer financial services player Synchrony has inked a Memorandum of Agreement (MoA) with the University of Hyderabad (UoH) to fund India's first disruptive blockchain project for providing financial services access to marginal farmers",
      link: "https://timesofindia.indiatimes.com/city/hyderabad/synchrony-inks-moa-with-uoh-for-agri-project/articleshow/78921012.cms",
      image: img_32,
    },
    item3: {
      date: 'December 15, 2022',
      title: 'University of Hyderabad gets Rs 1 crore Research Grant from Ministry of Electronics & IT',
      desc: 'The grant will help in developing a blockchain platform with a robot-advising facility for the onboarding of around one million farmers across India in the pilot phase. The platform enables farm-producing organisations to engage with farming ecosystem players, including, lenders, input suppliers and output customers.',
      link: 'https://www.shiksha.com/news/college-university-of-hyderabad-gets-rs-1-crore-research-grant-from-ministry-of-electronics-it-blogId-110363',
      image: img_33,
    },
  },
  {
    index: 12,
    item1: {
      date: 'October 28, 2020',
      title: 'Synchrony Partners With University Of Hyderabad (UoH) To Help Develop India’s First Blockchain Designed To Provide Financial Assistance To Farmers',
      desc: 'This blockchain project can bring all the parties together – from farmers to financing experts in the supply chain together to simplify the exchange of information and payments.',
      link: 'https://indiaeducationdiary.in/synchrony-partners-with-university-of-hyderabad-uoh-to-help-develop-indias-first-blockchain-designed-to-provide-financial-assistance-to-farmers/',
      image: img_34,
    },
    item2: {
      date: '',
      title: '',
      desc: '',
      link: '',
      image: '',
    },
    item3: {
      date: '',
      title: '',
      desc: '',
      link: '',
      image: '',
    },
  },
];

const News = () => {

  return (
    <div className='news_main_container'>
      <div className='news_container_1'>
        <div className='nc1_title'>
          News
        </div>
        <div className='nc1_text'>
          Home &nbsp; {'>'}{'>'} &nbsp; News
        </div>
      </div>
      <div className='news_container_2'>
        {
          news_items.map((item) => {
            return (
              <div className='news_card_container'>
                <div className='news_card_1'>
                  <Card className='news_card'>
                    <CardContent>
                      <img
                        src={item.item1.image}
                        alt='home_img'
                        className='news_card_img'
                      />
                      <p className="news_card_date">
                        <FontAwesomeIcon icon={faCalendarCheck} className='news_icon' />
                        {item.item1.date}
                      </p>
                      <p className='news_card_title'>
                        {item.item1.title}
                      </p>
                      <p className='news_card_desc'>
                        {item.item1.desc}
                      </p>
                      <div className='read_more'>
                        <a href={item.item1.link} target="_blank">
                          <button className='learn_button'>
                            Read More
                          </button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {
                  item.item2.title !== '' && (
                    <div className='news_card_2'>
                      <Card className='news_card'>
                        <CardContent>
                          <img
                            src={item.item2.image}
                            alt='home_img'
                            className='news_card_img'
                          />
                          <p className="news_card_date">
                            <FontAwesomeIcon icon={faCalendarCheck} className='home_news_icon' />
                            {item.item2.date}
                          </p>
                          <p className='news_card_title'>
                            {item.item2.title}
                          </p>
                          <p className='news_card_desc'>
                            {item.item2.desc}
                          </p>
                          <div className='read_more'>
                            <a href={item.item2.link} target="_blank">
                              <button className='learn_button'>
                                Read More
                              </button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                }
                {
                  item.item3.title !== '' && (
                    <div className='news_card_3'>
                      <Card className='news_card'>
                        <CardContent>
                          <img
                            src={item.item3.image}
                            alt='home_img'
                            className='news_card_img'
                          />
                          <p className="news_card_date">
                            <FontAwesomeIcon icon={faCalendarCheck} className='home_news_icon' />
                            {item.item3.date}
                          </p>
                          <p className='news_card_title'>
                            {item.item3.title}
                          </p>
                          <p className='news_card_desc'>
                            {item.item3.desc}
                          </p>
                          <div className='read_more'>
                            <a href={item.item3.link} target="_blank">
                              <button className='learn_button'>
                                Read More
                              </button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                }
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default News;
