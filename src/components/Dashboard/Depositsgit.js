import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

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
        Authorization: 'token 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',
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
      {data.total} 
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      {new Date().getMonth()+1} / {new Date().getDate()-6} ~ {new Date().getMonth()+1} / {new Date().getDate()}
      </Typography>

      <Typography component="p" variant="h4">
      {data1.total} 
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      {new Date().getMonth()+1} / {new Date().getDate()-13} ~ {new Date().getMonth()+1} / {new Date().getDate()-7}
      </Typography>
      <div>
        <Link color="primary" href="https://github.com/EEIT36-Travel/Brian_Web_Demo" onClick={preventDefault}>
          View Github Details
        </Link>
      </div>
      
    </React.Fragment>
  );
}
