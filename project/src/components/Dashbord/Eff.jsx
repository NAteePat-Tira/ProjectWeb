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
    <>
      <h2 className='text-slate-400 font-semibold text-[17px]'>Compare Efficiency</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={efficiencyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="efficiency" fill="#22c55e" label={{ position: 'right', formatter: (value) => `${value}%` }}>
            {efficiencyData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Line B' ? '#facc15' : '#22c55e'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default CompareEfficiencyChart;
