import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

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
import img_35 from '../assets/impact_stories_imgs/7.png';
import img_36 from '../assets/news_imgs/36.jpg';

import './css/home.css';

const NewsSliderContent = () => {

  // var news_items = [
  //   {
  //     index: 1,
  //     item1: {
  //       date: 'August 26, 2021',
  //       title: 'Samunnati, University of Hyderabad to rope in FPOs',
  //       desc: 'Farmers in Tamil Nadu, and their peers in other States, are about to soon taste the benefits of blockchain, artificial intelligence and machine learning solutions.',
  //       link: 'https://www.thehindubusinessline.com/economy/agri-business/samunnati-university-of-hyderabad-to-rope-in-fpos/article36110692.ece',
  //       image: img_1,
  //     },
  //     item2: {
  //       date: 'August 27, 2021',
  //       title: 'UoH, Samunnati tie up for agri blockchain platform',
  //       desc: ' Integrated agri blockchain developed by the University of Hyderabad with Synchrony IT as funding partner has got support from two more entities.',
  //       link: 'https://telanganatoday.com/uoh-samunnati-tie-up-for-agri-blockchain-platform',
  //       image: img_2,
  //     },
  //     item3: {
  //       date: 'September 01, 2021',
  //       title: 'This team of researchers from UoH has developed a first-of-its-kind Blockchain platform to aid farmers. We find out how it works',
  //       desc: 'Harnessing the hottest new tech in town these researchers have created a farmer-centric Blockchain ecosystem that aims to distribute value back to the farmers',
  //       link: 'https://www.edexlive.com/happening/2021/sep/01/team-of-researchers-from-uoh-developed-first-of-its-kind-blockchain-platform-to-aid-farmers-23689.html',
  //       image: img_4,
  //     },
  //   },
  //   {
  //     index: 2,
  //     item1: {
  //       date: 'January 07, 2022',
  //       title: "UoH and Dr Reddy's to develop blockchain solutions for pharma firms. Here's more about it",
  //       desc: 'This project is supported by the Institution of Eminence (IoE) entrepreneurial research grant of the University of Hyderabad ',
  //       link: 'https://www.edexlive.com/news/2022/jan/07/uoh-and-dr-reddys-to-develop-blockchain-solutions-for-pharma-firms-26732.html',
  //       image: img_6,
  //     },
  //     item2: {
  //       date: 'January 06, 2022',
  //       title: 'UoH, Dr Reddy’s join hands to develop blockchain solutions for pharma industry',
  //       desc: 'They are developing cold chain logistics solutions',
  //       link: 'https://www.thehindubusinessline.com/companies/uoh-dr-reddys-join-hands-to-develop-blockchain-solutions-for-pharma-industry/article38150295.ece',
  //       image: img_9,
  //     },
  //     item3: {
  //       date: '12/12/2022',
  //       title: 'Hackathon 10',
  //       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
  //       link: 'https://www.bhaskar.com/local/jharkhand/dhanbad/news/iit-will-make-platform-for-lac-farmers-and-industries-efforts-will-be-made-to-increase-income-129094120.html',
  //       image: home_img,
  //     },
  //   },
  //   {
  //     index: 3,
  //     item1: {
  //       date: 'December 15, 2022',
  //       title: 'Rs 1 cr MeitY grant for UoH faculty',
  //       desc: 'The ministry of electronics and IT, government of India, has sanctioned a competitive research grant of close to Rs 1 crore to Prof. Vijaya B. Marisetty and Dr Varsha Mamidi from the School of Management Studies, University of Hyderabad (UoH).',
  //       link: 'https://www.deccanchronicle.com/education/151222/rs-1-cr-meity-grant-for-uoh-faculty.html',
  //       image: img_12,
  //     },
  //     item2: {
  //       date: 'December 14, 2022',
  //       title: 'UoH Receives Rs 1 Crore Research Grant From Ministry of Electronics And Information Technology',
  //       desc: 'Around one million farmers across India to be on- board in blockchain platform with a robo-advising facility.',
  //       link: 'https://www.ndtv.com/education/uoh-receives-rs-1-crore-research-grant-from-ministry-of-electronics-and-information-technology',
  //       image: img_13,
  //     },
  //     item3: {
  //       date: 'December 14, 2022',
  //       title: 'Rs 1 crore Research Grant from Ministry of Electronics and IT for UoH Management Faculty',
  //       desc: 'The grant will help in developing a blockchain platform with a robo-advising facility for on-boarding of around 1 million farmers across India in the pilot phase.',
  //       link: 'https://telanganatoday.com/rs-1-crore-research-grant-from-ministry-of-electronics-and-it-for-uoh-management-faculty',
  //       image: img_17,
  //     },
  //   },
  //   {
  //     index: 4,
  //     item1: {
  //       date: 'November 15, 2021',
  //       title: 'Bumper Harvests: Blockchain can benefit the agricultural ecosystem',
  //       desc: 'This niche technology can be applied to simplify financial procedures, as well as to integrate all the stakeholders in the agri sector',
  //       link: 'https://www.financialexpress.com/life/technology-bumper-harvests-blockchain-can-benefit-the-agricultural-ecosystem-2368148/',
  //       image: img_18,
  //     },
  //     item2: {
  //       date: 'April 14, 2022',
  //       title: 'IGC at UoH wins International Blockchain Hackathon',
  //       desc: 'IGC aims at addressing social and environmental problems in India through Blockchain, Artificial Intelligence (AI) and Machine Learning',
  //       link: 'https://telanganatoday.com/igc-at-uoh-wins-international-blockchain-hackathon',
  //       image: img_20,
  //     },
  //     item3: {
  //       date: 'April 16, 2022',
  //       title: "Here's how this UoH-backed start-up won the International Blockchain Hackathon",
  //       desc: 'The team at Inclusive Growth Chain has tapped into Blockchain tech in order to make measuring air pollution accurate and tamper-proof',
  //       link: 'https://www.edexlive.com/news/2022/apr/16/heres-how-this-uoh-backed-start-up-won-the-international-blockchain-hackathon-28345.html',
  //       image: img_21,
  //     },
  //   },
  //   {
  //     index: 5,
  //     item1: {
  //       date: 'December 14, 2022',
  //       title: 'Pilot project. Blockchain platform targets to enrol 10 lakh farmers',
  //       desc: "UoH faculty’s pilot to onboard input suppliers, consumers, lenders on secure platform",
  //       link: 'https://www.thehindubusinessline.com/economy/agri-business/blockchain-platform-targets-to-enrol-10-lakh-farmers/article66262153.ece',
  //       image: img_26,
  //     },
  //     item2: {
  //       date: 'June 13, 2022',
  //       title: 'Plugin & Inclusive Growth Chain: Leveraging Smart Contracts to Check Air Pollution in Real-Time',
  //       desc: "Plugin and Inclusive Growth Chain have joined hands collectively to make technological implications, on a much-wished answer for today`s real-international problems.",
  //       link: 'https://www.nasdaq.com/press-release/plugin-inclusive-growth-chain:-leveraging-smart-contracts-to-check-air-pollution-in',
  //       image: home_img,
  //     },
  //     item3: {
  //       date: 'June 14, 2022',
  //       title: 'Plugin & Inclusive Growth Chain: Leveraging Smart Contracts to Check Air Pollution in Real-Time',
  //       desc: 'Through the Plugin---IGC partnership, the entities will work towards implementing the "Project Pollution Check".',
  //       link: 'https://finance.yahoo.com/news/plugin-inclusive-growth-chain-leveraging-033400833.html',
  //       image: home_img,
  //     },
  //   },
  //   {
  //     index: 6,
  //     item1: {
  //       date: 'October 29, 2020',
  //       title: 'Synchrony inks MoA with UoH for agri project',
  //       desc: "US-based consumer financial services player Synchrony has inked a Memorandum of Agreement (MoA) with the University of Hyderabad (UoH) to fund India's first disruptive blockchain project for providing financial services access to marginal farmers",
  //       link: "https://timesofindia.indiatimes.com/city/hyderabad/synchrony-inks-moa-with-uoh-for-agri-project/articleshow/78921012.cms",
  //       image: img_32,
  //     },
  //     item2: {
  //       date: '',
  //       title: '',
  //       desc: '',
  //       link: '',
  //       image: '',
  //     },
  //     item3: {
  //       date: '',
  //       title: '',
  //       desc: '',
  //       link: '',
  //       image: '',
  //     },
  //   },
  // ];

  const news_items = [
    {
      index: 1,
      item1: {
        date: 'January 07, 2022',
        title: "UoH and Dr Reddy's to develop blockchain solutions for pharma firms. Here's more about it",
        desc: 'This project is supported by the Institution of Eminence (IoE) entrepreneurial research grant of the University of Hyderabad ',
        link: 'https://www.edexlive.com/news/2022/jan/07/uoh-and-dr-reddys-to-develop-blockchain-solutions-for-pharma-firms-26732.html',
        image: img_6,
      },
      item2: {
        date: 'January 06, 2022',
        title: 'UoH, Dr Reddy’s join hands to develop blockchain solutions for pharma industry',
        desc: 'They are developing cold chain logistics solutions',
        link: 'https://www.thehindubusinessline.com/companies/uoh-dr-reddys-join-hands-to-develop-blockchain-solutions-for-pharma-industry/article38150295.ece',
        image: img_9,
      },
      item3: {
        date: '2021',
        title: 'लाह के किसानाें व उद्याेगों के लिए आईआईटी बनाएगा प्लेटफाॅर्म, आय बढ़ाने की हाेगी काेशिश',
        desc: 'देश में लाह (लाख) का सर्वाधिक उत्पादन झारखंड में हाेता है। भारत में करीब 16,352 टन लाह के उत्पादन में लगभग 8293 टन (54.6%) का याेगदान झारखंड का है। ',
        link: 'https://www.bhaskar.com/local/jharkhand/dhanbad/news/iit-will-make-platform-for-lac-farmers-and-industries-efforts-will-be-made-to-increase-income-129094120.html',
        image: img_36,
      },
    },
    {
      index: 2,
      item1: {
        date: 'June 13, 2022',
        title: 'Plugin & Inclusive Growth Chain: Leveraging Smart Contracts to Check Air Pollution in Real-Time',
        desc: "Plugin and Inclusive Growth Chain have joined hands collectively to make technological implications, on a much-wished answer for today`s real-international problems.",
        link: 'https://www.nasdaq.com/press-release/plugin-inclusive-growth-chain:-leveraging-smart-contracts-to-check-air-pollution-in',
        image: img_35,
      },
      item2: {
        date: 'June 14, 2022',
        title: 'Plugin & Inclusive Growth Chain: Leveraging Smart Contracts to Check Air Pollution in Real-Time',
        desc: 'Through the Plugin---IGC partnership, the entities will work towards implementing the "Project Pollution Check".',
        link: 'https://finance.yahoo.com/news/plugin-inclusive-growth-chain-leveraging-033400833.html',
        image: img_35,
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

  const responsive_news_items = [
    {
      index: 1,
      date: 'January 07, 2022',
      title: "UoH and Dr Reddy's to develop blockchain solutions for pharma firms. Here's more about it",
      desc: 'This project is supported by the Institution of Eminence (IoE) entrepreneurial research grant of the University of Hyderabad ',
      link: 'https://www.edexlive.com/news/2022/jan/07/uoh-and-dr-reddys-to-develop-blockchain-solutions-for-pharma-firms-26732.html',
      image: img_6,
    },
    {
      index: 2,
      date: 'January 06, 2022',
      title: 'UoH, Dr Reddy’s join hands to develop blockchain solutions for pharma industry',
      desc: 'They are developing cold chain logistics solutions',
      link: 'https://www.thehindubusinessline.com/companies/uoh-dr-reddys-join-hands-to-develop-blockchain-solutions-for-pharma-industry/article38150295.ece',
      image: img_9,
    },
    {
      index: 3,
      date: '2021',
      title: 'लाह के किसानाें व उद्याेगों के लिए आईआईटी बनाएगा प्लेटफाॅर्म, आय बढ़ाने की हाेगी काेशिश',
      desc: 'देश में लाह (लाख) का सर्वाधिक उत्पादन झारखंड में हाेता है। भारत में करीब 16,352 टन लाह के उत्पादन में लगभग 8293 टन (54.6%) का याेगदान झारखंड का है। ',
      link: 'https://www.bhaskar.com/local/jharkhand/dhanbad/news/iit-will-make-platform-for-lac-farmers-and-industries-efforts-will-be-made-to-increase-income-129094120.html',
      image: img_36,
    },
    {
      index: 4,
      date: 'June 13, 2022',
      title: 'Plugin & Inclusive Growth Chain: Leveraging Smart Contracts to Check Air Pollution in Real-Time',
      desc: "Plugin and Inclusive Growth Chain have joined hands collectively to make technological implications, on a much-wished answer for today`s real-international problems.",
      link: 'https://www.nasdaq.com/press-release/plugin-inclusive-growth-chain:-leveraging-smart-contracts-to-check-air-pollution-in',
      image: img_35,
    },
    {
      index: 5,
      date: 'June 14, 2022',
      title: 'Plugin & Inclusive Growth Chain: Leveraging Smart Contracts to Check Air Pollution in Real-Time',
      desc: 'Through the Plugin---IGC partnership, the entities will work towards implementing the "Project Pollution Check".',
      link: 'https://finance.yahoo.com/news/plugin-inclusive-growth-chain-leveraging-033400833.html',
      image: img_35,
    },
  ];

  return (
    <div>
      <Carousel className='carousel1' navButtonsAlwaysVisible={true}>
        {
          news_items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
      <Carousel className='carousel2' navButtonsAlwaysVisible={true}>
        {
          responsive_news_items.map((item, i) => <Item2 key={i} item={item} />)
        }
      </Carousel>
    </div>
  )
}

function Item(props) {
  return (
    <div className='home_news_card_container'>
      <div className='home_news_1'>
        <Card className='home_news_card'>
          <CardContent>
            <img
              src={props.item.item1.image}
              alt='home_img'
              className='home_news_card_img'
            />
            <p className="home_news_card_date">
              <FontAwesomeIcon icon={faCalendarCheck} className='home_news_icon' />
              {props.item.item1.date}
            </p>
            <p className='home_news_card_title'>
              {props.item.item1.title}
            </p>
            <p className='home_news_card_desc'>
              {props.item.item1.desc}
            </p>
            <div className='read_more'>
              <a href={props.item.item1.link} target="_blank">
                <button className='learn_button'>
                  Read More
                </button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
      {
        props.item.item2.title !== '' && (
          <div className='home_news_2'>
            <Card className='home_news_card'>
              <CardContent>
                <img
                  src={props.item.item2.image}
                  alt='home_img'
                  className='home_news_card_img'
                />
                <p className="home_news_card_date">
                  <FontAwesomeIcon icon={faCalendarCheck} className='home_news_icon' />
                  {props.item.item2.date}
                </p>
                <p className='home_news_card_title'>
                  {props.item.item2.title}
                </p>
                <p className='home_news_card_desc'>
                  {props.item.item2.desc}
                </p>
                <div className='read_more'>
                  <a href={props.item.item2.link} target="_blank">
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
        props.item.item3.title !== '' && (
          <div className='home_news_3'>
            <Card className='home_news_card'>
              <CardContent>
                <img
                  src={props.item.item3.image}
                  alt='home_img'
                  className='home_news_card_img'
                />
                <p className="home_news_card_date">
                  <FontAwesomeIcon icon={faCalendarCheck} className='home_news_icon' />
                  {props.item.item3.date}
                </p>
                <p className='home_news_card_title'>
                  {props.item.item3.title}
                </p>
                <p className='home_news_card_desc'>
                  {props.item.item3.desc}
                </p>
                <div className='read_more'>
                  <a href={props.item.item3.link} target="_blank">
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
}

function Item2(props) {
  return (
    <div className='home_news_card_container'>
      <div className='home_news_1'>
        <Card className='home_news_card'>
          <CardContent>
            <img
              src={props.item.image}
              alt='home_img'
              className='home_news_card_img'
            />
            <p className="home_news_card_date">
              <FontAwesomeIcon icon={faCalendarCheck} className='home_news_icon' />
              {props.item.date}
            </p>
            <p className='home_news_card_title'>
              {props.item.title}
            </p>
            <p className='home_news_card_desc'>
              {props.item.desc}
            </p>
            <div className='read_more'>
              <a href={props.item.link} target="_blank">
                <button className='learn_button'>
                  Read More
                </button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NewsSliderContent;