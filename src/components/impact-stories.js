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
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '@mui/material';

import './css/impact_stories.css';

import home_img from '../assets/home_img/20943774.jpg';
import img_1 from '../assets/impact_stories_imgs/1.png';
import img_2 from '../assets/impact_stories_imgs/2.png';
import img_3 from '../assets/impact_stories_imgs/3.png';
import img_4 from '../assets/impact_stories_imgs/4.png';
import img_5 from '../assets/impact_stories_imgs/5.png';
import img_6 from '../assets/impact_stories_imgs/6.png';
import img_7 from '../assets/impact_stories_imgs/7.png';
import img_8 from '../assets/impact_stories_imgs/8.png';
import img_9 from '../assets/impact_stories_imgs/9.png';
import img_10 from '../assets/impact_stories_imgs/10.png';
import img_11 from '../assets/impact_stories_imgs/11.jpg';
import img_12 from '../assets/impact_stories_imgs/12.jpg';
import img_23 from '../assets/impact_stories_imgs/23.jpg';
import img_14 from '../assets/impact_stories_imgs/14.jpg';
import img_15 from '../assets/impact_stories_imgs/15.jpg';
import img_16 from '../assets/impact_stories_imgs/16.jpg';
import img_17 from '../assets/impact_stories_imgs/17.png';
import img_18 from '../assets/impact_stories_imgs/18.png';
import img_19 from '../assets/impact_stories_imgs/19.jpg';
import img_20 from '../assets/impact_stories_imgs/20.png';
import img_21 from '../assets/impact_stories_imgs/21.png';
import img_22 from '../assets/impact_stories_imgs/22.png';

import Footer from './footer';
import { Box } from '@mui/system';

const impact_stories_items = [
  {
    index: 1,
    title: "Building Farming Ecosystem with Blockchain for Empowering Farmers",
    issue: [
      "A large population in Jharkhand is completely dependent on agriculture and allied activities. In particular, Lac cultivation forms a major source of income for tribal farmers in Jharkhand. Among the top ten lac producing districts, five of them are in Jharkhand with the highest produce seen from Ranchi (Jharkhand) followed by Simdega (Jharkhand) in 2015-16 and 2016-17. ",
      "A large percent of the farmers are small and marginalized and sell raw lac without adding any value. The prime reason for this is lack of finance; due to the unorganized sector and lack of bargaining power, only fewer credit facilities are available to the farmers and at a very high cost. Due to the high cost of borrowing, farmers have little profits to contribute towards the development of infrastructure, scaling up their production output and so on. This leaves them financially much worse and exposing them to the risk of external threats. Problem of lack of marketing infrastructure, exploitation by middlemen is prevalent for lac cultivators. ",
      "Collectivization of producers, especially small and marginal farmers, into producer organisations has emerged as one of the most effective pathways to address the many challenges of agriculture but most importantly, improved access to investments, technology and inputs and markets. Department of Agriculture and Cooperation, Ministry of Agriculture, Govt. of India has framed a National Policy for the promotion of Farmers Producers Organizations.",
      "The main objective of FPO’s (Farmer Producer Organisations) is to organize farmers into a collective and improve their bargaining power in the market. In particular, reduction of cost of borrowing, providing market linkages and overall well-being of the farmers. However, mere aggregation will not yield desired results unless the demand side and supply side problems are addressed. On the demand side, farmers would like to have access to timely finance with lower rates of borrowing. On the supply side, lenders require more information to assess the default risk of the farmers and thereby reduce their information asymmetry problem.",
    ],
    solution: [
      "Our Project aims to reduce the frictions on both demand and supply side by introducing two specific technology based interventions, namely, robo-advising service (on the demand side) that aims to improve financial discipline of farmers and blockchain platform for lac farmers/cultivators transactions with FPO and lenders (on the supply side), that aims to reduce the information asymmetry and better monitoring of assets for the FPO and lenders. These two technological interventions may help reduce borrowing costs and improve famers’ economic wellbeing. Thus, more efficiency and improved margins through FPO aggregation would increase lac farmers’ contribution to Indian GDP. Research on technology interventions to reduce information asymmetry is limited for farmer empowerment.",
    ],
  },
  {
    index: 2,
    title: "Protecting Medicine Logistics for Better Health Care Infrastructure",
    issue: [
      "India is one of the largest producers of pharmaceutical products. It is expected to reach $55 billion by 20201. Out of this, more than $16 billion is export market2. For instance, during this COVID time, Hyderabad based companies like Bharath Biotech are leading global markets in producing vaccines against COVID for global supply. However, the logistics and traceability of the supply chain is quite critical to comply with several layers of regulatory compliances. Recently Bharath Biotech 20 million doses of covid vaccine got rejected from the Brazilian government due to lack of traceability and compliance3. Hence, it is high time Pharma companies come out with an end-to-end traceability solution that is immutable and audit-ready at any point of the supply chain process. ",
      "Cold chain logistics, that carry vaccines and perishable goods, are more sophisticated and carry more risk of compliance and traceability. Business entities in a supply chain network engaged with cold chain packaged products maintain their individual system of records. This hinders creation of a trusted, single view of records, which is critical in case of a breach of contract. Current business processes are being disrupted by new, trusted peer-to-peer business networks that maintain a tamper-proof distributed ledger for transactions, thereby tracking adherence to service levels from the point of pick up through to final delivery. Such innovative networks include Internet of Things (IoT), fleet management integrated with supply chain and blockchain for real-time visibility by transferring the summary of health check to a distributed ledger, where all participants can view it — ensuring trust, accountability, and transparency.",
      "Why we need to establish supply chain integrity with cold chain monitoring?",
      "1. Fight fraud and theft with provenance authentication",
      "2. Reduce time and cost out of supply chain with data and visualization",
      "3. Address regulatory requirements with minimal costs",
      "4. Reduce operating costs by eliminating redundancies and shorter clock cycles",
      "5. Improve transparency and trust among all parties in the ecosystem. ",
    ],
    solution: [
      "We propose to develop a “proof of concept” for blockchain enabled Internet of Things architecture with the following three major components: ",
      "1. IoT Gateway Devices",
      "An Internet of Things (IoT) gateway is a physical device or software program that serves as the connection point between the cloud and controllers, sensors and intelligent devices.",
      "All data moving to the cloud, or vice versa, goes through the gateway, which can be either a dedicated hardware appliance or software program. An IoT gateway may also be referred to as an intelligent gateway or a control tier.",
      "2. Function App",
      "Azure Function Apps uses the Azure App Service infrastructure. A function app is the container that hosts the execution of individual functions. When you create a function app in the App Service hosting plan, your function app can use all the features of App Service.",
      "3. Blockchain Service",
      "The Blockchain services on Azure shall be leveraged to bring in the features of immutability and transparency of the transactions, events and alerts generated by the IoT sensors –which include capturing the shipment details at origin, updating the shipment details at handoff points, updating the shipment details with events and alerts generated by the IoT solution.",
      "Quorum EEA Single Member Blockchain is used in the Cold-Chain solution.",
      "Quorum is an Ethereum based DLT (Distributed Ledger Technology). The objective behind this is to provide a permissioned implementation of Ethereum which supports transactions and contract privacy.",
    ],
  },
  {
    index: 3,
    title: "Improving Funding Opportunities for the Bottom of the Pyramid of the Society",
    issue: [
      "Higher monitoring costs and more uncertainty of the future cashflows of people living in the bottom end of the pyramid of the society has severally affected their access to finance. Government tries many possible ways to solve this issue, however, there is no clear solution.  On the 5th November 2020, Reserve Bank of India came out with co-lending guidelines (RBI/2020-21/63 on 5th November, 2020 FIDD.CO.Plan.BC.No.8/04.09.01/2020-21) that allows banks and NBFCs to work together for providing loans to priority sector borrowers. The main purpose is to Improve Credit Flow to rural sector that helps in growth and development; Maximize Reach through collaboration where the lower cost of funds from the banks are made available to the ultimate beneficiaries with the greater reach of the NBFC; Generating Funds, with objective to generate the availability of more funds for development; Sharing the Risks and Returns through collaboration between banks and NBFCs; To boost the Relationship: such collaboration shall result in boosting the relationship between Bank and NBFCs. ",
    ],
    solution: [
      "In light of this development, we envisaged a consortium marketplace, that facilitates future partnerships between commercial banks and NBFCs for co-lending and creation of several structured financial products aimed at addressing the challenges of priority sectors in India. Given that such a platform can face several potential challenges, in terms of risk mitigation, complexity in operations and corresponding costs. Inclusive Growth Chain ventured into developing a risk mitigation platform using blockchain technology. Essentially, such a platform will act as a middle layer between demand (borrowers) and supply (lenders). In summary, it will be a mediating layer to build trust between lenders and borrowers, without compromising security and privacy of each individual stakeholder operating on the platform.",
      "There are five more layers under the application layer. Data ledger layer stores all the transactions and artefacts data in Hyper-ledger Fabric enabled blocks. We propose several consensus algorithms broadly coming under \"proof of authority\" as the consensus protocol. We propose permissioned consortium blockchain to ensure consensus is achieved through authorized nodes within the blockchain. These are followed by an information exchange layer between the co-lenders, network and hardware layers.",
    ],
  },
  {
    index: 4,
    title: "Saving Industry Water Consumption",
    issue: [
      "Unregulated chemical treatment coupled with traditional sampling methods to assess water quality leads to excess costs of chemicals, damage of equipment and production halts - for instance the inability to continuously trace calcium hardness levels in the treatment process prevents the plant from preemptively treating the water in the case that water hardness level is too high. As a result when this compromised water is allowed to be used in the molding process at the consumer end (for cooling the molds), due to high calcium levels the molds’ ability to withstand heat without deforming is substantially reduced. Where a typical mold should be able to withstand approximately 3,000 heat cycles when exposed to hard water regularly this number reduces drastically leading to high costs in terms of production halts and expenditure on molding equipment. ",
      "Information asymmetry across nodes of water treatment plant leading to uncoordinated activities and mismanagement and conflict - such as inability to accurately assess performance of third party stakeholders, and inability to identify root cause of parameter fluctuations outside the permissible range. For instance when a third party performs chemical treatment, since it’s performance is assessed only after the treatment process through sampling, there is an inability to attribute performance level to the pertinent cause, i.e. there is no way of finding out if performance level was low due to inefficacy of chemicals used by agency, or due to variability and shocks in the water treatment plant. This results in a conflict between the water treatment plant - as the chemical treatment agency would blindly blame the water treatment plant for any issues in the process. As there is no single source of truth in terms of data for both parties, conflict resolution becomes an inefficient and arduous task, and even in the best case where the treatment agency incurs a penalty, the water treatment plant has still incurred a loss due to reduced production and equipment life, and costs of corrective chemical treatment. ",
    ],
    solution: [
      "The reason for the above stated problems stems from the current technology employed by the water treatment plant. For instance at most stages there is no equipment that allows automated quality assessment of water across the nodes, as a result the plant assesses water quality through traditional sampling methods which are inefficient and in the long run more costly. Furthermore, such sampling assessments can typically only be carried out after the plant exhibits symptoms of unhealthy water - a post mortem analysis costs the plant more than just chemical treatment costs, as unhealthy water can lead to several more grave issues like deterioration of expensive plant equipment and production halts. In addition the plant also does not have a technological mechanism to store and monitor data in a way that acts as a common ledger to all the parties in the plant. Data collection is largely manual and there is no common platform for maintaining this data leading to differing data points with different parties. Such reconciliation issues result in reduced coordination of activities, miscommunication, mismanagement (if actions are taken on data that is not the most recent / inaccurate), and conflict amongst stakeholders in the plant. ",
      "The issues currently plaguing the plant are largely preventable. With the right technology and implementation, the identified reasons for plant inefficiencies can be tackled head on. ",
      "Given the root cause of the problems the plant is facing, a solution would require i) real time monitoring of data and ii) the ability to store this information in such a way that it is secure, immutable, and can be shared across stakeholders easily. There are two emerging technologies that are perfectly suited to enabling such a solution. These technologies are: a) Internet of Things (IoT) and, b) Blockchain technology respectively. IoT devices are electronic devices that have the ability to communicate over the internet, such as sensors that can continuously take readings and parallelly upload them to a local / cloud storage system. Blockchain technology is a cutting edge technology that enables the creation of databases that are secure and  immutable, such a database results in the obliteration of reconciliation issues and helps facilitate trust amongst stakeholders by acting as a single source of truth. In the following sections an introduction to these technologies is given so as to provide a context for our solution. ",
    ],
  },
  {
    index: 5,
    title: "Making Corporate Debt Market for Ordinary Retail Investors",
    issue: [
      "The current system of Bond market in India is having too many layers of intermediation and too slow in settling a transaction due to several validations at every stage of the process, time consuming resolution of data inconsistencies and multiple versions of truth across the network of issuers. Various operational and counterparty risks are  associated with this system like settlement failures, disputes, allocation conflicts and reconciliation of errors etc. Corporate Bond market suffers from low liquidity due to entry barriers to retail or small investors, where the minimum lot size for trading is Rs.2 lakh. Too many layers of intermediation and too slow in settling a transaction due to several validations at every stage of the process.",
    ],
    solution: [
      "The solution uses blockchain technology – Hyperledger fabric for tokenisation, recording of transactions and  token holdings  with immutability.",
      "Smart contracts are used for execution and validation of the transactions, smart contracts are   triggered by predefined parameters and complete transactions instantly. This can reduce counterparty risk during the transaction and reduces the possibility of trade breaks.",
      "The system of single ledger system that has both bonds and cash on a single ledger in a prevalidated state, ensuring settlement guarantee, transfer of one asset occurs if and only if the transfer of the other asset also occurs, reducing counterparty settlement risks for investors.",
      "Use of  distributed ledger technology (DLT), which is a decentralized database managed by multiple participants across multiple locations that enables participants to access, validate and update records simultaneously and securely.",
    ],
  },
  {
    index: 6,
    title: "Protecting the Environment through better Air Quality Monitoring Model",
    issue: [
      "Air pollution is a mix of hazardous substances from both man-made and natural sources such as vehicular emissions, volcanic eruption.",
      "The Problem: Air pollution is the leading environmental toxin…About 4.3 million people die from household air pollution and 3.7 million from ambient air pollution. Hence this makes it one of the pressing problems to resolve.",
      "Scientific Studies: There are several scientific studies on the effects of Pollution; this is shown in the next slide.",
      "Research based Resolution: This problem can be solved by creating environmental health literacy through targeted communication.",
      "The Gap: They give Air quality Index (AQI) values, but do not specifically say what it means – people are expected  to comprehend it themselves and draw conclusions from it.",
      "We believe that several target groups have problem is accessing air quality of a give location. When they want to know the air quality of a given location, they relay on third party providers like google and others, that may not give data at a granular level and may not be detailed and precise.  On top of that you must subscribe to their service. ",
    ],
    solution: [
      "We believe that blockchain enabled air quality platform, where members contribute (through installation of air quality sensors and get reward for supplying real-time data) to the “air data lake”  is more reliable, democratic and granular. ",
    ],
  },
  {
    index: 7,
    title: "Protecting the Environment through better Water Quality Monitoring Model",
    issue: [
      "Water is a critical resource for environmental sustainability. Water quality is more critical for human consumption and industry consumption. More than one billion people become ill due to water contamination in low income countries (Bartram et.al., 2005). In India, every day, on average, 8 people die due to water pollution (Time of India, 2019).  Yet, we do not have a clear and systematic way for water accounting and water monitoring. ",
      "Existing methods are not real time and do not have exhaustive coverage. Lack of alerting mechanism will hamper for taking necessary actions to provide clean water for both human and industrial consumption. ",
    ],
    solution: [
      "Inclusive Growth Chain (IGC) provide a crowd sourcing platform on a blockchain network for sourcing water quality at a daily frequency level by using their water sampling smart IoT devices  and validating it with satellite images based machine learning models. Using Citizen Science frame work, IGC will empower local citizen representatives to supply periodical water samples through smart devices given to them. They are directly incentivized for supplying the water images takes from water sampling smart IoT devices to the data lakes maintained by IGC for deriving water quality parameters through machine learning models. ",
      "DATA FLOW:",
      "There will be two sources for the data, Satellite and Smart Water Device.",
      "Satellite:",
      "7 parameters data will be collected from the satellite.",
      "All the image processing will be done in the IGC dedicated server.",
      "Then using the client application, the users can access the image processing results using interactive dashboards developed by the IGC.",
      "Smart Water Device:",
      "IGC is developing an IoT device which can measure Turbidity and Coliform for the given water sample.",
      "There will be a mobile application with which user can connect to the device using Wi-Fi, Bluetooth or a USB Cable. Once connected, user have to take the picture of the water sample.",
      "Then these images will be processed and result will be shown to the user via mobile application or web application.",
      "BLOCKCHAIN ARCHITECTURE:",
      "This application will be deployed in the public blockchain.",
      "The data from the satellite and smart water device will be collected and image processed. Then the results will be pushed on to the blockchain using the rest API’s.",
      "With the help of smart contracts, user can access the data/results from the blockchain database.",
      "With the help of blockchain, no one can tamper the data and thus it creates trust, traceability, and transparency.",
      "Downtime in the service can be mitigated with the help of a decentralized system.",
      "With a real-time loyalty reward points application system, customers can earn tokens.",
      "WEB APPLICATION:",
      "The real-time data can be easily visualized with our interactive dashboard.",
      "The user-friendly interface allows the user to select the location using the GPS button or by simply choosing from the dropdown menu.",
      "Based on the location, the dashboard displays the water quality metrics and Individual parameter values for a specified date range.",
      "It also provides information about all the water quality parameters.",
      "The adverse effects and sources of the water pollutants will be displayed to the user.",
      "An alert system will be integrated to the web application. With the help of prediction models, it alerts the user for further recommended water quality tests.",
      "MOBILE APPLICATION:",
      "Mobile applications can be accessed by anyone willing to check water quality at a particular location.",
      "Similar to the web application, the desired location can be selected in two ways i.e., by selecting the current location (GPS), or by using the dropdown menu.",
      "Once the location is selected, it is pinpointed on the map.",
      "Water quality parameter values along with the level they represent (good, bad, dangerous, etc.) are displayed.",
      "The application also provides information on the sources and the effects of water pollution.",
      "Users can become data providers by connecting the application to IoT device.",
    ],
  }
];

const ImpactStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [showZoomedImage, setShowZoomedImage] = useState(false);
  const [showZoomedImage2, setShowZoomedImage2] = useState(false);
  const [showZoomedImage3, setShowZoomedImage3] = useState(false);
  const [showZoomedImage4, setShowZoomedImage4] = useState(false);

  const handleShowZoomedImage = () => setShowZoomedImage(true);
  const handleCloseZoomedImage = () => setShowZoomedImage(false);
  const handleShowZoomedImage2 = () => setShowZoomedImage2(true);
  const handleCloseZoomedImage2 = () => setShowZoomedImage2(false);
  const handleShowZoomedImage3 = () => setShowZoomedImage3(true);
  const handleCloseZoomedImage3 = () => setShowZoomedImage3(false);
  const handleShowZoomedImage4 = () => setShowZoomedImage4(true);
  const handleCloseZoomedImage4 = () => setShowZoomedImage4(false);

  return (
    <div className='impact_stories_main_container'>
      <div className='impact_stories_container_1'>
        <div className='isc1_title'>
          Impact Stories
        </div>
        <div className='isc1_text'>
          Home &nbsp; {'>'}{'>'} &nbsp; Impact Stories
        </div>
      </div>
      <div className='impact_stories_container_2'>
        <div className='isc2_content_container'>
          <div className='impact_stories_card_container'>
            {
              currentStory === 0 && (
                <Card className='impact_stories_card'>
                  <CardContent className='impact_stories_card_content'>
                    <div className='impact_stories_card_image_container'>
                      <img
                        src={img_22}
                        alt='img_22'
                        className='impact_stories_card_img'
                      />
                    </div>
                    <div className='impact_stories_card_title'>
                      Building Farming Ecosystem with Blockchain for Empowering Farmers
                    </div>
                    <div className='impact_stories_card_text'>
                      <h2 className='impact_stories_card_text_heading'>The Issue:</h2>
                      <p className='impact_stories_card_text_p'>A large population in Jharkhand is completely dependent on agriculture and allied activities. In particular, Lac cultivation forms a major source of income for tribal farmers in Jharkhand. Among the top ten lac producing districts, five of them are in Jharkhand with the highest produce seen from Ranchi (Jharkhand) followed by Simdega (Jharkhand) in 2015-16 and 2016-17. </p>
                      <p className='impact_stories_card_text_p'>A large percent of the farmers are small and marginalized and sell raw lac without adding any value. The prime reason for this is lack of finance; due to the unorganized sector and lack of bargaining power, only fewer credit facilities are available to the farmers and at a very high cost. Due to the high cost of borrowing, farmers have little profits to contribute towards the development of infrastructure, scaling up their production output and so on. This leaves them financially much worse and exposing them to the risk of external threats. Problem of lack of marketing infrastructure, exploitation by middlemen is prevalent for lac cultivators. </p>
                      <p className='impact_stories_card_text_p'>Collectivization of producers, especially small and marginal farmers, into producer organisations has emerged as one of the most effective pathways to address the many challenges of agriculture but most importantly, improved access to investments, technology and inputs and markets. Department of Agriculture and Cooperation, Ministry of Agriculture, Govt. of India has framed a National Policy for the promotion of Farmers Producers Organizations.</p>
                      <p className='impact_stories_card_text_p'>The main objective of FPO’s (Farmer Producer Organisations) is to organize farmers into a collective and improve their bargaining power in the market. In particular, reduction of cost of borrowing, providing market linkages and overall well-being of the farmers. However, mere aggregation will not yield desired results unless the demand side and supply side problems are addressed. On the demand side, farmers would like to have access to timely finance with lower rates of borrowing. On the supply side, lenders require more information to assess the default risk of the farmers and thereby reduce their information asymmetry problem.</p>
                      <h2 className='impact_stories_card_text_heading' style={{ marginTop: '3rem' }}>Our Solution:</h2>
                      <p className='impact_stories_card_text_p'>Our Project aims to reduce the frictions on both demand and supply side by introducing two specific technology based interventions, namely, robo-advising service (on the demand side) that aims to improve financial discipline of farmers and blockchain platform for lac farmers/cultivators transactions with FPO and lenders (on the supply side), that aims to reduce the information asymmetry and better monitoring of assets for the FPO and lenders. These two technological interventions may help reduce borrowing costs and improve famers’ economic wellbeing. Thus, more efficiency and improved margins through FPO aggregation would increase lac farmers’ contribution to Indian GDP. Research on technology interventions to reduce information asymmetry is limited for farmer empowerment.</p>
                    </div>
                    <div>
                      <Modal
                        open={showZoomedImage}
                        onClose={handleCloseZoomedImage}
                      >
                        <div className='impact_stories_card_zoom_container'>
                          <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage} />
                          <img
                            src={img_20}
                            alt="img_20"
                            className='impact_stories_card_zoomed_img'
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage} />
                      <img
                        src={img_20}
                        alt='img_20'
                        className='impact_stories_card_img'
                        style={{ height: 'auto', width: '100%' }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            }
            {
              currentStory === 1 && (
                <Card className='impact_stories_card'>
                  <CardContent className='impact_stories_card_content'>
                    <div className='impact_stories_card_image_container'>
                      <img
                        src={img_12}
                        alt='img_12'
                        className='impact_stories_card_img'
                      />
                    </div>
                    <div className='impact_stories_card_title'>
                      Protecting Medicine Logistics for Better Health Care Infrastructure
                    </div>
                    <div className='impact_stories_card_text'>
                      <h2 className='impact_stories_card_text_heading'>The Issue:</h2>
                      <p className='impact_stories_card_text_p'>India is one of the largest producers of pharmaceutical products. It is expected to reach $55 billion by 2020<sup>1</sup>. Out of this, more than $16 billion is export market<sup>2</sup>. For instance, during this COVID time, Hyderabad based companies like Bharath Biotech are leading global markets in producing vaccines against COVID for global supply. However, the logistics and traceability of the supply chain is quite critical to comply with several layers of regulatory compliances. Recently Bharath Biotech 20 million doses of covid vaccine got rejected from the Brazilian government due to lack of traceability and compliance<sup>3</sup>. Hence, it is high time Pharma companies come out with an end-to-end traceability solution that is immutable and audit-ready at any point of the supply chain process. </p>
                      <p className='impact_stories_card_text_p'>Cold chain logistics, that carry vaccines and perishable goods, are more sophisticated and carry more risk of compliance and traceability. Business entities in a supply chain network engaged with cold chain packaged products maintain their individual system of records. This hinders creation of a trusted, single view of records, which is critical in case of a breach of contract. Current business processes are being disrupted by new, trusted peer-to-peer business networks that maintain a tamper-proof distributed ledger for transactions, thereby tracking adherence to service levels from the point of pick up through to final delivery. Such innovative networks include Internet of Things (IoT), fleet management integrated with supply chain and blockchain for real-time visibility by transferring the summary of health check to a distributed ledger, where all participants can view it — ensuring trust, accountability, and transparency.</p>
                      <p className='impact_stories_card_text_p'>Why we need to establish supply chain integrity with cold chain monitoring?</p>
                      <p className='impact_stories_card_text_p'>
                        <ol className='impact_stories_card_text_list'>
                          <li>Fight fraud and theft with provenance authentication </li>
                          <li>Reduce time and cost out of supply chain with data and visualization</li>
                          <li>Address regulatory requirements with minimal costs</li>
                          <li>Reduce operating costs by eliminating redundancies and shorter clock cycles</li>
                          <li>Improve transparency and trust among all parties in the ecosystem. </li>
                        </ol>
                      </p>
                      <h2 className='impact_stories_card_text_heading' style={{ marginTop: '3rem' }}>Our Solution:</h2>
                      <p className='impact_stories_card_text_p'>We propose to develop a “proof of concept” for blockchain enabled Internet of Things architecture with the following three major components: </p>
                      <p className='impact_stories_card_text_p'>
                        <ol className='impact_stories_card_text_list'>
                          <li>
                            IoT Gateway Devices
                            <p>An Internet of Things (IoT) gateway is a physical device or software program that serves as the connection point between the cloud and controllers, sensors and intelligent devices.</p>
                            <p>All data moving to the cloud, or vice versa, goes through the gateway, which can be either a dedicated hardware appliance or software program. An IoT gateway may also be referred to as an intelligent gateway or a control tier.</p>
                          </li>
                          <li>
                            Function App
                            <p>Azure Function Apps uses the Azure App Service infrastructure. A function app is the container that hosts the execution of individual functions. When you create a function app in the App Service hosting plan, your function app can use all the features of App Service.</p>
                          </li>
                          <li>
                            Blockchain Service
                            <p>The Blockchain services on Azure shall be leveraged to bring in the features of immutability and transparency of the transactions, events and alerts generated by the IoT sensors –which include capturing the shipment details at origin, updating the shipment details at handoff points, updating the shipment details with events and alerts generated by the IoT solution.</p>
                            <p>Quorum EEA Single Member Blockchain is used in the Cold-Chain solution.</p>
                            <p>Quorum is an Ethereum based DLT (Distributed Ledger Technology). The objective behind this is to provide a permissioned implementation of Ethereum which supports transactions and contract privacy.</p>
                          </li>
                        </ol>
                      </p>
                      <div>
                        <Modal
                          open={showZoomedImage}
                          onClose={handleCloseZoomedImage}
                        >
                          <div className='impact_stories_card_zoom_container'>
                            <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage} />
                            <img
                              src={img_10}
                              alt="img_10"
                              className='impact_stories_card_zoomed_img'
                            />
                          </div>
                        </Modal>
                      </div>
                      <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage} />
                        <img
                          src={img_10}
                          alt='img_10'
                          className='impact_stories_card_img'
                          style={{ height: 'auto', width: '100%' }}
                        />
                      </div>
                      <p className='impact_stories_card_text_p' style={{ marginTop: '4rem', marginLeft: '1rem' }}>Process flow of blockchain enabled IoT: </p>
                      <div>
                        <Modal
                          open={showZoomedImage2}
                          onClose={handleCloseZoomedImage2}
                        >
                          <div className='impact_stories_card_zoom_container'>
                            <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage2} />
                            <img
                              src={img_21}
                              alt="img_21"
                              className='impact_stories_card_zoomed_img'
                            />
                          </div>
                        </Modal>
                      </div>
                      <div className='impact_stories_card_image_container'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage2} />
                        <img
                          src={img_21}
                          alt='img_21'
                          className='impact_stories_card_img'
                          style={{ height: 'auto', width: '100%' }}
                        />
                      </div>
                      <p className='impact_stories_card_text_p' style={{ marginTop: '4rem' }}><sup>1</sup><a href="https://health.economictimes.indiatimes.com/news/pharma/the-state-of-pharmaceutical-industry-in-india-an-overview/60273583" target="_blank">Indian pharmaceutical industry: The State of Pharmaceutical Industry in India – An Overview, Health News, ET HealthWorld (indiatimes.com)</a></p>
                      <p className='impact_stories_card_text_p'><sup>2</sup><a href="https://www.ibef.org/industry/pharmaceutical-india" target="_blank">Pharma Industry in India: Pharma Sector Overview, Market Size, Analysis...| IBEF</a></p>
                      <p className='impact_stories_card_text_p'><sup>3</sup><a href="https://science.thewire.in/health/brazils-drug-regulator-rejects-import-of-bharat-biotechs-covaxin/" target="_blank">Brazil Drug Regulator Rejects Bharat Biotech's Application To Import Covaxin - The Wire Science</a></p>
                    </div>
                  </CardContent>
                </Card>
              )
            }
            {
              currentStory === 2 && (
                <Card className='impact_stories_card'>
                  <CardContent className='impact_stories_card_content'>
                    <div className='impact_stories_card_image_container'>
                      <img
                        src={img_23}
                        alt='img_23'
                        className='impact_stories_card_img'
                      />
                    </div>
                    <div className='impact_stories_card_title'>
                      Improving Funding Opportunities for the Bottom of the Pyramid of the Society
                    </div>
                    <div className='impact_stories_card_text'>
                      <h2 className='impact_stories_card_text_heading'>The Issue:</h2>
                      <p className='impact_stories_card_text_p'>Higher monitoring costs and more uncertainty of the future cashflows of people living in the bottom end of the pyramid of the society has severally affected their access to finance. Government tries many possible ways to solve this issue, however, there is no clear solution.  On the 5th November 2020, Reserve Bank of India came out with co-lending guidelines (RBI/2020-21/63 on 5th November, 2020 FIDD.CO.Plan.BC.No.8/04.09.01/2020-21) that allows banks and NBFCs to work together for providing loans to priority sector borrowers. The main purpose is to Improve Credit Flow to rural sector that helps in growth and development; Maximize Reach through collaboration where the lower cost of funds from the banks are made available to the ultimate beneficiaries with the greater reach of the NBFC; Generating Funds, with objective to generate the availability of more funds for development; Sharing the Risks and Returns through collaboration between banks and NBFCs; To boost the Relationship: such collaboration shall result in boosting the relationship between Bank and NBFCs. </p>
                      <h2 className='impact_stories_card_text_heading' style={{ marginTop: '3rem' }}>Our Solution:</h2>
                      <p className='impact_stories_card_text_p'>In light of this development, we envisaged a consortium marketplace, that facilitates future partnerships between commercial banks and NBFCs for co-lending and creation of several structured financial products aimed at addressing the challenges of priority sectors in India. Given that such a platform can face several potential challenges, in terms of risk mitigation, complexity in operations and corresponding costs. Inclusive Growth Chain ventured into developing a risk mitigation platform using blockchain technology. Essentially, such a platform will act as a middle layer between demand (borrowers) and supply (lenders). In summary, it will be a mediating layer to build trust between lenders and borrowers, without compromising security and privacy of each individual stakeholder operating on the platform.</p>
                      <p className='impact_stories_card_text_p'>There are five more layers under the application layer. Data ledger layer stores all the transactions and artefacts data in Hyper-ledger Fabric enabled blocks. We propose several consensus algorithms broadly coming under "proof of authority" as the consensus protocol. We propose permissioned consortium blockchain to ensure consensus is achieved through authorized nodes within the blockchain. These are followed by an information exchange layer between the co-lenders, network and hardware layers.</p>
                    </div>
                    <div>
                      <Modal
                        open={showZoomedImage}
                        onClose={handleCloseZoomedImage}
                      >
                        <div className='impact_stories_card_zoom_container'>
                          <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage} />
                          <img
                            src={img_1}
                            alt="img_1"
                            className='impact_stories_card_zoomed_img'
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage} />
                      <img
                        src={img_1}
                        alt='img_1'
                        className='impact_stories_card_img'
                        style={{ height: 'auto', width: '100%' }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            }
            {
              currentStory === 3 && (
                <Card className='impact_stories_card'>
                  <CardContent className='impact_stories_card_content'>
                    <div className='impact_stories_card_image_container'>
                      <img
                        src={img_14}
                        alt='img_14'
                        className='impact_stories_card_img'
                      />
                    </div>
                    <div className='impact_stories_card_title'>
                      Saving Industry Water Consumption
                    </div>
                    <div className='impact_stories_card_text'>
                      <h2 className='impact_stories_card_text_heading'>The Issue:</h2>
                      <p className='impact_stories_card_text_p'>Unregulated chemical treatment coupled with traditional sampling methods to assess water quality leads to excess costs of chemicals, damage of equipment and production halts - for instance the inability to continuously trace calcium hardness levels in the treatment process prevents the plant from preemptively treating the water in the case that water hardness level is too high. As a result when this compromised water is allowed to be used in the molding process at the consumer end (for cooling the molds), due to high calcium levels the molds’ ability to withstand heat without deforming is substantially reduced. Where a typical mold should be able to withstand approximately 3,000 heat cycles when exposed to hard water regularly this number reduces drastically leading to high costs in terms of production halts and expenditure on molding equipment. </p>
                      <p className='impact_stories_card_text_p'>Information asymmetry across nodes of water treatment plant leading to uncoordinated activities and mismanagement and conflict - such as inability to accurately assess performance of third party stakeholders, and inability to identify root cause of parameter fluctuations outside the permissible range. For instance when a third party performs chemical treatment, since it’s performance is assessed only after the treatment process through sampling, there is an inability to attribute performance level to the pertinent cause, i.e. there is no way of finding out if performance level was low due to inefficacy of chemicals used by agency, or due to variability and shocks in the water treatment plant. This results in a conflict between the water treatment plant - as the chemical treatment agency would blindly blame the water treatment plant for any issues in the process. As there is no single source of truth in terms of data for both parties, conflict resolution becomes an inefficient and arduous task, and even in the best case where the treatment agency incurs a penalty, the water treatment plant has still incurred a loss due to reduced production and equipment life, and costs of corrective chemical treatment. </p>
                      <h2 className='impact_stories_card_text_heading' style={{ marginTop: '3rem' }}>Our Solution:</h2>
                      <p className='impact_stories_card_text_p'>The reason for the above stated problems stems from the current technology employed by the water treatment plant. For instance at most stages there is no equipment that allows automated quality assessment of water across the nodes, as a result the plant assesses water quality through traditional sampling methods which are inefficient and in the long run more costly. Furthermore, such sampling assessments can typically only be carried out after the plant exhibits symptoms of unhealthy water - a post mortem analysis costs the plant more than just chemical treatment costs, as unhealthy water can lead to several more grave issues like deterioration of expensive plant equipment and production halts. In addition the plant also does not have a technological mechanism to store and monitor data in a way that acts as a common ledger to all the parties in the plant. Data collection is largely manual and there is no common platform for maintaining this data leading to differing data points with different parties. Such reconciliation issues result in reduced coordination of activities, miscommunication, mismanagement (if actions are taken on data that is not the most recent / inaccurate), and conflict amongst stakeholders in the plant. </p>
                      <p className='impact_stories_card_text_p'>The issues currently plaguing the plant are largely preventable. With the right technology and implementation, the identified reasons for plant inefficiencies can be tackled head on. </p>
                      <p className='impact_stories_card_text_p'>Given the root cause of the problems the plant is facing, a solution would require i) real time monitoring of data and ii) the ability to store this information in such a way that it is secure, immutable, and can be shared across stakeholders easily. There are two emerging technologies that are perfectly suited to enabling such a solution. These technologies are: a) Internet of Things (IoT) and, b) Blockchain technology respectively. IoT devices are electronic devices that have the ability to communicate over the internet, such as sensors that can continuously take readings and parallelly upload them to a local / cloud storage system. Blockchain technology is a cutting edge technology that enables the creation of databases that are secure and  immutable, such a database results in the obliteration of reconciliation issues and helps facilitate trust amongst stakeholders by acting as a single source of truth. In the following sections an introduction to these technologies is given so as to provide a context for our solution.</p>
                    </div>
                    <div>
                      <Modal
                        open={showZoomedImage}
                        onClose={handleCloseZoomedImage}
                      >
                        <div className='impact_stories_card_zoom_container'>
                          <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage} />
                          <img
                            src={img_5}
                            alt="img_5"
                            className='impact_stories_card_zoomed_img'
                            style={{ width: '70%', marginLeft: '15%' }}
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage} />
                      <img
                        src={img_5}
                        alt='card_img'
                        className='impact_stories_card_img'
                      />
                    </div>
                    <div>
                      <Modal
                        open={showZoomedImage2}
                        onClose={handleCloseZoomedImage2}
                      >
                        <div className='impact_stories_card_zoom_container'>
                          <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage2} />
                          <img
                            src={img_18}
                            alt="img_18"
                            className='impact_stories_card_zoomed_img'
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage2} />
                      <img
                        src={img_18}
                        alt='img_18'
                        className='impact_stories_card_img'
                        style={{ height: 'auto', width: '100%' }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            }
            {
              currentStory === 4 && (
                <Card className='impact_stories_card'>
                  <CardContent className='impact_stories_card_content'>
                    <div className='impact_stories_card_image_container'>
                      <img
                        src={img_19}
                        alt='img_19'
                        className='impact_stories_card_img'
                      />
                    </div>
                    <div className='impact_stories_card_title'>
                      Making Corporate Debt Market for Ordinary Retail Investors
                    </div>
                    <div className='impact_stories_card_text'>
                      <h2 className='impact_stories_card_text_heading'>The Issue:</h2>
                      <p className='impact_stories_card_text_p'>The current system of Bond market in India is having too many layers of intermediation and too slow in settling a transaction due to several validations at every stage of the process, time consuming resolution of data inconsistencies and multiple versions of truth across the network of issuers. Various operational and counterparty risks are  associated with this system like settlement failures, disputes, allocation conflicts and reconciliation of errors etc. Corporate Bond market suffers from low liquidity due to entry barriers to retail or small investors, where the minimum lot size for trading is Rs.2 lakh. Too many layers of intermediation and too slow in settling a transaction due to several validations at every stage of the process.</p>
                      <div>
                        <Modal
                          open={showZoomedImage}
                          onClose={handleCloseZoomedImage}
                        >
                          <div className='impact_stories_card_zoom_container'>
                            <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage} />
                            <img
                              src={img_2}
                              alt="img_2"
                              className='impact_stories_card_zoomed_img'
                              style={{ width: '70%', marginLeft: '15%' }}
                            />
                          </div>
                        </Modal>
                      </div>
                      <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage} />
                        <img
                          src={img_2}
                          alt='img_2'
                          className='impact_stories_card_img'
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                      <h2 className='impact_stories_card_text_heading' style={{ marginTop: '3rem' }}>The Major Pain points: </h2>
                      <table className='impact_stories_card_text_table'>
                        <tr className='impact_stories_card_text_table_row'>
                          <td className='impact_stories_card_text_table_col_1'>Large ticket sizes and illiquidity </td>
                          <td className='impact_stories_card_text_table_col_2'>
                            <ul>
                              <li>In Indian bonds market the minimum lot size for the deals is usually Rs.2 lakh. This excludes small investors who provide much needed liquidity and also helps in diversifying the risk of household portfolios. </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className='impact_stories_card_text_table_row'>
                          <td className='impact_stories_card_text_table_col_1'>Time-consuming processes</td>
                          <td className='impact_stories_card_text_table_col_2'>
                            <ul>
                              <li>Long clearing and settlement cycle due to time consuming resolution of data inconsistencies and multiple versions of truth across the network of issuers.</li>
                              <li>The settlement is on T+0, T+1 or T+2 on DVPI basis without any guarantee of settlement from the clearing corporations.</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className='impact_stories_card_text_table_row'>
                          <td className='impact_stories_card_text_table_col_1'>
                            Huge transaction cost <br />
                            Higher Risk <br />
                            Low Process automation
                          </td>
                          <td className='impact_stories_card_text_table_col_2'>
                            <li style={{ marginLeft: '-1rem' }}>Many intermediaries are involved in the typical bond trading process.</li>
                            <li style={{ marginLeft: '-1rem' }}>Settlement failures, disputes, conflicts of interest (allocation conflicts) and reconciliation errors are just a few among the various operational and counterparty risks associated with bonds issuance.</li>
                            <li style={{ marginLeft: '-1rem' }}>Current bonds issuance practices rely on inefficient, manual, multiple-step processes that, apart from time-consuming, are also prone to errors.</li>
                            <li style={{ marginLeft: '-1rem' }}>Clearing and settlement processes are complex, need involvement of many parties and require multiple communications and initiations for the execution of each trade activities.</li>
                            <li style={{ marginLeft: '-1rem' }}>Trading processes are largely manual, leading to significant inefficiencies and poor data quality for all participants.</li>
                          </td>
                        </tr>
                      </table>
                      <h2 className='impact_stories_card_text_heading' style={{ marginTop: '3rem' }}>Our Solution:</h2>
                      <p className='impact_stories_card_text_p'>The solution uses blockchain technology – Hyperledger fabric for tokenisation, recording of transactions and  token holdings  with immutability.</p>
                      <p className='impact_stories_card_text_p'>Smart contracts are used for execution and validation of the transactions, smart contracts are   triggered by predefined parameters and complete transactions instantly. This can reduce counterparty risk during the transaction and reduces the possibility of trade breaks.</p>
                      <p className='impact_stories_card_text_p'>The system of single ledger system that has both bonds and cash on a single ledger in a prevalidated state, ensuring settlement guarantee, transfer of one asset occurs if and only if the transfer of the other asset also occurs, reducing counterparty settlement risks for investors.</p>
                      <p className='impact_stories_card_text_p'>Use of  distributed ledger technology (DLT), which is a decentralized database managed by multiple participants across multiple locations that enables participants to access, validate and update records simultaneously and securely.</p>
                      <div>
                        <Modal
                          open={showZoomedImage2}
                          onClose={handleCloseZoomedImage2}
                        >
                          <div className='impact_stories_card_zoom_container'>
                            <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage2} />
                            <img
                              src={img_6}
                              alt="img_6"
                              className='impact_stories_card_zoomed_img'
                              style={{ width: '70%', marginLeft: '15%' }}
                            />
                          </div>
                        </Modal>
                      </div>
                      <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage2} />
                        <img
                          src={img_6}
                          alt='img_6'
                          className='impact_stories_card_img'
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                      <div>
                        <Modal
                          open={showZoomedImage3}
                          onClose={handleCloseZoomedImage3}
                        >
                          <div className='impact_stories_card_zoom_container'>
                            <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage3} />
                            <img
                              src={img_17}
                              alt="img_17"
                              className='impact_stories_card_zoomed_img'
                              style={{ width: '70%', marginLeft: '15%' }}
                            />
                          </div>
                        </Modal>
                      </div>
                      <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage3} />
                        <img
                          src={img_17}
                          alt='img_17'
                          className='impact_stories_card_img'
                          style={{ height: 'auto', width: '100%' }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            }
            {
              currentStory === 5 && (
                <Card className='impact_stories_card'>
                  <CardContent className='impact_stories_card_content'>
                    <div className='impact_stories_card_image_container'>
                      <img
                        src={img_15}
                        alt='img_15'
                        className='impact_stories_card_img'
                      />
                    </div>
                    <div className='impact_stories_card_title'>
                      Protecting the Environment through better Air Quality Monitoring Model
                    </div>
                    <div className='impact_stories_card_text'>
                      <h2 className='impact_stories_card_text_heading'>The Issue:</h2>
                      <p className='impact_stories_card_text_p'>Air pollution is a mix of hazardous substances from both man-made and natural sources such as vehicular emissions, volcanic eruption.</p>
                      <p className='impact_stories_card_text_p'><b>The Problem:</b> Air pollution is the leading environmental toxin…About 4.3 million people die from household air pollution and 3.7 million from ambient air pollution. Hence this makes it one of the pressing problems to resolve.</p>
                      <p className='impact_stories_card_text_p'><b>Scientific Studies:</b> There are several scientific studies on the effects of Pollution; this is shown in the next slide.</p>
                      <p className='impact_stories_card_text_p'><b>Research based </b>Resolution: This problem can be solved by creating environmental health literacy through targeted communication.</p>
                      <p className='impact_stories_card_text_p'><b>The Gap:</b> They give Air quality Index (AQI) values, but do not specifically say what it means – people are expected  to comprehend it themselves and draw conclusions from it.</p>
                      <p className='impact_stories_card_text_p'>We believe that several target groups have problem is accessing air quality of a give location. When they want to know the air quality of a given location, they relay on third party providers like google and others, that may not give data at a granular level and may not be detailed and precise.  On top of that you must subscribe to their service. </p>
                      <table className='impact_stories_card_text_table'>
                        <tr className='impact_stories_card_text_table_row'>
                          <td className='impact_stories_card_text_table_2_col_1' style={{ textAlign: 'center' }}>
                            <b>Current Solution</b>
                          </td>
                          <td className='impact_stories_card_text_table_2_col_2' style={{ textAlign: 'center' }}>
                            <b>Pain Points</b>
                          </td>
                          <td className='impact_stories_card_text_table_2_col_3' style={{ textAlign: 'center' }}>
                            <b>How our Blockchain model addresses?</b>
                          </td>
                        </tr>
                        <tr className='impact_stories_card_text_table_row'>
                          <td className='impact_stories_card_text_table_2_col_1'>
                            Data on pollution is sold through digital platform by few established business applications or third party vendors
                          </td>
                          <td className='impact_stories_card_text_table_2_col_2'>
                            Scalability
                          </td>
                          <td className='impact_stories_card_text_table_2_col_3'>
                            Individual own and are empowered through data sharing service <br />
                            Normal households supply real time data through sensors <br />
                            Devices (wearable) are supplied to platform economy <br />
                            partners who are on the road most of the time (UBER drivers) <br />
                            More data points and granular data can be obtained <br />
                          </td>
                        </tr>
                        <tr className='impact_stories_card_text_table_row'>
                          <td className='impact_stories_card_text_table_2_col_1'>
                            Data is costly  for consumption as few trusted vendors own the data
                          </td>
                          <td className='impact_stories_card_text_table_2_col_2'>
                            Costs
                          </td>
                          <td className='impact_stories_card_text_table_2_col_3'>
                            Individuals who own the data are compensated through
                            crypto tokens as reward for providing the service. Much cheaper than third party vendors
                          </td>
                        </tr>
                        <tr className='impact_stories_card_text_table_row'>
                          <td className='impact_stories_card_text_table_2_col_1'>
                            The data is prone to tampering and data users can manipulate for their private benefits (for example, polluting industry that subscribed to data can tamper for its benefits to have lower penalties)
                          </td>
                          <td className='impact_stories_card_text_table_2_col_2'>
                            Manipulation and Lack of Trust
                          </td>
                          <td className='impact_stories_card_text_table_2_col_3'>
                            Companies and business who buy the data on the platform
                            cannot tamper it and hence they can report it to the regulators
                            or public for creating trust. For instance, a polluting industry
                            can report a third party supplied data that is tamper proof
                            creates more trusts with regulators.
                            The source of the data is always traceable and that creates
                            trust to the consumer of the data.
                          </td>
                        </tr>
                      </table>
                      <h2 className='impact_stories_card_text_heading' style={{ marginTop: '3rem' }}>Our Solution:</h2>
                      <p className='impact_stories_card_text_p'>We believe that blockchain enabled air quality platform, where members contribute (through installation of air quality sensors and get reward for supplying real-time data) to the “air data lake”  is more reliable, democratic and granular. </p>
                    </div>
                    <div>
                      <Modal
                        open={showZoomedImage}
                        onClose={handleCloseZoomedImage}
                      >
                        <div className='impact_stories_card_zoom_container'>
                          <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage} />
                          <img
                            src={img_3}
                            alt="img_3"
                            className='impact_stories_card_zoomed_img'
                            style={{ width: '70%', marginLeft: '15%' }}
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage} />
                      <img
                        src={img_3}
                        alt='img_3'
                        className='impact_stories_card_img'
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <div>
                      <Modal
                        open={showZoomedImage2}
                        onClose={handleCloseZoomedImage2}
                      >
                        <div className='impact_stories_card_zoom_container'>
                          <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage2} />
                          <img
                            src={img_7}
                            alt="img_7"
                            className='impact_stories_card_zoomed_img'
                            style={{ width: '70%', marginLeft: '15%' }}
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage2} />
                      <img
                        src={img_7}
                        alt='img_7'
                        className='impact_stories_card_img'
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <div>
                      <Modal
                        open={showZoomedImage3}
                        onClose={handleCloseZoomedImage3}
                      >
                        <div className='impact_stories_card_zoom_container'>
                          <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage3} />
                          <img
                            src={img_8}
                            alt="img_8"
                            className='impact_stories_card_zoomed_img'
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage3} />
                      <img
                        src={img_8}
                        alt='img_8'
                        className='impact_stories_card_img'
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <div>
                      <Modal
                        open={showZoomedImage4}
                        onClose={handleCloseZoomedImage4}
                      >
                        <div className='impact_stories_card_zoom_container'>
                          <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage4} />
                          <img
                            src={img_9}
                            alt="img_9"
                            className='impact_stories_card_zoomed_img'
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage4} />
                      <img
                        src={img_9}
                        alt='img_9'
                        className='impact_stories_card_img'
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            }
            {
              currentStory === 6 && (
                <Card className='impact_stories_card'>
                  <CardContent className='impact_stories_card_content'>
                    <div className='impact_stories_card_image_container'>
                      <img
                        src={img_16}
                        alt='img_16'
                        className='impact_stories_card_img'
                      />
                    </div>
                    <div className='impact_stories_card_title'>
                      Protecting the Environment through better Water Quality Monitoring Model
                    </div>
                    <div className='impact_stories_card_text'>
                      <h2 className='impact_stories_card_text_heading'>The Issue:</h2>
                      <p className='impact_stories_card_text_p'>Water is a critical resource for environmental sustainability. Water quality is more critical for human consumption and industry consumption. More than one billion people become ill due to water contamination in low income countries (Bartram et.al., 2005). In India, every day, on average, 8 people die due to water pollution (Time of India, 2019).  Yet, we do not have a clear and systematic way for water accounting and water monitoring. </p>
                      <p className='impact_stories_card_text_p'>Existing methods are not real time and do not have exhaustive coverage. Lack of alerting mechanism will hamper for taking necessary actions to provide clean water for both human and industrial consumption. </p>
                      <h2 className='impact_stories_card_text_heading' style={{ marginTop: '3rem' }}>Our Solution:</h2>
                      <p className='impact_stories_card_text_p'>Inclusive Growth Chain (IGC) provide a crowd sourcing platform on a blockchain network for sourcing water quality at a daily frequency level by using their water sampling smart IoT devices  and validating it with satellite images based machine learning models. Using Citizen Science frame work, IGC will empower local citizen representatives to supply periodical water samples through smart devices given to them. They are directly incentivized for supplying the water images takes from water sampling smart IoT devices to the data lakes maintained by IGC for deriving water quality parameters through machine learning models.</p>
                      <p className='impact_stories_card_text_p' style={{ marginTop: '2rem' }}><b>DATA FLOW:</b></p>
                      <div>
                        <Modal
                          open={showZoomedImage}
                          onClose={handleCloseZoomedImage}
                        >
                          <div className='impact_stories_card_zoom_container'>
                            <FontAwesomeIcon icon={faTimes} className='impact_stories_card_zoomed_close_icon' onClick={handleCloseZoomedImage} />
                            <img
                              src={img_4}
                              alt="img_4"
                              className='impact_stories_card_zoomed_img'
                              style={{width: '80%', marginLeft: '10%'}}
                            />
                          </div>
                        </Modal>
                      </div>
                      <div className='impact_stories_card_image_container' style={{ marginTop: '4rem' }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='impact_stories_card_zoom_icon' onClick={handleShowZoomedImage} />
                        <img
                          src={img_4}
                          alt='img_4'
                          className='impact_stories_card_img'
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                      <p className='impact_stories_card_text_p'>There will be two sources for the data, Satellite and Smart Water Device.</p>
                      <p className='impact_stories_card_text_p' style={{ marginTop: '2rem' }}><b>Satellite:</b></p>
                      <p className='impact_stories_card_text_p'>
                        <ul style={{ marginLeft: '2rem' }}>
                          <li>7 parameters data will be collected from the satellite.</li>
                          <li>All the image processing will be done in the IGC dedicated server.</li>
                          <li>Then using the client application, the users can access the image processing results using interactive dashboards developed by the IGC.</li>
                        </ul>
                      </p>
                      <p className='impact_stories_card_text_p' style={{ marginTop: '2rem' }}><b>Smart Water Device:</b></p>
                      <p className='impact_stories_card_text_p'>
                        <ul style={{ marginLeft: '2rem' }}>
                          <li>IGC is developing an IoT device which can measure Turbidity and Coliform for the given water sample.</li>
                          <li>There will be a mobile application with which user can connect to the device using Wi-Fi, Bluetooth or a USB Cable. Once connected, user have to take the picture of the water sample.</li>
                          <li>Then these images will be processed and result will be shown to the user via mobile application or web application.</li>
                        </ul>
                      </p>
                      <p className='impact_stories_card_text_p' style={{ marginTop: '2rem' }}><b>BLOCKCHAIN ARCHITECTURE:</b></p>
                      <p className='impact_stories_card_text_p'>
                        <ul style={{ marginLeft: '2rem' }}>
                          <li>This application will be deployed in the public blockchain.</li>
                          <li>The data from the satellite and smart water device will be collected and image processed. Then the results will be pushed on to the blockchain using the rest API’s.  </li>
                          <li>With the help of smart contracts, user can access the data/results from the blockchain database.</li>
                          <li>With the help of blockchain, no one can tamper the data and thus it creates trust, traceability, and transparency.</li>
                          <li>Downtime in the service can be mitigated with the help of a decentralized system.</li>
                          <li>With a real-time loyalty reward points applicatiWater is a critical resource for environmental sustainability. Water quality is more critical for human consumption and industry consumption. More than one billion people become ill due to water contamination in low income countries (Bartram et.al., 2005). In India, every day, on average, 8 people die due to water pollution (Time of India, 2019).  Yet, we do not have a clear and systematic way for water accounting and water monitoring. </li>
                          <li>Existing methods are not real time and do not have exhaustive coverage. Lack of alerting mechanism will hamper for taking necessary actions to provide clean water for both human and industrial consumption. on system, customers can earn tokens.</li>
                        </ul>
                      </p>
                      <p className='impact_stories_card_text_p' style={{ marginTop: '2rem' }}><b>WEB APPLICATION:</b></p>
                      <p className='impact_stories_card_text_p'>
                        <ul style={{ marginLeft: '2rem' }}>
                          <li>The real-time data can be easily visualized with our interactive dashboard.</li>
                          <li>The user-friendly interface allows the user to select the location using the GPS button or by simply choosing from the dropdown menu.</li>
                          <li>Based on the location, the dashboard displays the water quality metrics and Individual parameter values for a specified date range.</li>
                          <li>It also provides information about all the water quality parameters.</li>
                          <li>The adverse effects and sources of the water pollutants will be displayed to the user.</li>
                          <li>An alert system will be integrated to the web application. With the help of prediction models, it alerts the user for further recommended water quality tests.</li>
                        </ul>
                      </p>
                      <p className='impact_stories_card_text_p' style={{ marginTop: '2rem' }}><b>MOBILE APPLICATION:</b></p>
                      <p className='impact_stories_card_text_p'>
                        <ul style={{ marginLeft: '2rem' }}>
                          <li>Mobile applications can be accessed by anyone willing to check water quality at a particular location.</li>
                          <li>Similar to the web application, the desired location can be selected in two ways i.e., by selecting the current location (GPS), or by using the dropdown menu.</li>
                          <li>Once the location is selected, it is pinpointed on the map.</li>
                          <li>Water quality parameter values along with the level they represent (good, bad, dangerous, etc.) are displayed.</li>
                          <li>The application also provides information on the sources and the effects of water pollution.</li>
                          <li>Users can become data providers by connecting the application to IoT device.</li>
                        </ul>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            }
          </div>
          <div className='isc2_side_container'>
            <div className='isc2_recent_posts_container'>
              <div className='isc2_recent_posts_title'>
                Impact Stories
              </div>
              <div className='isc2_recent_posts_list_container'>
                <ul className='isc2_recent_posts_list'>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={img_22}
                        alt="img_22"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className={currentStory === 0 ? 'isc2_recent_posts_list_item_text_selected' : 'isc2_recent_posts_list_item_text'} onClick={() => setCurrentStory(0)}>
                        Building Farming Ecosystem with Blockchain for Empowering Farmers
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={img_12}
                        alt="img_12"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className={currentStory === 1 ? 'isc2_recent_posts_list_item_text_selected' : 'isc2_recent_posts_list_item_text'} onClick={() => setCurrentStory(1)}>
                        Protecting Medicine Logistics for Better Health Care Infrastructure
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={img_23}
                        alt="img_23"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className={currentStory === 2 ? 'isc2_recent_posts_list_item_text_selected' : 'isc2_recent_posts_list_item_text'} onClick={() => setCurrentStory(2)}>
                        Improving Funding Opportunities for the Bottom of the Pyramid of the Society
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={img_14}
                        alt="img_14"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className={currentStory === 3 ? 'isc2_recent_posts_list_item_text_selected' : 'isc2_recent_posts_list_item_text'} onClick={() => setCurrentStory(3)}>
                        Saving Industry Water Consumption
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={img_19}
                        alt="img_19"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className={currentStory === 4 ? 'isc2_recent_posts_list_item_text_selected' : 'isc2_recent_posts_list_item_text'} onClick={() => setCurrentStory(4)}>
                        Making Corporate Debt Market for Ordinary Retail Investors
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={img_15}
                        alt="img_15"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className={currentStory === 5 ? 'isc2_recent_posts_list_item_text_selected' : 'isc2_recent_posts_list_item_text'} onClick={() => setCurrentStory(5)}>
                        Protecting the Environment through better Air Quality Monitoring Model
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={img_16}
                        alt="img_16"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className={currentStory === 6 ? 'isc2_recent_posts_list_item_text_selected' : 'isc2_recent_posts_list_item_text'} onClick={() => setCurrentStory(6)}>
                        Protecting the Environment through better Water Quality Monitoring Model
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ImpactStories;
