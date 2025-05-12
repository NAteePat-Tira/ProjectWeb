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

      <div className="product-video">
        <iframe
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          width="800"
          height="450"
          allow="autoplay"
          title={`Product ${number} Video`}
        ></iframe>
      </div>
    </div>
  );
};
