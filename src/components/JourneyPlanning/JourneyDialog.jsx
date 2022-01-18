import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link,useNavigate } from 'react-router-dom';
import DatePicker from './DatePicker';

export default function JourneyDialog({ open, setOpen, openMap, setOpenMap }) {
    // const [open, setOpen] = useState(false);
    let nagative = useNavigate()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handlestart = () => {
        window.localStorage.title = document.getElementById ("inputtitle").value
        window.location.reload();
        setOpen(false);
        window.location.href = "/map"
        
    }

    const handleClose = (e) => {

        setOpenMap(true);
        console.log("JourneyDialog", openMap);
        setOpen(false);




    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                onBackdropClick={false}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    選擇旅程時間
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" >
                        <br />
                    </DialogContentText>
                    <DatePicker />
                </DialogContent>
                <DialogActions>
                    <label>為您的旅程取個名字</label><input id = "inputtitle" />
                    <Button onClick={handleClose}>關閉</Button>
                    <Button onClick={handlestart} autoFocus>
                        {/* <Link to={openMap ? "/map" : "/journeyplanhome"} ></Link> */}
                        {console.log(openMap ? "true" : "false")}
                        開始
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
