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






export default function NavbarGuest() {
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
                    <Link to=" " className='a'>首頁</Link>

                    <Link to="/journeyplanhome " className='a'> 行程規劃</Link>
                    <Link to="/" className='a'>部落格</Link>
                    <Link to="/login" className='a'>登入 | 註冊</Link>
                    {/* <Link to="/test" className='a' onClick={()=>setTestOpen(!testopen)}>後台系統</Link> */}
                </div>
                <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon /></button>
            </div>
            <div className="middleSide">
                MY LOGO
            </div>
            <div className="rightSide">
                <input type="search" name="" id="" placeholder='Search...' ref={searchRef} />
                <button onClick={handleClickSearch}><SearchIcon /></button>


            </div>


        </div>
    )
}


