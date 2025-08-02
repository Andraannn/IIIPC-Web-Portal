/**
 * Developed by: Andrei Gabrielle A. Adlawan
 * Copyright © 2025 Andrei Gabrielle A. Adlawan
 * License terms in LICENSE.txt
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import BackToTopButton from './components/BackToTopButton';


const AppContent = () => {
  const location = useLocation();

  const showBackToTop =
    location.pathname === '/' || location.pathname === '/about';

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showBackToTop && <BackToTopButton />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
