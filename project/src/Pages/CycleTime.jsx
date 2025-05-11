import React, { useState } from "react";
import GraphChart from "../components/cycle Time/ProcessGraph";
import Filter from "../components/Monitoring/Filter";
import "../styles/CycleTime.css";

const sampleProcessData = [
  { cycleTime: 0.5, count: 50 },
  { cycleTime: 1, count: 120 },
  { cycleTime: 1.5, count: 180 },
  { cycleTime: 2, count: 220 },
  { cycleTime: 2.5, count: 300 },
  { cycleTime: 3, count: 350 },
  { cycleTime: 3.5, count: 270 },
  { cycleTime: 4, count: 200 },
  { cycleTime: 4.5, count: 150 },
  { cycleTime: 5, count: 80 },
];

const CycleTime = () => {
  const [date, setDate] = useState('');
  const [product, setProduct] = useState('None');
  const [partNumber, setPartNumber] = useState('None');
  const [line, setLine] = useState('None');
  const [shift, setShift] = useState('None');
  const [process, setProcess] = useState('None');

  const handleClearFilters = () => {
    setDate('');
    setProduct('None');
    setPartNumber('None');
    setLine('None');
    setShift('None');
    setProcess('None');
  };

  const processList = Array.from({ length: 5 }, (_, idx) => ({
    id: idx + 1,
    title: `Process ${idx + 1}`,
    data: sampleProcessData,
  }));

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
          onDateChange={(e) => setDate(e.target.value)}
          onProductChange={(e) => setProduct(e.target.value)}
          onPartChange={(e) => setPartNumber(e.target.value)}
          onShiftChange={(e) => setShift(e.target.value)}
          onLineChange={(e) => setLine(e.target.value)}
          onProcessChange={(e) => setProcess(e.target.value)}
          onClearFilters={handleClearFilters}
        />
      </div>

      <div className="bg-blue space-y-4 card">
        <div className="overflow-x-auto w-full container max-w-full px-4">
          <div className="inline-flex gap-4 min-w-max">
            {processList.map((proc) => (
              <GraphChart key={proc.id} data={proc.data} title={proc.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CycleTime;
