import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const VolumeChart = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Volume</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value1" stroke="#82ca9d" fillOpacity={1} fill="url(#color1)" />
          <Area type="monotone" dataKey="value2" stroke="#8884d8" fillOpacity={1} fill="url(#color2)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VolumeChart;
