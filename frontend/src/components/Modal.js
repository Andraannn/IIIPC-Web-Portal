import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/resources_modals.css';

const Modal = ({ show, onClose, title, children }) => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setClosing(false);
    }
  }, [show]);

  useEffect(() => {
    if (!show && visible) {
      setClosing(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [show, visible]);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && visible) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className={`modal-overlay ${closing ? 'fade-out' : ''}`} onClick={handleOverlayClick}>
      <div ref={modalRef} className={`modal-container ${closing ? 'slide-out' : ''}`}>
        <button className="modal-close-icon" onClick={onClose}>
          &times;
        </button>
        <h2 className='resmodal-title'>{title}</h2>
        <div className='resmodal-content'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

