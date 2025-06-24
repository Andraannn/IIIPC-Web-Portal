import React from 'react';
import '../assets/css/contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

const Contact = () => (
  <>
  <div className='page-container'>
    <Header />
    <main className='main-content'>
        <h1>Contact Us</h1>
        <p>This is the Contact Us page.</p>
    </main>
    <Footer />
  </div>
  </>
);

export default Contact;
