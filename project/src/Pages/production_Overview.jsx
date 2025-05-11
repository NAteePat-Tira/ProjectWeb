import React, { useState } from "react";
import Filter from "../components/Monitoring/Filter";
import VolumeChart from "../components/overview/Volume";
import ProductionVolumeChart from "../components/overview/ProductionVolumeChart";
import '../styles/overview.css';

export default function Overview() {
  const [date, setDate] = useState(null);
  const [product, setProduct] = useState("");
  const [partNumber, setPartNumber] = useState("");
  const [shift, setShift] = useState("");
  const [line, setLine] = useState("");
  const [process, setProcess] = useState("");
  
  // Static data for the charts
  const volumeData = [
    { time: '7:35-8:30', value1: 0, value2: 0 },
    { time: '8:30-9:30', value1: 120, value2: 150 },
    { time: '9:40-10:30', value1: 60, value2: 120 },
    { time: '10:30-11:30', value1: 30, value2: 160 },
  ];

  const productionVolumeData = [
    {
      time: '8:30-9:30',
      CanLoading1: 2800,
      CanLoading2: 2100,
      CanLoading3: 1400,
      CanLoading4: 700,
    },
    {
      time: '9:40-10:30',
      CanLoading1: 2500,
      CanLoading2: 2000,
      CanLoading3: 1350,
      CanLoading4: 600,
    },
  ];

  const handleDateChange = (newDate) => setDate(newDate);
  const handleProductChange = (newProduct) => setProduct(newProduct);
  const handlePartChange = (newPartNumber) => setPartNumber(newPartNumber);
  const handleShiftChange = (newShift) => setShift(newShift);
  const handleLineChange = (newLine) => setLine(newLine);
  const handleProcessChange = (newProcess) => setProcess(newProcess);
  const handleClearFilters = () => {
    setDate(null);
    setProduct("");
    setPartNumber("");
    setShift("");
    setLine("");
    setProcess("");
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
      <div className="config">
        {/* Pass static data as props to the chart components */}
        <VolumeChart data={volumeData} />
        <div className="card">
          <ProductionVolumeChart data={productionVolumeData} />
        </div>
      </div>
    </div>
  );
}
