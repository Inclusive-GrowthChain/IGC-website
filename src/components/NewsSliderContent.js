import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { ReactComponent as Img_1 } from '../assets/home_img/1.svg';
import { ReactComponent as Img_2 } from '../assets/home_img/6.svg';
import hackathon_img from '../assets/home_img/hackathon.jpg';
import hackathon2_img from '../assets/home_img/hackathon2.jpg';
import partners_img from '../assets/home_img/Partners/partners.png';
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
import home_img from '../assets/home_img/20943774.jpg';

import './css/home.css';

const NewsSliderContent = () => {
  var items = [
    {
      index: 1,
      item1: {
        date: '12/12/2021',
        title: 'Hackathon 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.thehindubusinessline.com/economy/agri-business/samunnati-university-of-hyderabad-to-rope-in-fpos/article36110692.ece',
      },
      item2: {
        date: '12/12/2021',
        title: 'Hackathon 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://telanganatoday.com/uoh-samunnati-tie-up-for-agri-blockchain-platform',
      },
      item3: {
        date: '12/12/2021',
        title: 'Hackathon 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.techcircle.in/2021/08/26/samunnati-to-back-university-of-hyderabad-s-integrated-agri-blockchain-platform/',
      },
    },
    {
      index: 2,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.edexlive.com/happening/2021/sep/01/team-of-researchers-from-uoh-developed-first-of-its-kind-blockchain-platform-to-aid-farmers-23689.html',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 5',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.en.krishakjagat.org/seed-industry/samunnati-university-of-hyderabad-to-rope-in-fpos/',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 6',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.edexlive.com/news/2022/jan/07/uoh-and-dr-reddys-to-develop-blockchain-solutions-for-pharma-firms-26732.html',
      },
    },
    {
      index: 3,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 7',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://m.newsmeter.in/article/education/uoh-dr-reddys-to-develop-cold-chain-logistics-solutions-for-pharma-industry-689231',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 8',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.thehansindia.com/news/cities/hyderabad/university-of-hyderabad-dr-reddys-to-build-cold-chain-solutions-for-pharma-industry-723572',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 9',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.thehindubusinessline.com/companies/uoh-dr-reddys-join-hands-to-develop-blockchain-solutions-for-pharma-industry/article38150295.ece',
      },
    },
    {
      index: 4,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 10',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.bhaskar.com/local/jharkhand/dhanbad/news/iit-will-make-platform-for-lac-farmers-and-industries-efforts-will-be-made-to-increase-income-129094120.html',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 11',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://thelogicalindian.com/education/university-of-hyderabad-get-rs-1-crore-research-grant-to-develop-blockchain-platform-39310',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 12',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.deccanchronicle.com/education/151222/rs-1-cr-meity-grant-for-uoh-faculty.html',
      },
    },
    {
      index: 5,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 13',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.ndtv.com/education/uoh-receives-rs-1-crore-research-grant-from-ministry-of-electronics-and-information-technology',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 14',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://news.careers360.com/hyderabad-universitys-management-faculty-receive-rs-1-crore-grant-from-government',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 15',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://krishijagran.com/industry-news/samunnati-supports-integrated-agri-blockchain-in-partnership-with-university-of-hyderabad-seeds-and-synchrony/',
      },
    },
    {
      index: 6,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 16',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.thehansindia.com/news/cities/hyderabad/university-of-hyderabad-to-use-blockchain-tech-for-agri-solutions-653675',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 17',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://telanganatoday.com/rs-1-crore-research-grant-from-ministry-of-electronics-and-it-for-uoh-management-faculty',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 18',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.financialexpress.com/life/technology-bumper-harvests-blockchain-can-benefit-the-agricultural-ecosystem-2368148/',
      },
    },
    {
      index: 7,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 19',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.dailypioneer.com/2021/state-editions/iit-ism-dhanbad-to-bridge-gap-between-lac-farmers--industries.html',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 20',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://telanganatoday.com/igc-at-uoh-wins-international-blockchain-hackathon',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 21',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.edexlive.com/news/2022/apr/16/heres-how-this-uoh-backed-start-up-won-the-international-blockchain-hackathon-28345.html',
      },
    },
    {
      index: 8,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 22',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.indcareer.com/news/igc-at-uoh-wins-international-blockchain-hackathon/',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 23',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.siasat.com/hyderabad-uoh-faculty-get-rs-1-crore-research-grant-from-ministry-of-electronics-and-it-2479773/',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 24',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://eng.ruralvoice.in/technology-16/robot-assisted-tech-platform-to-help-a-million-farmers.html',
      },
    },
    {
      index: 9,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 25',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.newstap.in/education/rs-1-crore-central-grant-for-uoh-management-faculty-1452511',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 26',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.thehindubusinessline.com/economy/agri-business/blockchain-platform-targets-to-enrol-10-lakh-farmers/article66262153.ece',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 27',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.thehansindia.com/news/cities/hyderabad/igc-at-university-of-hyderabad-bags-international-blockchain-hackathon-738137',
      },
    },
    {
      index: 10,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 28',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.nasdaq.com/press-release/plugin-inclusive-growth-chain:-leveraging-smart-contracts-to-check-air-pollution-in',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 29',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.investing.com/news/cryptocurrency-news/plugin-inclusive-growth-chain-integrates-to-tackle-air-pollution-2836543',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 30',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://finance.yahoo.com/news/plugin-inclusive-growth-chain-leveraging-033400833.html',
      },
    },
    {
      index: 11,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 31',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://indtoday.com/uoh-samunnati-seeds-and-synchrony-support-integrated-agri-blockchain/',
      },
      item2: {
        date: '12/12/2022',
        title: 'Hackathon 32',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://timesofindia.indiatimes.com/city/hyderabad/synchrony-inks-moa-with-uoh-for-agri-project/articleshow/78921012.cms',
      },
      item3: {
        date: '12/12/2022',
        title: 'Hackathon 33',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://www.shiksha.com/news/college-university-of-hyderabad-gets-rs-1-crore-research-grant-from-ministry-of-electronics-it-blogId-110363',
      },
    },
    {
      index: 12,
      item1: {
        date: '12/12/2022',
        title: 'Hackathon 34',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam lorem, eget aliquam nisl nisl sit amet lorem.',
        link: 'https://indiaeducationdiary.in/synchrony-partners-with-university-of-hyderabad-uoh-to-help-develop-indias-first-blockchain-designed-to-provide-financial-assistance-to-farmers/',
      },
      item2: {
        date: '',
        title: '',
        desc: '',
        link: '',
      },
      item3: {
        date: '',
        title: '',
        desc: '',
        link: '',
      },
    },
  ]

  return (
    <Carousel height={'43.75rem'}>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <div className='home_news_card_container'>
      <div className='home_news_1'>
        <Card className='home_news_card'>
          <CardContent>
            <img
              src={home_img}
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
                  src={home_img}
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
                  src={home_img}
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

export default NewsSliderContent;