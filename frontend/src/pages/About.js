import React from 'react';
import '../assets/css/about.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';
import officeImage from '../assets/img/office2.jpg';
import { FaFaucet } from 'react-icons/fa';
import { MdElectricBolt } from 'react-icons/md';
import { FaHouse } from 'react-icons/fa6';

const realEstateData = [
  { title: 'Residential', from: '110.00', to: '5,230.00' },
  { title: 'Industrial', from: '560.00', to: '1,410.00' },
  { title: 'Commercial', from: '9,840.00', to: '14,060.00' },
  { title: 'Subdivision', from: '4,520.00', to: '2,510.00' },
];

const About = () => (
  <>
    <div className='page-container'>
      <Header />
      <main className='main-content'>
        <div className="about-container">
          <div className="about-description">
            <h1>ABOUT US</h1>
            <h2><i>The LEDIP Office is your center for promotion of economic development and investments in Iligan City.</i></h2>
            <p>
                We serve as the primary agency facilitating business growth, investment opportunities, and sustainable economic initiatives. Our office provides support to investors, promotes local industries, and ensures a conducive environment for economic progress in the city.
            </p>
          </div>
          <div className="about-image">
            <img src={officeImage} alt="LEDIP Office-Iligan" />
          </div>
        </div>

        <div className="services-container">
          <h1>COST OF DOING BUSINESS</h1>

          {/* Power Rates */}
          <h2>Power Rates:</h2>
          <div className="services-list">
            {[
              { name: 'Residential', rate: '10.3442' },
              { name: 'Industrial', rate: '10.1420' },
              { name: 'Commercial', rate: '10.2913' },
              { name: 'Flat Rate', rate: '9.9404' },
              { name: 'Bulk Power', rate: '8.8171' },
            ].map((item, index) => (
              <div key={index} className="service-item">
                <MdElectricBolt size={70} color="#fff" />
                <h3>{item.name}</h3>
                <p><span>KWH:</span> {item.rate}</p>
              </div>
            ))}
          </div>

          {/* Water Rates */}
          <h2>Water Rates:</h2>
          <div className="services-list">
            {[
              {
                name: 'Domestic',
                rates: ['2.00', '2.30', '2.80', '3.40', '4.10'],
              },
              {
                name: 'Commercial',
                rates: ['4.00', '4.60', '5.60', '6.80', '8.20'],
              },
              {
                name: 'Industrial',
                rates: ['192.60', '6.90', '8.40', '10.20', '12.30'],
              },
            ].map((item, index) => (
              <div key={index} className="service-item">
                <FaFaucet size={70} color="#fff" />
                <h3>{item.name}</h3>
                <div className='service-item-details'>
                  <p><span>0-10 cu.m:</span> {item.rates[0]}</p>
                  <p><span>11-20 cu.m:</span> {item.rates[1]}</p>
                  <p><span>21-30 cu.m:</span> {item.rates[2]}</p>
                  <p><span>31-40 cu.m:</span> {item.rates[3]}</p>
                  <p><span>Above 40 cu.m:</span> {item.rates[4]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Estate Section */}
        <section className="real-estate-section">
          <h2 className="section-title">Real Estate</h2>
          <p className="section-subtitle">
            Cost of Rent for Commercial / Office Space = <strong>458.00 Php</strong> (CBD) per php square meter per month
          </p>
          <h4 className="section-label">Land Classification and Market Value:</h4>

          <div className="real-estate-grid">
            {realEstateData.map((item, index) => (
              <div key={index} className="real-estate-card">
                <div className="real-estate-icon">
                  <FaHouse size={36} color="white" />
                </div>
                <div className="real-estate-info">
                  <h3>{item.title}</h3>
                  <p>
                    <span className="from">From:</span> {item.from}{' '}
                    <span className="to">To:</span> {item.to}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location Map */}
        <div className="location-container">
          <div className="location-left">
            <h1>WHERE TO FIND US</h1>
          </div>
          <div className="location-right">
            <iframe
              title="Our Location Map"
              width="600"
              height="450"
              style={{ border: 0 }}
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
