import * as React from 'react';

import Typography from '@mui/material/Typography';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Githubstatus({data,data1,data2,align,branch}) {
    console.log(data)
    return (
        
        <div >

<TableContainer /* component={Paper} */>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" ><h3>分支</h3></TableCell>
            <TableCell align="center">Main</TableCell>
            <TableCell align="center">Develop</TableCell>
            <TableCell align="center">Googlemap</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              key={data.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{
                      whiteSpace: "nowrap"
                      /* wordWrap: "break-word" */
                    }}>
                <h3>維護人員</h3>
              </TableCell>
              <TableCell align="center" >{data.author}</TableCell>
              <TableCell align="center">{data1.author}</TableCell>
              <TableCell align="center">{data2.author}</TableCell>
            </TableRow>

            <TableRow
              key={data.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <h3>人員信箱</h3>
              </TableCell>
              <TableCell align="center">{data.email}</TableCell>
              <TableCell align="center">{data1.email}</TableCell>
              <TableCell align="center">{data2.email}</TableCell>
            </TableRow>

            <TableRow
              key={data.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <h3>更新時間</h3>
              </TableCell>
              <TableCell align="center">{data.time}</TableCell>
              <TableCell align="center">{data1.time}</TableCell>
              <TableCell align="center">{data2.time}</TableCell>
            </TableRow>

            <TableRow
              key={data.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <h3>提交內容</h3>
              </TableCell>
              <TableCell align="center">{data.message}</TableCell>
              <TableCell align="center">{data1.message}</TableCell>
              <TableCell align="center">{data2.message}</TableCell>
            </TableRow>
          

           {/*  <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">{data.time}</TableCell>
              <TableCell align="right">{data.message}</TableCell> */}
        </TableBody>
      </Table>
    </TableContainer>

          {/*   <Typography
                display='grid'
                component="h1"
                variant="body1"
                color="#607d8b"
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
            </Typography> */}
        </div>
    )
}

export default Githubstatus


