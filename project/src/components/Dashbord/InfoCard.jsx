import React, { useEffect, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import "../../styles/Dashbord.css"; 

const InfoCard = ({ title, value, unit, change, status }) => {
    const isUp = status === 'up';
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        // Animate number from 0 to the final value
        let startValue = 0;
        let endValue = value; // Final value to reach
        let duration = 200; // 0.5 seconds animation duration
        let stepTime = 2; // Update every 5ms for smoother animation

        const increment = (endValue - startValue) / (duration / stepTime); // Calculate increment

        const interval = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
                clearInterval(interval);
                setAnimatedValue(endValue); // Ensure it ends exactly at the value
            } else {
                setAnimatedValue(Math.round(startValue)); // Update animated value
            }
        }, stepTime);
    }, [value]);

    return (
      <div className="info-card">
        
        {/* Vertical Bar */}
        <div className={`vertical-bar ${isUp ? 'up' : 'down'}`}></div>
  
        {/* Content */}
        <div className="info-content">
          <div className="info-header">
            <div className="info-title">{title}</div>
            {/* <div className="info-icon">📦</div> เปลี่ยนไอคอนได้ */}
          </div>
  
          <div className="info-value" style={{ '--final-value': value }}>
            {animatedValue}
            <span className="info-unit">{unit}</span>
          </div>
  
          <div className={`info-change ${isUp ? 'positive' : 'negative'}`}>
            {isUp ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
           <span className="change-value">{change}</span>
           <span className="change-text">Since Yesterday</span>
        </div>

  
        </div>
      </div>
    );
};

export default InfoCard;
