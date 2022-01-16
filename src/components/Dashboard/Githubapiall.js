import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Typography } from '@mui/material';
import Githubstatus from './Githubstatus';
import { Grid } from '@mui/material';

function Githubapiall() {

    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    let test = [];
    let temp = null;
    var okres = null;
    let eventurl = 'https://api.github.com/users/Bofutw/received_events'
    let commiturl = 'https://api.github.com/repos/EEIT36-Travel/Brian_Web_Demo/commits'
    
        

        async function fetchapi(){
           try {
            const res = await axios.get(commiturl)
           
           okres = res.data.slice(0,3)
            
         
           
         
            
           
           okres.map((okres)=>{
            okres.commit.author.date = okres.commit.author.date.replace('T',' ')
            okres.commit.author.date = okres.commit.author.date.replace('Z',' ') 
            temp = {
                message: okres.commit.message,
                author:  okres.commit.author.name,
                time: okres.commit.author.date,
                email: okres.commit.author.email
            }
            test.push(temp);
           })
           
            
            console.log(test);
            console.log(test[0]);
             setData(test[0]) 
             setData1(test[1])
             setData2(test[2]) 
             
           } catch (error) {
               console.log(error);
           }
        }
        

        
        useEffect(() => {
           fetchapi();
           
           /* console.log(test); */
           
        }, [])
        
         // console.log(okres[0].commit)

         /*
         okres.map((e)=>{
            test = {
                message: e.commit.message,
                author: e.commit.author.name,
                time: e.commit.author.date,
                email: e.commit.author.email
            }
            return test
          });
          /* console.log(okres.value);
          console.log(okres.key); */
         
        
       

/*     data.map((res)=>{
            var okres = '';
            okres = res['type']
            return okres
        }) */

    return (
        <>
            <Typography
                component="h1"
                variant="h6"
                color="primary"
                noWrap
                align="center"
                sx={{ flexGrow: 1 }}
            >
                    Github
                    Status
                    Details
                    <hr></hr>
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                <Githubstatus data={data} align={'center'}></Githubstatus>
                </Grid>
                <Grid item xs={4}>
                <Githubstatus data={data1} align={'center'}></Githubstatus>
                </Grid>
                <Grid item xs={4}>
                <Githubstatus data={data2} align={'center'}></Githubstatus>
                </Grid>
                </Grid>
            
            
            
            {/* <Typography
                display='inline'
                component="h1"
                variant="body1"
                color="#607d8b"
                
                align="center"
                sx={{ flexGrow: 10 }}
            >
                <br></br>
        

                更新時間：<br></br>
                {data.time}
                <br></br>
                <br></br>

                最新訊息：<br></br>
                {data.message}
                <br></br>
                <br></br>

                維護人員：<br></br>
                {data.author}
                <br></br>
                <br></br>

                人員信箱：<br></br>
                {data.email}
                <br></br>
                <br></br>

            </Typography> */}
            
        </>
    )
}

export default Githubapiall