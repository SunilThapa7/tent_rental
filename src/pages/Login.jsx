import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '', phone: '' });
  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); console.log(isLogin ? 'Login submitted:' : 'Register submitted:', formData); alert(isLogin ? 'Login successful!' : 'Registration successful!'); };
  return (
    <div className="py-8 px-4">
      <div className="card" style={{ maxWidth: 400, margin: '0 auto' }}>
        <h1 className="text-center mb-8" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{isLogin ? 'Login' : 'Register'}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && <div><label>Full Name</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} required /></div>}
          <div><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} required /></div>
          <div><label>Password</label><input type="password" name="password" value={formData.password} onChange={handleInputChange} required /></div>
          {!isLogin && <div><label>Phone Number</label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required /></div>}
          <button type="submit" className="btn" style={{ width: '100%' }}>{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <div className="text-center mt-8">
          <p style={{ color: '#64748b' }}>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
          <button onClick={() => setIsLogin(!isLogin)} className="btn" style={{ background: 'transparent', color: '#2563eb', boxShadow: 'none', marginTop: 8 }}>{isLogin ? 'Register here' : 'Login here'}</button>
        </div>
      </div>
    </div>
  );
};

export default Login; 