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



let memberid =window.localStorage.memberid;//登入功能完整後 ，變成到localstorge取值 
export default function JourneyHome({ openMap, setOpenMap }) {
  const [journeyopen, setJourneyOpen] = useState(false);
  const [data, setData] = useState([]);
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
function continuteButton(e){
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
function deleteButton(e){
  
  fetch("http://localhost:8080/journey/"+e.target.id.slice(3), {//update
        method: 'DELETE'
      }).then((res )=>{  return res.json() })               
      .catch(error => console.log(error) )
      .then(response =>{
        console.log(response)
        window.location.reload();
      });
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
      {data.map((item,id)=>{
        let temp = `./img/img${id+1}.jpg`
        let beginDate = JSON.parse(item.journeydetail).beginDate
        let date = new Date(beginDate)
        date.setDate(date.getDate()+JSON.parse(item.journeydetail).daysNum-1)
        let endDate = date.toISOString().slice(0,10)
        return (<Card sx={{ maxWidth: 345 }} variant="outlined" >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={temp}
        />
        <CardContent>
          <Typography textAlign="left" gutterBottom variant="h5" component="div">
            {JSON.parse(item.journeydetail).title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {beginDate+"~"+endDate }
          </Typography>
        </CardContent>
        <CardActions>

          <Button size="small" id={item.journeyid} onClick={continuteButton}>繼續旅程</Button>
          <Button size="small" id={"del"+item.journeyid} onClick={deleteButton}>旅程掰掰</Button>

        </CardActions>
      </Card>)})}
      </div>
    </div>
    {open ? <JourneyDialog open={open} setOpen={setOpen} openMap={openMap} setOpenMap={setOpenMap} /> : ""}
    </>
  );
}