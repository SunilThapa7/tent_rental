import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const BookingForm = ({ tent, selectedDate, guests }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', specialRequests: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); console.log('Booking submitted:', { ...formData, tent, selectedDate, guests }); setIsSubmitted(true); };
  if (isSubmitted) {
    return (
      <div className="text-center" style={{ padding: '2rem 0' }}>
        <CheckCircle style={{ width: 64, height: 64, color: '#22c55e', margin: '0 auto 1rem auto' }} />
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 8 }}>Booking Confirmed!</h3>
        <p style={{ color: '#64748b', marginBottom: 16 }}>
          Your booking for {tent.name} on {selectedDate} has been received.
        </p>
        <p style={{ fontSize: 14, color: '#94a3b8' }}>
          We'll contact you shortly to confirm the details.
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name *</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Email *</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Phone Number *</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Address *</label>
        <textarea name="address" value={formData.address} onChange={handleInputChange} required rows={3} />
      </div>
      <div>
        <label>Special Requests</label>
        <textarea name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} rows={3} />
      </div>
      <div style={{ background: '#f1f5f9', borderRadius: 8, padding: 16, marginBottom: 16 }}>
        <h4 style={{ fontWeight: 600, marginBottom: 8 }}>Booking Summary:</h4>
        <p><strong>Tent:</strong> {tent.name}</p>
        <p><strong>Date:</strong> {selectedDate}</p>
        <p><strong>Guests:</strong> {guests}</p>
        <p><strong>Total:</strong> {tent.price}</p>
      </div>
      <button type="submit" className="btn" style={{ width: '100%' }}>Confirm Booking</button>
    </form>
  );
};

export default BookingForm; 