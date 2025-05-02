import React , { useState } from "react";
import ProcessGraph from "../components/cycle Time/ProcessGraph";
import "../styles/CycleTime.css"; 
import Filter from '../components/Monitoring/Filter';

const sampleData = [
  { step: 10, value: 50 },
  { step: 9, value: 120 },
  { step: 8, value: 180 },
  { step: 7, value: 220 },
  { step: 6, value: 300 },
  { step: 5, value: 450 },
  { step: 4, value: 500 },
  { step: 3, value: 300 },
  { step: 2, value: 200 },
  { step: 1, value: 100 },
];



const CycleTime = () => {

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


      <div className="cycle-time-wrapper">
        <ProcessGraph title="Garph process 1" data={sampleData} />
        <ProcessGraph title="Garph process 2" data={sampleData} />
        <ProcessGraph title="Garph process 3" data={sampleData} />
        <ProcessGraph title="Garph process 4" data={sampleData} />
      </div>
    </div>
  );
};

export default CycleTime;
