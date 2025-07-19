import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../assets/css/BackToTopButton.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
        <FaArrowUp />
      </button>
    )
  );
};

export default BackToTopButton;
