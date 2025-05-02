import React from "react";
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
} from "recharts";
import "../../styles/CycleTime.css"; 

const ProcessGraph = ({ title, data }) => {
  return (
    <div className="graph-container">
      <h3 className="graph-title">{title}</h3>
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis type="number" />
          <YAxis dataKey="step" type="category" />
          <Tooltip />
          <Bar dataKey="value" barSize={20} fill="rgba(72, 99, 187, 0.6)">
            <LabelList dataKey="value" position="right" />
          </Bar>
          <Line type="monotone" dataKey="value" stroke="#f44336" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProcessGraph;
