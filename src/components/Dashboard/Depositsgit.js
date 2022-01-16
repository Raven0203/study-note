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
  useEffect(() => {
    fetchapi();
    
  }, [])
  return (
    <React.Fragment>
      <Title>Members Count Now</Title>
      <Typography component="p" variant="h4">
      {Math.round(Math.random()*10000)} 
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      {new Date().getFullYear()} / {new Date().getMonth()+1} / {new Date().getDate()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Member Details
        </Link>
      </div>
      
    </React.Fragment>
  );
}
