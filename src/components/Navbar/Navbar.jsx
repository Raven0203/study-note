import { Avatar, Menu } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dropdownbar from './DropDownBar';
import ScrollTop from '../Homepage/ScrollTop';






export default function Navbar() {
    // RWDMenu
    const [showLinks, setShowLinks] = useState(false);

    // Search...
    const searchRef = useRef(null);
    const handleClickSearch = () => {
        searchRef.current.focus();
        console.log(searchRef.current.value);
    };

    // DropDownBar
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
        console.log(e.currentTarget.style)
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };



    return (
        <div className='Navbar' id="hidden">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link to=" "><a >首頁</a></Link>
                    <a href="/journeyplanning">行程規劃</a>
                    <a href="">部落格</a>
                    <a href="">登入 | 註冊</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon /></button>
            </div>
            <div className="middleSide">
                MY LOGO
            </div>
            <div className="rightSide">
                <input type="search" name="" id="" placeholder='Search...' ref={searchRef} />
                <button onClick={handleClickSearch}><SearchIcon /></button>
                <Tooltip title='個人資訊'>
                    <IconButton onClick={handleMenuOpen}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : false}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : false}>
                        {/* memberImage */}
                        <Avatar className='memberImg' />
                    </IconButton>

                </Tooltip>
                <Menu anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleMenuClose}
                    onClick={handleMenuClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>

                    <Dropdownbar />

                </Menu>

            </div>


        </div>
    )
}


