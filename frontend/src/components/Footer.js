import React from 'react';
import '../assets/css/footer.css';
import logo1 from '../assets/img/IIIPC_Logo.png';
import logo2 from '../assets/img/iligan_seal.png';
import { FaFacebook, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-images">
            <img src={logo1} alt="Iligan City Logo" />
            <img src={logo2} alt="IIIPC Logo" />
          </div>
          <span className="footer-text">
            Iligan Investment Incentives and Promotions Center
          </span>
          <div className="footer-contact">
            <p>
              <strong>Address:</strong> Ground Floor, Mejia Bldg., Pala-o, Iligan City, 9200 Lanao del Norte, Philippines
            </p>
            {/* <p>
              <strong>Contact Number:</strong> <i>(063) insert number</i>
            </p> */}
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:iiipc@iligan.gov.ph">iiipc@iligan.gov.ph</a>
            </p>
          </div>
        </div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/iliganInvestmentsandPromotionsCenter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} color="#fff" className='social-icon'/>
          </a>
          <a
            href="https://iligan.gov.ph/forbusiness/iiipc?3993053"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size={24} color="#fff" className='social-icon'/>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Iligan Investment Incentives and Promotions Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
