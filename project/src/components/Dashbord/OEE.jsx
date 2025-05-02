import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const oeeData = [
  { name: 'Performance', value: 50 },
  { name: 'Availability', value: 20 },
  { name: 'Quality', value: 30 },
];

const COLORS = ['#0f172a', '#6366f1', '#e2e8f0'];

const OEEChart = () => {
  const totalOEE = oeeData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="oee-chart-wrapper">
      <h2 className="text-slate-400 font-semibold text-[17px] mb-2 text-center">
        Overall Equipment Effectiveness
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={oeeData}
            dataKey="value"
            innerRadius="60%"
            outerRadius="100%"
            paddingAngle={5}
            startAngle={90}
            endAngle={-270}
          >
            {oeeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <text
            x="50%" y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="24"
            fontWeight="bold"
            fill="#ef4444"
          >
            {`${Math.round((totalOEE / 300) * 100)}%`}
          </text>
          <text
            x="50%" y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16"
            fill="#000"
          >
            OEE
          </text>
        </PieChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className="flex justify-center gap-4 mt-4 text-sm">
        {oeeData.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="text-gray-700 font-medium">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OEEChart;
