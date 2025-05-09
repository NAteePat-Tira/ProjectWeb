import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext, DataProvider } from '../Datacontext';
import FilterBar from '../components/Dashbord/FilterBar';
import InfoCard from '../components/Dashbord/InfoCard';
import OEEChart from '../components/Dashbord/OEE';
import TaskChart from '../components/Dashbord/Task';
import CompareEfficiencyChart from '../components/Dashbord/Eff';
import '../styles/Dashbord.css'; 


const taskData = [
  { time: "09:00", plan: 5000, actual: 3000 },
  { time: "10:00", plan: 10000, actual: 7000 },
  { time: "11:00", plan: 15000, actual: 10000 },
  { time: "12:00", plan: 20000, actual: 12000 },
  { time: "13:00", plan: 25000, actual: 13000 },
  { time: "14:00", plan: 30000, actual: 17000 },
  { time: "15:00", plan: 35000, actual: 20000 },
  { time: "16:00", plan: 40000, actual: 25000 },
  { time: "17:00", plan: 45000, actual: 25000 },
  { time: "18:00", plan: 48000, actual: 25000 },
  { time: "19:00", plan: 50000, actual: 25000 },
  { time: "20:00", plan: 53000, actual: 30000 },
  { time: "21:00", plan: 57000, actual: 34000 },
  { time: "22:00", plan: 60000, actual: 35000 },
  { time: "23:00", plan: 64000, actual: 39000 },
  { time: "00:00", plan: 68000, actual: 44000 },
  { time: "01:00", plan: 72000, actual: 47000 },
  { time: "02:00", plan: 76000, actual: 50000 },
  { time: "03:00", plan: 80000, actual: 52000 },
  { time: "04:00", plan: 84000, actual: 53000 },
  { time: "05:00", plan: 88000, actual: 55000 },
  { time: "06:00", plan: 92000, actual: 58000 },
  { time: "07:00", plan: 96000, actual: 58000 },
];

const data = [
  { name: "Performance", value: 50 },
  { name: "Availability", value: 20 },
  { name: "Quality", value: 30 },
];

const efficiencyData = [
  { name: 'Line A', efficiency: 85 },
  { name: 'Line B', efficiency: 76 },
  { name: 'Line C', efficiency: 91 },
  
];

const Dashboard = () => {
  const { productData, effStat, loading } = useContext(DataContext);

  const [date, setDate] = useState('2025-04-25');
  const [product, setProduct] = useState('Banana');
  const [partNumber, setPartNumber] = useState('');
  const [shift, setShift] = useState('Shift 1');

  const navigate = useNavigate();
  
 {/* Token check */}
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

 {/* Check product data and Eff */}
  useEffect(() => {
    console.log('🚀 productData:', productData);
    console.log('🔎 effStat:', effStat);
  }, [productData, effStat]);

  // Filter ข้อมูล product และ eff
  const filteredProduct = productData && productData.find(
    p => p.product_number === product && (!partNumber || p.part_number === partNumber)
  );

  const filteredEff = effStat && effStat.find(
    e => e.product === product && e.time_stamp?.startsWith(date)
  );

  // ตรวจสอบค่าที่กรองแล้ว
  useEffect(() => {
    console.log('📊 filteredProduct:', filteredProduct);
    console.log('📊 filteredEff:', filteredEff);
  }, [filteredProduct, filteredEff]);

  // ถ้า productData มีข้อมูลไม่พอให้เลือก
  useEffect(() => {
    if (productData.length > 0) {
      setProduct(productData[0].product_number); 
    }
  }, [productData]);

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
        <DataProvider>

          {/* Info Cards  use ?.  */}
          <div className="flex flex-wrap gap-4 justify-center ">
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

  
          {/* OEE % EFF */}
          <div className="flex justify-center gap-6 OEE_EFFcontain">
            {/* OEE Chart */}
            <div className="flex-1 min-w-[300px]">
              <OEEChart data={data} />
            </div>

            {/* Efficiency Chart */}
            <div className="flex-2 min-w-[300px] justifyitem-center">
              <CompareEfficiencyChart data={efficiencyData} />
            </div>
          </div>

                    {/* Task Graph */}
          <div className='flex justify-center taskcontain'>
            <TaskChart data={taskData}/>
          </div>
      


          
        </DataProvider>
      )}
    </div>
  );
};

export default Dashboard;
