// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/tents">Tents</Link>
      <Link to="#">About</Link>
      <Link to="#">Contact</Link>
      <Link to="#">Login</Link>
    </nav>
  );
}
