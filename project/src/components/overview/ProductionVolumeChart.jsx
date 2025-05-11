import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProductionVolumeChart = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Production Volume Per Hour</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="CanLoading1" stroke="#e74c3c" />
          <Line type="monotone" dataKey="CanLoading2" stroke="#3498db" />
          <Line type="monotone" dataKey="CanLoading3" stroke="#f1c40f" />
          <Line type="monotone" dataKey="CanLoading4" stroke="#1abc9c" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductionVolumeChart;
