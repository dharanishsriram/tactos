// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const startups = [
    { name: 'InnovateX', sector: 'Tech', district: 'Chennai', shortDesc: 'AI-powered solutions', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', logo: '🚀', location: 'Chennai', stage: 'Seed', description: 'InnovateX is revolutionizing AI solutions for businesses.' },
    { name: 'GreenEco', sector: 'Environment', district: 'Coimbatore', shortDesc: 'Eco-friendly products', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', logo: '🌿', location: 'Coimbatore', stage: 'Series A', description: 'GreenEco specializes in sustainable and eco-friendly products.' }
  ];

  const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"
  ];

  const handleInterestedClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleStartupClick = (startup) => {
    setSelectedStartup(startup);
    setTimeout(() => {
      const element = document.getElementById("startup-detail-section");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner">
        <h1>Invest in Start-Ups</h1>
      </div>

      {/* Reasons Section */}
      <div className="reasons">
        <div className="reason-card">
          <div className="icon">🎯</div>
          <h2>High Growth Potential</h2>
        </div>
        <div className="reason-card">
          <div className="icon">📈</div>
          <h2>Portfolio Diversification</h2>
        </div>
        <div className="reason-card">
          <div className="icon">💰</div>
          <h2>Wealth Creation</h2>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters">
        <h2>Find your startup to invest in</h2>
        <div className="filter-controls">
          <select>
            <option>District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
          <select>
            <option>Sector</option>
          </select>
          <select>
            <option>Startup Stage</option>
          </select>
          <button>Search</button>
        </div>

        {/* Startup Cards */}
        <div className="startup-list">
          {startups.map((startup, index) => (
            <div key={index} className="startup-card" onClick={() => handleStartupClick(startup)}>
              <div className="startup-logo">{startup.logo}</div>
              <div>
                <h3>{startup.name}</h3>
                <p>{startup.sector} | {startup.district}</p>
                <p>{startup.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Startup View */}
      {selectedStartup && (
        <div id="startup-detail-section" className="startup-detail">
          <iframe
            className="startup-video"
            src={selectedStartup.video}
            title="Startup Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="startup-info">
            <div>
              <p><strong>Logo:</strong> {selectedStartup.logo}</p>
              <p><strong>Location:</strong> {selectedStartup.location}</p>
              <p><strong>Sector:</strong> {selectedStartup.sector}</p>
              <p><strong>Short Description:</strong> {selectedStartup.shortDesc}</p>
              <p><strong>Startup Stage:</strong> {selectedStartup.stage}</p>
            </div>
          </div>
          <div className="startup-description">
            <p>{selectedStartup.description}</p>
          </div>
          <div className="startup-actions">
            <button onClick={handleInterestedClick}>Interested</button>
            <div className="share-buttons">
  <a href="https://api.whatsapp.com/send?text=Check%20this%20amazing%20startup!" target="_blank" rel="noopener noreferrer">
    <img src="/assets/whatsapp.png" alt="WhatsApp" className="share-icon" />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img src="/assets/instagram.png" alt="Instagram" className="share-icon" />
  </a>
  <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
    <img src="/assets/share.png" alt="Share" className="share-icon" />
  </button>
</div>

          </div>
        </div>
      )}

      {/* Interested Form Popup */}
      {showForm && (
        <div className="form-popup">
          <div className="form-content">
            <h2>Interested in Investing</h2>
            <select className="form-input">
              <option>Individual</option>
              <option>Organization</option>
            </select>
            <input type="text" className="form-input" placeholder="Name / Organization Name" />
            <input type="email" className="form-input" placeholder="Email" />
            <input type="tel" className="form-input" placeholder="Phone Number" />
            <button className="submit-button">Submit</button>
            <button onClick={handleCloseForm} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
