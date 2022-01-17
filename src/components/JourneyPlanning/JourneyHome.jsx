import React, { useState,useEffect } from 'react';
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
import { Link,useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { Data } from '@react-google-maps/api';
import JourneyDialog from './JourneyDialog';



let memberid =3;
export default function JourneyHome({ openMap, setOpenMap }) {
  const [journeyopen, setJourneyOpen] = useState(false);
  const [data, setData] = useState([1,2]);
  setOpenMap(true)
  const [open, setOpen] = useState(false);
  let nagative =useNavigate();
  function fetchData(){
    fetch("http://localhost:8080/journey/memberid="+memberid)
    .then((res)=>{
      return res.json();
    })
    .then((result)=>{
      console.log(result)
      setData(result)
  }

  )
}
function buttonClick(e){
  fetch("http://localhost:8080/journey/"+e.target.id)
    .then((res)=>{
      return res.json();
    })
    .then((result)=>{
      console.log(result)
      window.localStorage.jsondata = JSON.stringify(result);
      nagative("/map")
  })
}
  useEffect(fetchData,[]);
  return (
    <>
    <div style={{ width: '100%', height: '100vh' ,backgroundColor:'#e8eaf6'}}>
      <div className='journey-home-title'>
        <h1>行程規劃</h1>

        <Button disabled></Button>
        <Fab title='開始規劃' onClick={() => { setJourneyOpen(true); setOpen(true); setOpenMap(false); }} sx={{ backgroundColor: 'goldenrod' }}><AddIcon></AddIcon></Fab>
        {/* <Link to="/map" ><Fab title='開始規劃' onClick={() => setJourneyOpen(true)} sx={{ backgroundColor: 'goldenrod' }}><AddIcon></AddIcon></Fab></Link> */}
      </div>

      <br /><br />
      <div className='journey-home-container' >
      {data.map((item)=>{
        
        return (<Card sx={{ maxWidth: 345 }} variant="outlined" >
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

          <Button size="small" id={item.journeyid} onClick={buttonClick}>繼續旅程</Button>
        </CardActions>
      </Card>)})}
      </div>
    </div>
    {open ? <JourneyDialog open={open} setOpen={setOpen} openMap={openMap} setOpenMap={setOpenMap} /> : ""}
    </>
  );
}