import React from 'react';
import '../../styles/Monitoring.css';

const ProductCard = ({ number, pn, line, ct, time, status, processes }) => {
  return (
    <div className="product-card">
      <div className="product-details">
        <div className="product-header">
          <strong>Product NO : {number}</strong>
          <span>P/N: {pn}</span>
          <span>Line: {line}</span>
          <span>CT: {ct}</span>
          <span>{time}</span>
          <span className={`status-${status.toLowerCase()}`}>{status}</span>
        </div>

        <div className="product-process">
          {processes.map((proc, idx) => (
            <div key={idx} className="process-step">
              <div>Process {proc.step}</div>
              <div>{proc.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="product-video-placeholder">800 × 450</div>
    </div>
  );
};

export default ProductCard;
