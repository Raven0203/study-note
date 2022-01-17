import React, { useEffect, useRef, useState } from 'react';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import { zhTW } from 'date-fns/locale'
import { formatRelative, subDays } from 'date-fns';



export default function DatePicker() {
    const [value, setValue] = useState([null, null]);//
    const [open, setOpen] = useState(true);
    //開始結束時間
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");


    // console.log(value);

     const d1 = new Date(`${startdate.slice(0,4)}-${startdate.slice(5,7)}-${startdate.slice(8,10)}`);
     const d2 = new Date(`${enddate.slice(0,4)}-${enddate.slice(5,7)}-${enddate.slice(8,10)}`);
    console.log("startdate",d1);

    console.log("enddate",d2);
    let daynum = (Math.abs(d2-d1)/(3600000 * 24)) +1
    let days = []
    // for(let i = 0;i<daynum+1;i++){
    //     let temp={};
    //     temp.id = i+1+""       
    //     temp.content =  d1.toISOString().slice(0,10);
    //     d1.setDate(d1.getDate()+1)
    //     //.toISOString().slice(0,10)
    //     days.push(temp)
    // }
    if(daynum){
        console.log("d1:",d1)
        window.localStorage.date = JSON.stringify({"beginDate":d1.toISOString().slice(0,10),"daysNum":daynum})
        
    }


    //渲染選擇天數
    const renderdate = (startProps, endProps) => {

        setStartDate(startProps.inputProps.value)
        setEndDate(endProps.inputProps.value)
        return (

            <>

                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> 至 </Box>
                <TextField {...endProps} />
            </>
        )

    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        // locale={zhTW}
        <>

            <LocalizationProvider dateAdapter={AdapterDateFns}  locale={zhTW}>

                <DateRangePicker

                    okText='OK'
                    startText="開始"
                    endText="結束"
                    mask="____年__月__日"
                    inputFormat="yyyy年MM月dd日"
                    onClose={handleClose}
                    disablePast
                    value={value}
                    allowSameDateSelection={true}
                    //maxDate={getWeeksAfter(value[0], 4)}
                    onChange={(newValue) => {
                        setValue(newValue);
                        console.log(newValue);
                    }}
                    renderInput={renderdate}
                />
            </LocalizationProvider>
        </>
    );
}
