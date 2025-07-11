import React from 'react';
import { useNavigate } from 'react-router-dom';
import TentCard from '../components/TentCard';
import { tentsData } from '../tentsData';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="hero-section">
        <div className="text-center">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16 }}>Online Tent House Booking System</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: 24 }}>Book Tent Onliner</p>
          <div className="hero-box">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16 }}>Welcome to Online Tent House Booking</h2>
            <p style={{ marginBottom: 24 }}>Book tents for your weddings, parties, and events with ease!</p>
            <button onClick={() => navigate('/tents')} className="btn">View Available Tents</button>
          </div>
        </div>
      </section>
      <section className="py-8 px-4" style={{ background: '#f1f5f9' }}>
        <div className="text-center mb-8">
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Available Tents</h2>
        </div>
        <div className="grid grid-3">
          {tentsData.slice(0, 3).map(tent => <TentCard key={tent.id} tent={tent} />)}
        </div>
        <div className="text-center mt-8">
          <button onClick={() => navigate('/tents')} className="btn">View All Tents</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
