import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const data = [
  {
    name: "Jan",
    Veiculos: 300,
  },
  {
    name: "Fev",
    Veiculos: 200,
  },
  {
    name: "Mar",
    Veiculos: 200,
  },
  {
    name: "Abr",
    Veiculos: 200,
  },
  {
    name: "Mai",
    Veiculos: 200,
  },
  {
    name: "Jun",
    Veiculos: 200,
  },
  {
    name: "Jul",
    Veiculos: 200,
  },
  {
    name: "Ago",
    Veiculos: 200,
  },
  {
    name: "Set",
    Veiculos: 200,
  },
  {
    name: "Out",
    Veiculos: 200,
  },
  {
    name: "Nov",
    Veiculos: 200,
  },
  {
    name: "Dez",
    Veiculos: 2000,
  },
];

const DefaultLineChart = () => {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Veiculos" stroke="#0e1947" />
    </LineChart>
  );
};

export default DefaultLineChart;
