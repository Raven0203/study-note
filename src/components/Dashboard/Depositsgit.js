import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Depositsnum from './Depositsnum';

function preventDefault(event) {
  event.preventDefault();
}

const url = 'https://api.github.com/repos/EEIT36-Travel/Brian_Web_Demo/stats/commit_activity'

export default function Deposits() {


  async function fetchapi(){
    try {
     const res = await axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: process.env.githubtoken,
        Accept: 'application/vnd.github.v3+json'
      }
    });
    console.log(res.data[res.data.length-2]);
    setData(res.data[res.data.length-2])
    setData1(res.data[res.data.length-3])
 /*    clones = res.data.clones;
    clones.map((dataa)=>{
      console.log(dataa.timestamp.substr(5,5));
      dataa.timestamp = dataa.timestamp.substr(5,5)
    })
    console.log(clones);
    setData(clones) */
    
    } catch (error) {
        console.log(error);
    }
  }

  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  useEffect(() => {
    fetchapi();
    
  }, [])
  return (
    <React.Fragment>
      <Title>Git push count</Title>
      <Typography component="p" variant="h4">
      <Depositsnum num={data.total} duration={1000}></Depositsnum>
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      <Depositsnum num={new Date().getMonth()+1} duration={1000}></Depositsnum> / <Depositsnum num={new Date().getDate()-6} duration={1000}></Depositsnum> ~ <Depositsnum num={new Date().getMonth()+1} duration={1000}></Depositsnum> / <Depositsnum num={new Date().getDate()} duration={1000}></Depositsnum>
      </Typography>

      <Typography component="p" variant="h4">
      <Depositsnum num={data1.total} duration={1000}></Depositsnum>
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      <Depositsnum num={new Date().getMonth()+1} duration={1000}></Depositsnum> / <Depositsnum num={new Date().getDate()-13} duration={1000}></Depositsnum> ~ <Depositsnum num={new Date().getMonth()+1} duration={1000}></Depositsnum> / <Depositsnum num={new Date().getDate()-7} duration={1000}></Depositsnum>
      </Typography>
      <div>
        <Link color="primary" href="https://github.com/EEIT36-Travel/Brian_Web_Demo" /* onClick={preventDefault} */>
          View Github Details
        </Link>
      </div>
      
    </React.Fragment>
  );
}
