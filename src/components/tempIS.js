import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './css/impact_stories.css';

import home_img from '../assets/home_img/20943774.jpg';
import Footer from './footer';

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
  const [currentStory, setCurrentStory] = useState(6);

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
            <Card className='impact_stories_card'>
              <CardContent className='impact_stories_card_content'>
                <div className='impact_stories_card_image_container'>
                  <img
                    src={home_img}
                    alt='card_img'
                    className='impact_stories_card_img'
                  />
                </div>
                <div className='impact_stories_card_title'>
                  {impact_stories_items[currentStory].title}
                </div>
                <div className='impact_stories_card_text'>
                  <h2 className='impact_stories_card_text_heading'>The Issue:</h2>
                  {
                    impact_stories_items[currentStory].issue.map((item, index) => {
                      return (
                        <p key={index} className='impact_stories_card_text_p'>
                          {item}
                        </p>
                      )
                    })
                  }
                  <h2 className='impact_stories_card_text_heading' style={{marginTop: '3rem'}}>Our Solution:</h2>
                  {
                    impact_stories_items[currentStory].solution.map((item, index) => {
                      return (
                        <p key={index} className='impact_stories_card_text_p'>
                          {item}
                        </p>
                      )
                    })
                  }
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='isc2_side_container'>
            <div className='isc2_recent_posts_container'>
              <div className='isc2_recent_posts_title'>
                Recent Posts
              </div>
              <div className='isc2_recent_posts_list_container'>
                <ul className='isc2_recent_posts_list'>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={home_img}
                        alt="home_img"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className='isc2_recent_posts_list_item_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={home_img}
                        alt="home_img"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className='isc2_recent_posts_list_item_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={home_img}
                        alt="home_img"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className='isc2_recent_posts_list_item_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className='isc2_recent_posts_list_item'>
                    <div className='isc2_recent_posts_list_item_img_container'>
                      <img
                        src={home_img}
                        alt="home_img"
                        className='isc2_recent_posts_list_item_img'
                      />
                    </div>
                    <div className='isc2_recent_posts_list_item_text_container'>
                      <p className='isc2_recent_posts_list_item_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ImpactStories;
