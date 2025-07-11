import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-section">
        <h3 className="text-xl font-bold mb-4">Tent House Booking</h3>
        <p className="text-gray-300">
          Your premier destination for quality tent rentals and event solutions.
        </p>
      </div>
      <div className="footer-section">
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tents">Tents</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center"><Phone style={{ width: 16, height: 16, marginRight: 8 }} />+977-9876543210</p>
          <p className="flex items-center"><Mail style={{ width: 16, height: 16, marginRight: 8 }} />info@tenthousebooking.com</p>
          <p className="flex items-center"><MapPin style={{ width: 16, height: 16, marginRight: 8 }} />Kathmandu, Nepal</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 Online Tent House Booking System. BSc.CSIT 7th Semester Project.</p>
    </div>
  </footer>
);

export default Footer; 