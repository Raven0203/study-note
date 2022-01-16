
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import Typography from '@mui/material/Typography';

const data = [
  { name: "北部", value: 400 },
  { name: "中部", value: 300 },
  { name: "南部", value: 300 },
  { name: "東部", value: 200 },
  { name: "離島", value: 50}
];

const COLORS = ["#b2ebf2", "#c5cae9", "#ffe082", "#c5e1a5", "#cfd8dc"];

const RADIAN = Math.PI / 180;

let renderLabel = function(data) {
    return data.name+"："+data.value;
}
export default function Areachart() {
  return (
      <>
    <Typography
              component="h1"
              variant="h5"
              color="green"
              noWrap
              align="center"
              sx={{ flexGrow: 1 }}
            >
            會員分佈人數
            </Typography>
    
      
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </>
  );
}
