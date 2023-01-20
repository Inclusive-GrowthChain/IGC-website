import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Modal } from '@mui/material';

import logo from '../assets/logo/4.png';

import './css/careers.css';

const job_details = [
  {
    index: 1,
    title: "Android Developer",
    sector: "Deep Tech",
    location: "Indian School of Business Hyderabad",
    jobType: "Full Time",
    responsibilities: [
      "Ability to translate Wireframes and PSD Designs into a functional app.",
      "Staying up to date with new mobile technology trends, applications, and protocols.",
      "Writing clean and efficient codes for Android applications, following best practices and conventions.",
      "Designing and building scalable applications from end to end.",
      "Ability to quickly build proofs-of-concept with production-level standards.",
      "Working with external software libraries and APIs.",
      "Willing to work independently and take responsibility for the deliverables.",
    ],
    essentialQualifications: [
      "Graduation in Computer Science, Information Science, or similar.",
      "1+ years of experience as an Android developer.",
      "Excellent knowledge of the Java or Kotlin programming language.",
      "Solid hands-on experience in Mobile application development tools and environments (Android Studio).",
      "Understanding of Google’s Android design principles and interface guidelines.",
    ],
    desiredQualifications: [
      "Rest API, SQLite.",
      "Experience in jetpack components.",
      "Familiarity with cloud message APIs and push notifications.",
      "Basics of firebase.",
      "Familiarity with mobile applications and development, including the use of hardware such as accelerometers, cameras, and gyroscopes.",
      "GitHub",
    ],
  },
  {
    index: 2,
    title: "Blockchain Developer",
    sector: "Deep Tech",
    location: "Indian School of Business Hyderabad",
    jobType: "Full Time",
    responsibilities: [
      "Participate in the design, development, evaluation, and deployment of decentralized solutions.",
      "Develop, test, and deploy smart contracts across an array of domains.",
      "Develop high-quality code that is maintainable, performant, and accessible.",
      "Brainstorm and help evaluate applications for new tools and technologies as they continually evolve.",
      "Should explain blockchain concept to clients in simple terms.",
      "Demonstrate a good understanding of Blockchain fundamentals, the blockchain ecosystem, deployment topology and architectures, smart contracts, and consensus algorithms.",
    ],
    essentialQualifications: [
      "Graduation in Computer Science, Information Science, or similar.",
      "1+ years of experience in Hyperledger Fabric, and Node.js/Go.",
      "Hands-on experience in MongoDB.",
      "Solid foundation in computer science with strong competency in OOPS, data structures, algorithms, and software design.",
      "Experience in designing and developing RESTful APIs.",
      "Experience in using cloud infrastructure (AWS) and Linux-based platforms like Ubuntu.",
    ],
    desiredQualifications: [
      "Experience in developing Blockchain applications or proof-of-concept (POC) using Hyperledger Fabric, Blockchain-based App Development, and Token Development.",
      "Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js).",
      "Unix/Linux systems experience.",
      "Strong in HTML5, CSS3, and JSON.",
      "Working knowledge of Ethereum (Solidity).",
      "Experience in GitHub, CI/CD, DevOps – Jenkins, and Git.",
      "Requirements Gathering, Experience in Client Interaction, etc.",
      "Strong understanding and experience in developing, smart contracts, and consensus algorithms.",
      "Experience in application architecture and API-based integration.",
      "Being a Certified Hyperledger Fabric Administrator would be an added advantage.",
    ],
  },
  {
    index: 3,
    title: "Backend Developer",
    sector: "Deep Tech",
    location: "Indian School of Business Hyderabad",
    jobType: "Full Time",
    responsibilities: [
      "Writing clean, high-quality, high-performance, maintainable code.",
      "Strong proficiency with JavaScript and Node.js.",
      "Understanding business logic and taking ownership of software development, including backend database and architecture development.",
      "Ability to quickly build proofs-of-concept with production-level standards.",
      "Should be willing to learn Hyperledger Fabric.",
    ],
    essentialQualifications: [
      "Graduation in Computer Science, Information Science, or similar.",
      "1+ years of experience in Node.js.",
      "Solid foundation in computer science with strong competency in OOPS, data structures, algorithms, and software design.",
      "Experience in MongoDB.",
      "Experience in designing and developing RESTful APIs.",
      "Working experience with AWS Cloud (EC2, S3, IAM, Load Balancer).",
    ],
    desiredQualifications: [
      "Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js).",
      "Unix/Linux systems experience.",
      "Strong in HTML5, CSS3, and JSON.",
      "Experience in GitHub, CI/CD, DevOps – Jenkins, and Git.",
      "Requirements Gathering, Experience in Client Interaction, etc.",
    ],
  },
  {
    index: 4,
    title: "User Interface Developer",
    sector: "Deep Tech",
    location: "Indian School of Business Hyderabad",
    jobType: "Full Time",
    responsibilities: [
      "Have to create a web app from scratch from the stage of the idea.",
      "Should be able to work alone and in a team based on the requirements.",
      "End-to-end engineering design, development, testing, and deployment for the UI work.",
      "Developing functional web pages from UI/UX designs.",
      "Resolve defects/bugs during testing, pre-production, production, and post-release patches.",
      "Build features and applications with a mobile responsive design.",
      "Integrating front-end UI with the constructed API.",
    ],
    essentialQualifications: [
      "Graduation in Computer Science, Information Science, or similar.",
      "1+ years of experience in React.js.",
      "Strong in HTML5, CSS3, JSON, and REST web services.",
    ],
    desiredQualifications: [
      "Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js).",
      "Experience with popular React.js workflows (such as Flux or Redux).",
      "Experience in working on maps.",
      "Unix/Linux systems experience.",
      "Experience in Git, and GitHub.",
      "Basic cloud skills.",
      "Requirements Gathering, Experience in Client Interaction, etc.",
    ],
  }
];

const Careers = () => {
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [currentJob, setCurrentJob] = useState(job_details[0]);

  const handleShowJobDetails = () => setShowJobDetails(true);
  const handleCloseJobDetails = () => setShowJobDetails(false);

  return (
    <div className='careers_main_container'>
      <div className='careers_container_1'>
        <div className='csc1_title'>
          Careers
        </div>
        <div className='csc1_text'>
          Home &nbsp; {'>'}{'>'} &nbsp; Careers
        </div>
      </div>
      <div className='careers_container_2'>
        <div className='careers_card_container'>
          {
            job_details.map((job) => (
              <div className='careers_card_inner_container'>
                <Card className='careers_card'>
                  <CardContent>
                    <div className='careers_card_logo_container'>
                      <img src={logo} className='careers_card_logo' />
                    </div>
                    <div className='careers_card_company_container'>
                      <b>Inclusive Growth Chain</b> (Twinsset Private Limited)
                    </div>
                    <div className='careers_card_title'>
                      {job.title}
                    </div>
                    <div className='careers_card_content_container'>
                      <ul className='careers_card_info_list'>
                        <li><b>Sector: </b>{job.sector}</li>
                        <li><b>Job Location: </b>Indian School of Business, Hyderabad</li>
                        <li><b>Job Type: </b>{job.jobType}</li>
                      </ul>
                    </div>
                    <div className='careers_card_button' onClick={() => {
                      setCurrentJob(job);
                      handleShowJobDetails();
                    }}>
                      View Details
                    </div>
                  </CardContent>
                </Card>
                <Modal className='careers_modal' open={showJobDetails} onClose={handleCloseJobDetails}>
                  <div className='careers_modal_container'>
                    <div className='careers_modal_title'>
                      {currentJob.title}
                    </div>
                    <div className='careers_modal_content_container'>
                      <p className='careers_modal_p'>
                        <b>Job Title:</b> {currentJob.title}
                      </p>
                      <p className='careers_modal_p'>
                        <b>Company:</b> Inclusive Growth Chain (Twinsset Private Limited)
                      </p>
                      <p className='careers_modal_p'>
                        <b>Sector:</b> {currentJob.sector}
                      </p>
                      <p className='careers_modal_p'>
                        <b>Job Location:</b> {currentJob.location}
                      </p>
                      <p className='careers_modal_p'>
                        <b>Job Type:</b> {currentJob.jobType}
                      </p>
                      <p className='careers_modal_p'>
                        <b>About the Startup:</b> Inclusive Growth Chain is an innovative technology company that aims to create an impact through Blockchain, Artificial Intelligence, Machine Learning, and IoT technologies. It has a solid track record of implementing blockchain-enabled services in the areas of financial inclusion, healthcare, women empowerment, education, and environmental sciences. The company was incubated initially at the University of Hyderabad and later at the Indian School of Business, Hyderabad. Inclusive Growth Chain has a record of winning the International Blockchain Hackathon in Dubai and the NPCI Blockchain Hackathon in India.
                      </p>
                      <p className='careers_modal_p'>
                        <b>Website:</b> <a href='https://www.inclusivegrowthchain.com/' target='_blank'>https://www.inclusivegrowthchain.com/</a>
                      </p>
                      <p className='careers_modal_p'>
                        <b>Responsibilities and Duties:</b>
                        <ul>
                          {
                            currentJob.responsibilities.map((resp) => (
                              <li>{resp}</li>
                            ))
                          }
                        </ul>
                      </p>
                      <p className='careers_modal_p'>
                        <b>Requirements:</b><br />
                        <p>
                          <u>Essential Qualifications:</u>
                          <ul>
                            {
                              currentJob.essentialQualifications.map((eq) => (
                                <li>{eq}</li>
                              ))
                            }
                          </ul>
                        </p>
                        <p>
                          <u>Desirable Qualifications:</u>
                          <ul>
                            {
                              currentJob.desiredQualifications.map((dq) => (
                                <li>{dq}</li>
                              ))
                            }
                          </ul>
                        </p>
                      </p>
                      <p className='careers_modal_p'>
                        <b>Send your CV to: </b>admin@inclusivegrowthchain.com
                      </p>
                    </div>
                  </div>
                </Modal>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Careers;
