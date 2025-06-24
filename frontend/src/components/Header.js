import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';
import logo from '../assets/img/IIIPC_Logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="IIIPC Logo" />
            <span className="logo-text">IIIPC</span>
          </Link>
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={handleHamburgerClick}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <li className={window.location.pathname === '/' ? 'active' : ''}><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className={window.location.pathname === '/about' ? 'active' : ''}><Link to="/about" onClick={closeMenu}>About</Link></li>
          {/* <li className={window.location.pathname === '/contact' ? 'active' : ''}><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;