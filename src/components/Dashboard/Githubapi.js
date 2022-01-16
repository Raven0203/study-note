import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Typography } from '@mui/material';

function Githubapi() {

    const [data, setData] = useState([])
    let test = null;
    var okres = null;
    let eventurl = 'https://api.github.com/users/Bofutw/received_events'
    let commiturl = 'https://api.github.com/repos/EEIT36-Travel/Brian_Web_Demo/commits'
    
        

        async function fetchapi(){
           try {
            const res = await axios.get(commiturl)
         /*  console.log(res); */
           okres = res.data[0]
           
             test = {
            message: okres.commit.message,
            author:  okres.commit.author.name,
            time: okres.commit.author.date,
            email: okres.commit.author.email
            }
            console.log(test);
             setData(test)  
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
                    <hr></hr>
            </Typography>

            <Typography
                display='inline'
                component="h1"
                variant="body1"
                color="#607d8b"
                /* noWrap */
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

            </Typography>
            
        </>
    )
}

export default Githubapi
