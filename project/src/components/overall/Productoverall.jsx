import React from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const volumeData = [
  { time: "7:35-8:30", green: 0, blue: 0 },
  { time: "8:30-9:30", green: 120, blue: 150 },
  { time: "9:40-10:30", green: 60, blue: 120 },
  { time: "10:30-11:30", green: 30, blue: 150 },
];

const perHourData = [
  { time: "8:30-9:30", CanLoading1: 2800, CanLoading2: 2100, CanLoading3: 1400, CanLoading4: 700 },
  { time: "9:40-10:30", CanLoading1: 2600, CanLoading2: 2000, CanLoading3: 1300, CanLoading4: 600 },
];

const ProductionVolumeChart = () => {
  return (
    <div className="p-4 space-y-8">
      {/* Volume Chart */}
      <div className="p-4 w-full max-w-6xl mx-auto">
        <h2 className="text-slate-600 font-semibold text-xl mb-2">Volume</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={volumeData}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" />
            <YAxis domain={[0, 200]} allowDataOverflow={false} />
            <Tooltip />
            <Area type="monotone" dataKey="green" stroke="#82ca9d" fillOpacity={1} fill="url(#colorGreen)" />
            <Area type="monotone" dataKey="blue" stroke="#8884d8" fillOpacity={1} fill="url(#colorBlue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Production Volume Per Hour Chart */}
      <div className="p-4 w-full max-w-6xl mx-auto ">
        <h2 className="text-slate-600 font-semibold text-xl mb-2">Production Volume Per Hour</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={perHourData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="CanLoading1" stroke="#e74c3c" dot={{ r: 4 }} />
            <Line type="monotone" dataKey="CanLoading2" stroke="#3498db" dot={{ r: 4 }} />
            <Line type="monotone" dataKey="CanLoading3" stroke="#f1c40f" dot={{ r: 4 }} />
            <Line type="monotone" dataKey="CanLoading4" stroke="#1abc9c" dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductionVolumeChart;
