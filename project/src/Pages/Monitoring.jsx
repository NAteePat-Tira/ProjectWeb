import React, { useState } from 'react';
import Filter from '../components/Monitoring/Filter';
import '../styles/Monitoring.css';
import CameraFeed from '../components/Monitoring/Camera';
import ProductCard from '../components/Monitoring/productCard';

const Monitoring = () => {
  // Filter states
  const [date, setDate] = useState('');
  const [product, setProduct] = useState('None');
  const [partNumber, setPartNumber] = useState('None');
  const [line, setLine] = useState('None');
  const [shift, setShift] = useState('None');
  const [process, setProcess] = useState('None');  

  const handleDateChange = (e) => setDate(e.target.value);
  const handleProductChange = (e) => setProduct(e.target.value);
  const handlePartChange = (e) => setPartNumber(e.target.value);
  const handleLineChange = (e) => setLine(e.target.value);
  const handleShiftChange = (e) => setShift(e.target.value);
  const handleProcessChange = (e) => setProcess(e.target.value);  

  const handleClearFilters = () => {
    setDate('');
    setProduct('None');
    setPartNumber('None');
    setLine('None');
    setShift('None');
    setProcess('None');  
  };

  // Mock data
  const products = [
    { id: 1, pn: 'ZG1234', line: 'A', shift: 'Shift 1', product: 'Gear', process: 'Process A' },
    { id: 2, pn: 'ZG2264', line: 'B', shift: 'Shift 2', product: 'Apple', process: 'Process B' },
    { id: 3, pn: 'ZG1234', line: 'A', shift: 'Shift 1', product: 'Gear', process: 'Process C' },
    { id: 4, pn: 'ZG2264', line: 'B', shift: 'Shift 2', product: 'Apple', process: 'Process A' },
  ];

  const filteredProducts = products.filter((p) => {
    return (
      (product === 'None' || p.product === product) &&
      (partNumber === 'None' || p.pn === partNumber) &&
      (line === 'None' || p.line === line) &&
      (shift === 'None' || p.shift === shift) &&
      (process === 'None' || p.process === process) 
    );
  });

  return (
    <div className="px-6 flex flex-col p-[30px] bg-gray-100 min-h-screen">
      <div className="ml-6">
        <Filter 
          date={date}
          product={product}
          partNumber={partNumber}
          shift={shift}
          line={line}
          process={process}  
          onDateChange={handleDateChange}
          onProductChange={handleProductChange}
          onPartChange={handlePartChange}
          onShiftChange={handleShiftChange}
          onLineChange={handleLineChange}
          onProcessChange={handleProcessChange}  
          onClearFilters={handleClearFilters}
        />
      </div>

      <div className="main-content">
        <div className="camera-section">
          <h3>Live Camera Feed</h3>
          <CameraFeed />
        </div>

        <div className="product-section">
          <h3>Monitoring Product</h3>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} number={product.id} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Monitoring;
