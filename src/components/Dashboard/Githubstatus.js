import * as React from 'react';

import Typography from '@mui/material/Typography';

function Githubstatus({data,align,branch}) {
    return (
        <div >
            <Typography
                display='grid'
                component="h1"
                variant="body1"
                color="#607d8b"
                
                /* noWrap */
                
                align={align}
                sx={{ flexGrow: 10,
                    }}
            >
                <br></br>
                
                <h3 style={{color: '#6d4c41'}}>{branch}</h3>
                <br></br>
                <br></br>

                <h4>維護人員</h4>
                {data.author}
                <br></br>
                <br></br>

                <h4>人員信箱</h4>
                
                {data.email}
                <br></br>
                <br></br>

                <h4>更新時間</h4>
                
                {data.time}
                <br></br>
                <br></br>

                <h4>最新訊息</h4>
                
                {data.message}
                <br></br>
                <br></br>

              

            </Typography>
        </div>
    )
}

export default Githubstatus


