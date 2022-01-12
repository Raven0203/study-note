import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import './journeyhome.css'
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';

export default function JourneyHome() {
  const [journeyopen, setJourneyOpen] = useState(false);


  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div className='journey-home-title'>
        <h1>行程規劃</h1>

        <Button disabled></Button>
        <Link to="/journeyplan" ><Fab onClick={() => setJourneyOpen(true)} sx={{ backgroundColor: 'goldenrod' }}><AddIcon></AddIcon></Fab></Link>
      </div>

      <br /><br />
      <div className='journey-home-container' >

        <Card sx={{ maxWidth: 345 }} variant="outlined" >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./img/3.jpg"
          />
          <CardContent>
            <Typography textAlign="left" gutterBottom variant="h5" component="div">
              九份三天兩夜
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2022年1月13日 - 2022年1月15日
            </Typography>
          </CardContent>
          <CardActions>

            <Button size="small">繼續旅程</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} variant="outlined" >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./img/img1.jpg"
          />
          <CardContent>
            <Typography textAlign="left" gutterBottom variant="h5" component="div">
              玉山三天兩夜
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2022年1月13日 - 2022年1月15日
            </Typography>
          </CardContent>
          <CardActions>

            <Button size="small">繼續旅程</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} variant="outlined" >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./img/img3.jpg"
          />
          <CardContent>
            <Typography textAlign="left" gutterBottom variant="h5" component="div">
              台北三天兩夜
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2022年1月13日 - 2022年1月15日
            </Typography>
          </CardContent>
          <CardActions>

            <Button size="small">繼續旅程</Button>
          </CardActions>
        </Card>

      </div>
    </div>
  );
}