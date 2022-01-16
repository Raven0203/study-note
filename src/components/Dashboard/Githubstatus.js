import * as React from 'react';

import Typography from '@mui/material/Typography';

function Githubstatus({data,align}) {
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
        </div>
    )
}

export default Githubstatus


