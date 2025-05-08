import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const efficiencyData = [
  { name: 'Line A', efficiency: 85 },
  { name: 'Line B', efficiency: 76 },
  { name: 'Line C', efficiency: 91 },
  
];

const CompareEfficiencyChart = () => {
  return (
    <div className="bg-white shadow-md Effbg">
      <h2 className='text-slate-500 font-bold text-[20px] Efftext'>
        Compare Efficiency
      </h2>
      <ResponsiveContainer height={278}>
        <BarChart
          layout="vertical"
          data={efficiencyData}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }} // <-- เพิ่มตรงนี้
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(tick) => `${tick}%`}
          />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar
            dataKey="efficiency"
            fill="#22c55e"
            label={{ position: 'insideRight', formatter: (value) => `${value}%` }} // <-- เปลี่ยนตรงนี้
          >
            {efficiencyData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === 'Line B' ? '#facc15' : '#22c55e'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default CompareEfficiencyChart;
