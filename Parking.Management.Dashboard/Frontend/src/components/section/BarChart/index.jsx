import React, { useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    vehicles: 300,
  },
  {
    name: "Fev",
    vehicles: 200,
  },
  {
    name: "Mar",
    vehicles: 200,
  },
  {
    name: "Abr",
    vehicles: 200,
  },
  {
    name: "Mai",
    vehicles: 200,
  },
  {
    name: "Jun",
    vehicles: 200,
  },
  {
    name: "Jul",
    vehicles: 200,
  },
  {
    name: "Ago",
    vehicles: 200,
  },
  {
    name: "Set",
    vehicles: 200,
  },
  {
    name: "Out",
    vehicles: 200,
  },
  {
    name: "Nov",
    vehicles: 200,
  },
  {
    name: "Dez",
    vehicles: 2000,
  },
];

const DefaultBarChart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="vehicles" fill="#8884d8" />
    </BarChart>
  );
};

export default DefaultBarChart;
