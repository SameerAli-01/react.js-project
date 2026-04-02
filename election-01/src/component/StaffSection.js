import React from 'react';
import './StaffSection.css';
import { Plus } from 'lucide-react'; // Install using: npm install lucide-react

import StaffImg1 from '../images/Staffimage1.jpeg'
import StaffImg2 from '../images/Staffimage2.jpeg'
import StaffImg3 from '../images/Staffimage3.jpeg'
import StaffImg4 from '../images/Staffimage4.jpeg'

const StaffSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Harry Abraham',
      role: 'Founder',
      image: StaffImg1
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Campaign Manager',
      image: StaffImg2
    },
    {
      id: 3,
      name: 'Robert Wilson',
      role: 'Lead Designer',
      image: StaffImg3
    },
    {
      id: 4,
      name: 'Emma Davis',
      role: 'Media Strategist',
      image: StaffImg4
    }
  ];

  return (
    <section className="staff-container">
      <span className="sub-title">— TEAM MEMBERS —</span>
      <h2 className="main-title">Campaign Staff</h2>

      <div className="staff-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} className="member-image" />
            
            <div className="member-overlay">
              <div className="overlay-info">
                <span className="role-text">{member.role}</span>
                <h3 className="name-text">{member.name}</h3>
                <div className="plus-btn">
                  <Plus size={20} color="white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;