import React, { useState } from 'react';
import TentCard from '../components/TentCard';
import { tentsData } from '../tentsData';

const Tents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(20000);
  const filteredTents = tentsData.filter(tent => tent.name.toLowerCase().includes(searchTerm.toLowerCase()) && tent.pricePerDay <= maxPrice);
  return (
    <div className="py-8 px-4">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Available Tents</h1>
      </div>
      <div className="card mb-8" style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="grid grid-2">
          <div>
            <label>Search Tents</label>
            <input type="text" placeholder="Search by name..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div>
            <label>Max Price: Rs. {maxPrice}</label>
            <input type="range" min="5000" max="20000" step="1000" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
          </div>
        </div>
      </div>
      <div className="grid grid-3">
        {filteredTents.map(tent => <TentCard key={tent.id} tent={tent} />)}
      </div>
      {filteredTents.length === 0 && <div className="text-center py-8"><p style={{ color: '#64748b', fontSize: '1.1rem' }}>No tents found matching your criteria.</p></div>}
    </div>
  );
};

export default Tents;
