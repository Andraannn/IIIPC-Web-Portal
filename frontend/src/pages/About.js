import React from 'react';
import '../assets/css/about.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';
import officeImage from '../assets/img/office.jpg';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';

const About = () => (
  <>
  <div className='page-container'>
    <Header/>
    <main className='main-content'>
        <div className="about-container">
          <div className="about-description">
              <h1>ABOUT US</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="about-btn">Learn More</button>
          </div>
          <div className="about-image">
              <img src={officeImage} alt="The Office" />
          </div>
      </div>
      <div className="services-container">
          <h1>OUR SERVICES</h1>
          <div className="services-list">
              <div className="service-item">
                  <FaReact size={50} color="#fff" />
                  <h3>Service 1</h3>
              </div>
              <div className="service-item">
                  <FaNodeJs size={50} color="#fff" />
                  <h3>Service 2</h3>
              </div>
              <div className="service-item">
                  <FaDocker size={50} color="#fff" />
                  <h3>Service 3</h3>
              </div>
          </div>
      </div>
      <div className='faq-container'>
        <FAQAccordion />
      </div>
      <div className="location-container">
          <div className="location-left">
              <h1>WHERE TO FIND US</h1>
          </div>
          <div className="location-right">
              <iframe 
                  title="Our Location Map"
                  width="600" 
                  height="450" 
                  style={{border:0}} 
                  loading="lazy" 
                  allowFullScreen 
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=8.2270143,124.2540321&hl=en&z=18&output=embed"
              />
          </div>
      </div>
    </main>
    <Footer />
  </div>
  </>
);

export default About;
