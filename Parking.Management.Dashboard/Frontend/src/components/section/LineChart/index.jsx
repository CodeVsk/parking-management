import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const DefaultLineChart = ({ data, chartKey, description }) => {
  return (
    <ResponsiveContainer height="30%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          name={description}
          dataKey={chartKey}
          stroke="#0e1947"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DefaultLineChart;
