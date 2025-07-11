import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); console.log('Contact form submitted:', formData); alert('Thank you for your message! We\'ll get back to you soon.'); setFormData({ name: '', email: '', subject: '', message: '' }); };
  return (
    <div className="py-8 px-4">
      <div className="card" style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 className="text-center mb-8" style={{ fontSize: '2rem', fontWeight: 700 }}>Contact Us</h1>
        <div className="grid grid-2">
          <div className="footer-section">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 24 }}>Get in Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}><Phone style={{ width: 20, height: 20, color: '#2563eb', marginRight: 12 }} /><div><p style={{ fontWeight: 600 }}>Phone</p><p style={{ color: '#64748b' }}>+977-9876543210</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}><Mail style={{ width: 20, height: 20, color: '#2563eb', marginRight: 12 }} /><div><p style={{ fontWeight: 600 }}>Email</p><p style={{ color: '#64748b' }}>info@tenthousebooking.com</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}><MapPin style={{ width: 20, height: 20, color: '#2563eb', marginRight: 12 }} /><div><p style={{ fontWeight: 600 }}>Address</p><p style={{ color: '#64748b' }}>Kathmandu, Nepal</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}><Clock style={{ width: 20, height: 20, color: '#2563eb', marginRight: 12 }} /><div><p style={{ fontWeight: 600 }}>Business Hours</p><p style={{ color: '#64748b' }}>Mon - Fri: 9:00 AM - 6:00 PM</p><p style={{ color: '#64748b' }}>Sat - Sun: 10:00 AM - 4:00 PM</p></div></div>
            </div>
          </div>
          <div className="footer-section">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 24 }}>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div>
                <label>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div>
                <label>Subject *</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required />
              </div>
              <div>
                <label>Message *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5" />
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 