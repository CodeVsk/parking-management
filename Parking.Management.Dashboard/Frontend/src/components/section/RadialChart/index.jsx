import React from "react";
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";

const data = [
  {
    name: "Manhã",
    uv: 31.47,
    pv: 100,
    fill: "#8884d8",
  },
  {
    name: "Tarde",
    uv: 26.69,
    pv: 100,
    fill: "#83a6ed",
  },
  {
    name: "Noite",
    uv: 25.0,
    pv: 100,
    fill: "#8dd1e1",
  },
];

const RadialChart = () => {
  return (
    <RadialBarChart
      width={730}
      height={250}
      innerRadius="10%"
      outerRadius="80%"
      data={data}
      startAngle={180}
      endAngle={0}
    >
      <RadialBar
        minAngle={15}
        label={{ fill: "#666", position: "insideStart" }}
        background
        clockWise={true}
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
      <Tooltip />
    </RadialBarChart>
  );
};

export default RadialChart;
