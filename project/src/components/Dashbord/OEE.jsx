import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const oeeData = [
  { name: 'Performance', value: 50 },
  { name: 'Availability', value: 20 },
  { name: 'Quality', value: 30 },
];

const COLORS = ['#0f172a', '#6366f1', '#e2e8f0'];

const OEEChart = () => {
  const totalOEE = oeeData.reduce((sum, entry) => sum + entry.value, 0);
  const targetValue = Math.round((totalOEE / 300) * 100);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 500; // 1 second

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(progress * targetValue);
      setDisplayValue(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue]);

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-md p-4 ">
      <h2 className="text-slate-500 font-semibold text-[20px] mb-5 text-center">
        Overall Equipment Effectiveness
      </h2>
      <div className="w-full h-72 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
              </filter>
            </defs>

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


            <circle
              cx="50%"
              cy="50%"
              r="70"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="2"
              filter="url(#shadow)"
            />

            <text
              x="50%" y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="40"
              fill="#ef4444"
              className="font-bold"
            >
              {`${displayValue}%`}
            </text>
            <text
              x="50%" y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="25"
              fill="#000"
              className="font-bold"
            >
              OEE
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
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
