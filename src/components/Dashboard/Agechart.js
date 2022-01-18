import Typography from '@mui/material/Typography';
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "0-14",
    male: 20,
    female: 24,
    amt: 2400
  },
  {
    name: "15-24",
    male: 30,
    female: 18,
    amt: 2210
  },
  {
    name: "25-34",
    male: 50,
    female: 38,
    amt: 2290
  },
  {
    name: "35-44",
    male: 30,
    female: 44,
    amt: 2000
  },
  {
    name: "45-54",
    male: 22,
    female: 33,
    amt: 2181
  },
  {
    name: "55-64",
    male: 18,
    female: 13,
    amt: 2500
  },
  {
    name: "65up",
    male: 5,
    female: 7,
    amt: 2100
  }
];

export default function App() {
  return (
      <>
    <Typography
    component="h1"
    variant="h5"
    color="primary"
    noWrap
    align="center"
    sx={{ flexGrow: 1 }}
  >
  會員年齡分佈
  </Typography>

    <BarChart
      width={500}
      height={400}
      barSize={30}
      data={data}
      margin={{
        top: 20,
        right: 40,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="female" stackId="a" fill="#8884d8" />
      <Bar dataKey="male" stackId="a" fill="#82ca9d" />
    </BarChart>
    </>
  );
}
