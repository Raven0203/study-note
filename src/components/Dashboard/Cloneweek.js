import { useTheme } from '@mui/material/styles';
import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import axios from 'axios'

import Title from './Title';
import { Typography } from '@mui/material';

let temp = null;

const url = 'https://api.github.com/repos/EEIT36-Travel/Brian_Web_Demo/stats/commit_activity'
let clones = [
{
  days: "Sun",
  points: 0,
},
{
  days: "Mon",
  points: 0,
},
{
  days: "Tue",
  points: 0,
},
{
  days: "Wed",
  points: 0,
},
{
  days: "Thu",
  points: 0,
},
{
  days: "Fri",
  points: 0,
},
{
  days: "Sat",
  points: 0,
},

];

/* const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150
  }
];
 */
export default function Cloneweek() {

  const theme = useTheme();

  async function fetchapi(){
    try {
     const res = await axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: 'token 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',
        Accept: 'application/vnd.github.v3+json'
      }
    });
    
    
    temp = res.data[res.data.length-2].days
    clones.map((yo)=>{
      yo['points'] = temp.shift();
    })
    console.log(clones);
      
    setData(clones)
    /* clones = res.data.clones;
    clones.map((dataa)=>{
      console.log(dataa.timestamp.substr(5,5));
      dataa.timestamp = dataa.timestamp.substr(5,5)
    })
    console.log(clones);
    setData(clones) */
    
    /* clones.map((res)=>{
      data.push(res.timestamp,res.count)
    })
    console.log(data);
     */
    
    /* test = {
     message: okres.commit.message,
     author:  okres.commit.author.name,
     time: okres.commit.author.date,
     email: okres.commit.author.email
     }
     console.log(test);
      setData(test)  */ 
    } catch (error) {
        console.log(error);
    }
  }

  const [data, setData] = useState([])
  useEffect(() => {
    fetchapi();
    
  }, [])

  return (
    <>
   <Typography
    component="h1"
    variant="h6"
    color="#8d6e63"
    noWrap
    align="center"
    sx={{ flexGrow: 1 }}
  >
  Git push count (week)
  </Typography>
    <RadarChart
      cx={200}
      cy={180}
      outerRadius={150}
      width={500}
      height={338}
      data={data}
      /* margin={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }} */
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="days" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="points"
        stroke="#263238"
        fill="#78909c"
        fillOpacity={0.6}
      />
    </RadarChart>
    </>
  );
}
