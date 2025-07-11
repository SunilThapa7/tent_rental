import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => (
  <div className="py-8 px-4">
    <div className="card" style={{ maxWidth: 700, margin: '0 auto' }}>
      <h1 className="text-center mb-8" style={{ fontSize: '2rem', fontWeight: 700 }}>About Us</h1>
      <div className="mb-8">
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16 }}>Welcome to Online Tent House Booking</h2>
        <p style={{ marginBottom: 16 }}>
          We are a premier tent rental service provider, specializing in making your special events memorable with our high-quality tents and exceptional service. Whether you're planning a wedding, corporate event, birthday party, or any celebration, we have the perfect tent to meet your needs.
        </p>
        <p style={{ marginBottom: 16 }}>
          This project is developed as part of BSc.CSIT 7th Semester coursework, showcasing modern web development techniques and user-friendly design principles.
        </p>
      </div>
      <div className="grid grid-2">
        <div className="footer-section">
          <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Our Services</h3>
          <ul>
            <li><CheckCircle style={{ width: 16, height: 16, color: '#22c55e', marginRight: 8 }} />Wedding Tent Rentals</li>
            <li><CheckCircle style={{ width: 16, height: 16, color: '#22c55e', marginRight: 8 }} />Corporate Event Tents</li>
            <li><CheckCircle style={{ width: 16, height: 16, color: '#22c55e', marginRight: 8 }} />Party & Celebration Tents</li>
            <li><CheckCircle style={{ width: 16, height: 16, color: '#22c55e', marginRight: 8 }} />Setup & Decoration Services</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Why Choose Us?</h3>
          <ul>
            <li><CheckCircle style={{ width: 16, height: 16, color: '#22c55e', marginRight: 8 }} />Quality Tents & Equipment</li>
            <li><CheckCircle style={{ width: 16, height: 16, color: '#22c55e', marginRight: 8 }} />Professional Setup Team</li>
            <li><CheckCircle style={{ width: 16, height: 16, color: '#22c55e', marginRight: 8 }} />Competitive Pricing</li>
            <li><CheckCircle style={{ width: 16, height: 16, color: '#22c55e', marginRight: 8 }} />24/7 Customer Support</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About; 