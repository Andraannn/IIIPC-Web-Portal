import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import faqImage from '../assets/img/faq-image.jpg';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
  ];

  return (
    <div className="faq-container">
      <div className='faq-left'>
        <img src={faqImage} alt="FAQ" className='faq-image' />
      </div>
      <div className='faq-right'>
        <h1 className="faq-title">Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className={`arrow ${activeIndex === index ? 'rotated' : ''}`}>
                <FaChevronDown />
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
