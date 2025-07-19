import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import BackToTopButton from './components/BackToTopButton';


// This component handles route rendering and conditional UI
const AppContent = () => {
  const location = useLocation();

  // Show BackToTopButton only on Home and About pages
  const showBackToTop =
    location.pathname === '/' || location.pathname === '/about';

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Conditionally render the button */}
      {showBackToTop && <BackToTopButton />}
    </div>
  );
};

// Root App with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
