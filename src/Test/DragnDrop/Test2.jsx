import React, { useEffect, useRef, useState } from 'react';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import { zhTW } from 'date-fns/locale'
import { formatRelative, subDays } from 'date-fns';
import { Button } from '@mui/material';
import Test3 from './Test3';



// console.log(formatRelative(subDays(new Date(), 3), new Date(), { locale: zhTW })
// );



function getWeeksAfter(date, amount) {
    console.log();
    return date ? addWeeks(date, amount) : undefined;
}

export default function Test2() {
    const [value, setValue] = React.useState([null, null]);
    const [open, setOpen] = useState(true);
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");

    var testdate = "";






    //渲染選擇天數
    const renderdate = (startProps, endProps) => {
        testdate = startProps.inputProps.value
        setStartDate(startProps.inputProps.value)
        setEndDate(endProps.inputProps.value)
        return (

            <>

                {console.log(testdate)}
                <TextField {...startProps} label="開始" />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} label="結束" />
            </>
        )

    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        // locale={zhTW}
        <>
            <Test3 startdate={startdate} enddate={enddate} />
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={zhTW}>

                <DateRangePicker
                    mask="____/__/__"
                    inputFormat="yyyy/MM/dd"
                    onClose={handleClose}
                    disablePast
                    value={value}
                    allowSameDateSelection={true}
                    maxDate={getWeeksAfter(value[0], 4)}
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
