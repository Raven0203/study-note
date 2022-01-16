import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
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
