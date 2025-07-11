import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Star } from 'lucide-react';

const TentCard = ({ tent, showDetails = false }) => {
  const navigate = useNavigate();
  return (
    <div className="card" tabIndex={0}>
      <img src={tent.image} alt={tent.name} />
      <div className="card-content">
        <h3 className="card-title">{tent.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', marginBottom: 8 }}>
          <Users style={{ width: 18, height: 18 }} />
          <span>{tent.capacity}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', marginBottom: 8 }}>
          <Star style={{ width: 18, height: 18 }} />
          <span>{tent.rating}</span>
        </div>
        <p style={{ color: '#2563eb', fontWeight: 600, marginBottom: 12 }}>{tent.price} / day</p>
        {showDetails && <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: 12 }}>{tent.description}</p>}
        <button onClick={() => navigate(`/tent/${tent.id}`)} className="btn" style={{ width: '100%' }}>
          {showDetails ? 'Book Now' : 'View Details'}
        </button>
      </div>
    </div>
  );
};

export default TentCard;
