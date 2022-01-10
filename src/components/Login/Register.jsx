import React from 'react'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";



export default function Register() {
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    
    
    return (
        
        
        <Box sx={{ maxWidth: 480, bgcolor: "yellow" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <Tab label="登入" />
          <Tab label="註冊" />
        </Tabs>
      </Box>
    )
}
