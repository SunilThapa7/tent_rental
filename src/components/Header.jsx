import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="text-xl font-bold">Tent House Booking</Link>
        <nav className="navbar">
          <Link to="/" >Home</Link>
          <Link to="/tents" >Tents</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact</Link>
          <Link to="/login" >Login</Link>
        </nav>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
          <span className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/tents" onClick={() => setIsMenuOpen(false)}>Tents</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </nav>
      )}
    </header>
  );
};

export default Header; 