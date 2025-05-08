import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';

const taskData = [
  { time: "08:00", produced: 4000, defect: 100 },
  { time: "09:00", produced: 4000, defect: 200 },
  { time: "10:00", produced: 2000, defect: 500 },
  { time: "11:00", produced: 4000, defect: 500 },
  { time: "12:00", produced: 0, defect: 0 },
  { time: "13:00", produced: 0, defect: 0 },
  { time: "14:00", produced: 4000, defect: 300 },
  { time: "15:00", produced: 4000, defect: 200 },
  { time: "16:00", produced: 5000, defect: 100 },
  { time: "17:00", produced: 0, defect: 0 },
  { time: "18:00", produced: 0, defect: 0 },
  { time: "19:00", produced: 0, defect: 0 },
  { time: "20:00", produced: 4000, defect: 100 },
  { time: "21:00", produced: 4000, defect: 100 },
  { time: "22:00", produced: 1000, defect: 50 },
  { time: "23:00", produced: 4000, defect: 50 },
  { time: "00:00", produced: 4000, defect: 0 },
  { time: "01:00", produced: 4000, defect: 0 },
  { time: "02:00", produced: 2000, defect: 0 },
  { time: "03:00", produced: 3000, defect: 0 },
  { time: "04:00", produced: 1000, defect: 0 },
  { time: "05:00", produced: 2000, defect: 0 },
  { time: "06:00", produced: 3000, defect: 1 },
  { time: "07:00", produced: 0, defect: 0 },
];

let cumulativeActual = 0;
const chartData = taskData.map((d, i) => {
  const actualThisHour = d.produced > 0 ? (d.produced - d.defect) : 0;
  cumulativeActual += actualThisHour;

  return {
    time: d.time,
    planned: (i + 1) * 4000,
    actual: cumulativeActual,
  };
});


const TaskCompletionChart = () => {
  return (
    <div className=" p-4 w-full max-w-6xl container">
       <div className="bg-white px-5 py-8 shadow-md background">
          <h2 className="text-slate-500 font-bold text-[20px] textmove">
            Task Completion with Plan & Actual
          </h2>
          <div className="w-full h-[300px] graphmove">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine
                  y={60000}
                  stroke="#39FF14"
                  strokeWidth={3}
                  label={{ value: "Target 60000", position: "top", fill: "#39FF14" }}
                />
                <Line
                  type="monotone"
                  dataKey="planned"
                  name="Planned"
                  stroke="red"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  name="Actual"
                  stroke="blue"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
      </div>
    </div>
  );
};

export default TaskCompletionChart;
