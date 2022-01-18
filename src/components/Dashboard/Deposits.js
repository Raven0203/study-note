import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Depositsnum from './Depositsnum';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Members Count Now</Title>
      <Typography component="p" variant="h4">
        
      
      <Depositsnum num={Math.round(Math.random()*10000)}  duration={1500}></Depositsnum>
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      <Depositsnum num={new Date().getFullYear()}  duration={500}></Depositsnum> / <Depositsnum num={new Date().getMonth()+1}  duration={1000}></Depositsnum> / <Depositsnum num={new Date().getDate()}  duration={1500}></Depositsnum>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Member Details
        </Link>
      </div>
      
    </React.Fragment>
  );
}
