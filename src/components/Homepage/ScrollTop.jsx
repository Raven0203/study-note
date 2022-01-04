import React from 'react';
import Toolbar from '@mui/material/Toolbar';


import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';




function ScrollTop2(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        console.log(event.target.ownerDocument.querySelector('#back-to-top-anchor'))
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
                {console.log(children)}
            </Box>
        </Zoom>
    );
}


export default function ScrollTop(props) {


    return (
        <Box style={{}}>


            <Toolbar style={{ zIndex: 1, marginTop: '-100px', padding: '0px 10px', backgroundColor: '#021E39' }} id="back-to-top-anchor" />

            <ScrollTop2 {...props}>
                <Fab style={{ backgroundColor: '#e91e63', color: 'white' }} size='medium' aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop2>
        </Box>






    );
}
