import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Typography } from '@mui/material';
import Githubstatus from './Githubstatus';
import { Grid } from '@mui/material';
import Githubstatus1 from './Githubstatus1'

function Githubapiall() {

    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    let test = [];
    let temp = null;
    var okres = null;
    let test1 = [];
    let temp1 = null;
    var okres1 = null;
    let test2 = [];
    let temp2 = null;
    var okres2 = null;


    let eventurl = 'https://api.github.com/users/Bofutw/received_events'
    let mainurl = 'https://api.github.com/repos/EEIT36-Travel/Brian_Web_Demo/commits'
    let developurl = 'https://api.github.com/repos/EEIT36-Travel/Brian_Web_Demo/commits?sha=229defa830568cc282e54da70f730ccd7cd347b6'
    let googlemapurl = 'https://api.github.com/repos/EEIT36-Travel/Brian_Web_Demo/commits?sha=5062effd839af96ed2c4a40363a6e2562f3b1cf4'

        async function fetchapi(){
           try {
            const res = await axios.get(mainurl)
            const res1 = await axios.get(developurl)
            const res2 = await axios.get(googlemapurl)

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
           
           okres1 = res1.data.slice(0,3)
           console.log(okres1);
           okres1.map((okres1)=>{
            okres1.commit.author.date = okres1.commit.author.date.replace('T',' ')
            okres1.commit.author.date = okres1.commit.author.date.replace('Z',' ') 
            temp1 = {
                message: okres1.commit.message,
                author:  okres1.commit.author.name,
                time: okres1.commit.author.date,
                email: okres1.commit.author.email
            }
            test1.push(temp1);
           })

           okres2 = res2.data.slice(0,3)
           okres2.map((okres2)=>{
            okres2.commit.author.date = okres2.commit.author.date.replace('T',' ')
            okres2.commit.author.date = okres2.commit.author.date.replace('Z',' ') 
            temp2 = {
                message: okres2.commit.message,
                author:  okres2.commit.author.name,
                time: okres2.commit.author.date,
                email: okres2.commit.author.email
            }
            test2.push(temp2);
           })
           
            
            
            
           console.log(test[0]);
           console.log(test1[0]);
           console.log(test2[0]);
             setData(test[0]) 
             setData1(test1[0])
             setData2(test2[0]) 
             
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


            <Githubstatus1 data={data} data1={data1} data2={data2}></Githubstatus1>
           {/*  <Grid container spacing={3}>
                <Grid item xs={4}>
                <Githubstatus data={data} align={'center'} branch={'Main'}></Githubstatus>
                </Grid>
                <Grid item xs={4}>
                <Githubstatus data={data1} align={'center'} branch={'Develop'}></Githubstatus>
                </Grid>
                <Grid item xs={4}>
                <Githubstatus data={data2} align={'center'} branch={'Googlemap'}></Githubstatus>
                </Grid>
                </Grid> */}
            
            
            
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