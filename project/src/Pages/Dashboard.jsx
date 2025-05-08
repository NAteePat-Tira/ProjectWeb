import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Datacontext';
import FilterBar from '../components/Dashbord/FilterBar';
import InfoCard from '../components/Dashbord/InfoCard';
import OEEChart from '../components/Dashbord/OEE';
import TaskCompletionChart from '../components/Dashbord/Task';
import CompareEfficiencyChart from '../components/Dashbord/Eff';

const Dashboard = () => {
  const { productData, effStat, loading } = useContext(DataContext);
  const [date, setDate] = useState('2025-04-25');
  const [product, setProduct] = useState('Banana');
  const [partNumber, setPartNumber] = useState('');
  const [shift, setShift] = useState('Shift 1');
  
  const navigate = useNavigate();

  // Token check
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // Filter data based on product and eff
  const filteredProduct = productData?.find(
    p => p.product_number === product && (!partNumber || p.part_number === partNumber)
  );

  const filteredEff = effStat?.find(
    e => e.product === product && e.time_stamp?.startsWith(date)
  );

  // If productData is empty, set the first product as default
  useEffect(() => {
    if (productData.length > 0 && !product) {
      setProduct(productData[0].product_number); // Set default product
    }
  }, [productData, product]);

  // Log data to check
  useEffect(() => {
    console.log('productData:', productData);  // Log productData
    console.log('effStat:', effStat);           // Log effStat
    console.log('loading:', loading);           // Log loading state
    console.log('Filtered Product:', filteredProduct); // Log filtered product data
    console.log('Filtered Efficiency:', filteredEff); // Log filtered efficiency data
    console.log('Current Date:', date);         // Log current date state
    console.log('Current Product:', product);   // Log current product state
    console.log('Current Part Number:', partNumber); // Log current part number state
    console.log('Current Shift:', shift);       // Log current shift state
  }, [productData, effStat, loading, filteredProduct, filteredEff, date, product, partNumber, shift]);

  return (
    <div className="px-4 md:px-8 py-4 flex flex-col">
      {/* Filter Bar */}
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

      {/* Loading state */}
      {loading ? (
        <div className="text-center text-gray-600">Loading data...</div>
      ) : (
        <>
          {/* Info Cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            <InfoCard 
              title="Today Plans" 
              value={filteredProduct?.plan || 0} 
              unit="Pcs." 
              change="0%" 
              status="up" 
            />
            <InfoCard 
              title="Actual" 
              value={filteredProduct?.actual || 0} 
              unit="Pcs." 
              change="0%" 
              status="down" 
            />
            <InfoCard 
              title="Defect" 
              value={filteredProduct?.defect || 0} 
              unit="Pcs." 
              change="0%" 
              status="down" 
            />
            <InfoCard 
              title="Down Time" 
              value={filteredEff?.downtime || "00:00:00"} 
              unit="min." 
              change="0%" 
              status="down" 
            />
            <InfoCard 
              title="Efficiency (%)" 
              value={filteredEff?.eff?.toFixed(2) || 0} 
              unit="%" 
              change="0%" 
              status="up" 
            />
          </div>

          {/* Task Completion Chart */}
          <div className='flex justify-center items-center'>
            <TaskCompletionChart />
          </div>

          {/* OEE & Efficiency Charts */}
          <div className="flex flex-wrap justify-center gap-4 OEE_EFFcontain">
            {/* OEE Chart */}
            <div className="flex-1 min-w-[300px]">
              <OEEChart />
            </div>

            {/* Efficiency Chart */}
            <div className="flex-1 min-w-[300px] justifyitem-center">
              <CompareEfficiencyChart />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
