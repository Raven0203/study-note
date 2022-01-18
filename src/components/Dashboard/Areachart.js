
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell ,LabelList} from "recharts";
import Typography from '@mui/material/Typography';

const data = [
  { name: "北部", value: Math.round(Math.random()*500+50) },
  { name: "中部", value: Math.round(Math.random()*400+40) },
  { name: "南部", value: Math.round(Math.random()*300+30) },
  { name: "東部", value: Math.round(Math.random()*100+10) },
  { name: "離島", value: Math.round(Math.random()*50+5) }
];

const COLORS = ["#90caf9", "#f48fb1", "#ffb300", "#66bb6a", "#b0bec5"];

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
              color="primary"/* "#a5d6a7" */
              noWrap
              align="center"
              sx={{ flexGrow: 1 }}
            >
            會員地區分佈
            </Typography>
    
      
    <PieChart width={400} height={400} margin={{left:-15}}>
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
         {/*  <LabelList dataKey="value" position="insideTop" /> */}
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </>
  );
}
