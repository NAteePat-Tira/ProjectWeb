import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/Dashbord/FilterBar';
import InfoCard from '../components/Dashbord/InfoCard';
import OEEChart from '../components/Dashbord/OEE';
import TaskCompletionChart from '../components/Dashbord/Task';
import CompareEfficiencyChart from '../components/Dashbord/Eff';

const Dashboard = () => {
  const [date, setDate] = useState('2025-04-25');
  const [product, setProduct] = useState('Banana');
  const [partNumber, setPartNumber] = useState('');
  const [shift, setShift] = useState('Shift 1');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="px-4 md:px-8 py-4 flex flex-col">
      {/* FilterBar */}
      <div className="mb-6">
        <FilterBar 
          date={date}
          product={product}
          partNumber={partNumber}
          shift={shift}
          onDateChange={(e) => setDate(e.target.value)}
          onProductChange={(e) => setProduct(e.target.value)}
          onPartChange={(e) => setPartNumber(e.target.value)}
          onShiftChange={(e) => setShift(e.target.value)}
        />
      </div>

      {/* Info Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        <InfoCard title="Today Plans" value={60000} unit="Pcs." change="6.5%" status="up" />
        <InfoCard title="Actual" value={56000} unit="Pcs." change="-0.2%" status="down" />
        <InfoCard title="Defect" value={400} unit="Pcs." change="-0.6%" status="down" />
        <InfoCard title="Down Time" value={120} unit="min." change="-1%" status="down" />
        <InfoCard title="Efficiency (%)" value={93} unit="%" change="+1%" status="up" />
      </div>

      {/* Graphs */}
      <div className="mt-10 flex flex-col gap-6">
        {/* Top Row: OEEChart and CompareEfficiencyChart side by side */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <OEEChart />
          </div>
          <div className="w-full md:w-1/2">
            <CompareEfficiencyChart />
          </div>
        </div>

        {/* Bottom: TaskCompletionChart */}
        <div>
          <TaskCompletionChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
