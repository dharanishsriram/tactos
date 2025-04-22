import React, { useState } from 'react';
import './App.css';

const districts = ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"];

const modes = ["Remote", "Hybrid", "On-site"];
const jobTypes = ["Part-time", "Full-time", "Internship"];
const startupStages = ["Ideation", "Pre-seed", "Seed", "Series A", "Series B", "Series C"];

function App() {
  const [tab, setTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <button onClick={() => setTab('profile')}>Profile</button>
        <button onClick={() => setTab('job')}>Job Portal</button>
        <button onClick={() => setTab('funding')}>Funding</button>
      </aside>
      <main className="main">
        <h1>Startup Dashboard</h1>
        {tab === 'profile' && (
          <form className="form" onSubmit={handleUpdate}>
            <h2>General Information</h2>
            <input placeholder="Logo (upload)" type="file"  />
            <input placeholder="Name" />
            <input placeholder="Phone number"  />
            <input placeholder="Email address"  />
            <input placeholder="Username"  />
            <input placeholder="Password" type="password"  />
            <textarea placeholder="Short description" ></textarea>
            
              <button type="button" onClick={handleEdit}>Edit</button>
            
              <button type="submit">Update</button>
            
          </form>
        )}

        {tab === 'job' && (
          <form className="form" onSubmit={handleUpdate}>
            <h2>Job Portal</h2>
            <input placeholder="Position title"  />
            <input type="file" placeholder="Job Image Upload" />
            <select >
              {districts.map(d => <option key={d}>{d}</option>)}
            </select>
            <select >
              {modes.map(m => <option key={m}>{m}</option>)}
            </select>
            <input placeholder="Salary"  />
            <select >
              {jobTypes.map(j => <option key={j}>{j}</option>)}
            </select>
            <input placeholder="Keywords (3 words max)"  />
            <textarea placeholder="Short Description" />
            <textarea placeholder="Job Description"  />
            
              <button type="button" onClick={handleEdit}>Edit</button>
            
              <button type="submit">Update</button>
            
          </form>
        )}

        {tab === 'funding' && (
          <form className="form" onSubmit={handleUpdate}>
            <h2>Funding</h2>
            <input placeholder="YouTube Link"  />
            <select >
              {districts.map(d => <option key={d}>{d}</option>)}
            </select>
            <input placeholder="Sector"  />
            <textarea placeholder="Short Description"  />
            <input type="file" placeholder="Upload Logo"  />
            <select >
              {startupStages.map(s => <option key={s}>{s}</option>)}
            </select>
            <textarea placeholder="Long Description"  />
            
              <button type="button" onClick={handleEdit}>Edit</button>
            
              <button type="submit">Update</button>
            
          </form>
        )}
      </main>
    </div>
  );
}

export default App;
