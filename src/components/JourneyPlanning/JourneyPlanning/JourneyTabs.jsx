import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DragPlanTable, { userdays } from './DragnDrop/DragPlanTable';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function JourneyTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        //console.log(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'Highlight' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" scrollButtons="auto" variant='scrollable'>
                    {userdays.map((item, index) => {
                        return (
                            <Tab label={`${(item.content).slice(5, 7)}月${(item.content).slice(8, 10)}日`} />
                        )
                    })}
                    {/* <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </Box>
            {/*每一天行程內容的進入點 */}
            {userdays.map((item, index) => {
                return (
                    <TabPanel value={value} index={parseInt(item.id) - 1}>
                        {`第${item.id}天`}
                        <DragPlanTable />
                    </TabPanel>
                )
            })}

            {/* <TabPanel value={value} index={0}>
                <Ptable2 />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}
        </Box>
    );
}
