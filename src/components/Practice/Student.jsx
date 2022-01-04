import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { ClassNames } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);


    const handleClick = (e) => {
        e.preventDefault()
        const student = { name, address }
        console.log(student.name);
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student added");
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            })
    }, [])



    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "lightgray" }}><u>Add Student</u></h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="outlined-basic" helperText="Please enter your name" label="Student Name" variant="outlined" fullWidth
                        value={name} onChange={e => setName(e.target.value)} />

                    <TextField id="outlined-basic" helperText="Please enter your address" label="Student Address" variant="outlined" fullWidth
                        value={address} onChange={e => setAddress(e.target.value)} />

                </Box>
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
                    SUBMIT
                </Button>
            </Paper>
            <h1>Students</h1>

            <Paper elevation={3} style={paperStyle}>

                {students.map(student => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
                        Id:{student.id}<br />
                        Name:{student.name}<br />
                        Address:{student.address}

                    </Paper>
                ))
                }

            </Paper>

        </Container>







    );
}