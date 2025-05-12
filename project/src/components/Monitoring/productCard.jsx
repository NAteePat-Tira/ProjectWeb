import React from 'react';
import '../../styles/monitoring.css';

const ProductCard = ({ number, pn, line, ct, time, status, processes, videoId }) => {
  return (
    <div className="product-card">
      <div className="product-details">
        <div className="product-header">
          <strong>Product NO : {number}</strong>
          <span>P/N: {pn}</span>
          <span>Line: {line}</span>
          <span>CT: {ct}</span>
          <span>{time}</span>
          <span
            className={`min-w-[30px] text-center inline-block px-3 py-1 rounded font-semibold ${
              status === 'NG'
                ? 'bg-red-500 text-white'
                : status === 'OK'
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-black'
            }`}
          >
            {status}
          </span>

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

      <div className="product-video">
        <iframe
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          width="150"
          height="100"
          allow="autoplay"
          title={`Product ${number} Video`}
        ></iframe>
      </div>
    </div>
  );
};

// Export the component as default
export default ProductCard;
