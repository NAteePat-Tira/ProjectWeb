import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend,
} from 'recharts';

const GraphChart = ({ title, data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 min-w-[320px] max-w-[400px] min-h-[700px]"> {/* ✅ เพิ่มความสูงตรงนี้ */}
      <h3 className="text-center font-semibold mb-4 text text-xl">{title}</h3>
      <div className="w-full h-[800px] items-center"> {/* ✅ เพิ่มความสูงของกราฟ */}
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 40, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="cycleTime" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8">
              <LabelList dataKey="count" position="right" />
            </Bar>
            <Line
              dataKey="count"
              type="monotone"
              stroke="#ff0000"
              dot={{ r: 3 }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphChart;
