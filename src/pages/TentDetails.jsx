import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Users, Star, CheckCircle } from 'lucide-react';
import { tentsData } from '../tentsData';
import BookingForm from './BookingForm';

const TentDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const tent = tentsData.find(t => t.id === parseInt(id));
  if (!tent) {
    return <div className="py-8 px-4"><div className="text-center"><p style={{ color: '#64748b', fontSize: '1.1rem' }}>Tent not found.</p></div></div>;
  }
  const handleBooking = () => setShowBookingForm(true);
  return (
    <div className="py-8 px-4">
      <div className="card" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div className="grid grid-2" style={{ gap: 32 }}>
          <div>
            <img src={tent.image} alt={tent.name} style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
            <div style={{ marginTop: 24 }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>{tent.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#64748b', marginBottom: 12 }}><Users style={{ width: 20, height: 20 }} /><span>{tent.capacity}</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fbbf24', marginBottom: 12 }}><Star style={{ width: 20, height: 20 }} /><span>{tent.rating} rating</span></div>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2563eb', marginBottom: 16 }}>{tent.price} / day</p>
              <p style={{ color: '#64748b', marginBottom: 24 }}>{tent.description}</p>
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8 }}>Features:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {tent.features.map((feature, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', color: '#22c55e', borderRadius: 4, padding: '2px 8px', fontSize: 14, marginRight: 8, marginBottom: 4 }}>
                      <CheckCircle style={{ width: 14, height: 14, marginRight: 4 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{ padding: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 24 }}>Book This Tent</h2>
              {!showBookingForm ? (
                <div>
                  <div style={{ marginBottom: 16 }}>
                    <label>Select Date</label>
                    <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label>Number of Guests</label>
                    <select value={guests} onChange={e => setGuests(Number(e.target.value))}>
                      {[...Array(parseInt(tent.capacity))].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1} guest{i !== 0 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ background: '#f1f5f9', borderRadius: 8, padding: 16, marginBottom: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span>Price per day:</span>
                      <span style={{ fontWeight: 600 }}>{tent.price}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                      <span>Total:</span>
                      <span style={{ color: '#2563eb' }}>{tent.price}</span>
                    </div>
                  </div>
                  <button onClick={handleBooking} disabled={!selectedDate} className="btn" style={{ width: '100%', opacity: selectedDate ? 1 : 0.6, cursor: selectedDate ? 'pointer' : 'not-allowed' }}>Book Now</button>
                </div>
              ) : (
                <BookingForm tent={tent} selectedDate={selectedDate} guests={guests} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentDetails; 