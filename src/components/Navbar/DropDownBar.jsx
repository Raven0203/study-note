import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Menu } from '@mui/material'
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import StarIcon from '@mui/icons-material/Star';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';
import Settings from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Dropdownbar = () => {
    return (
        <nav>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem >
                    <Avatar sx={{ color: '#263238' }} /> <li style={{ fontWeight: 'bold' }}>帳戶資訊</li>
                </MenuItem>
            </Link>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <PlaceSharpIcon sx={{ color: ' #db3236' }} fontSize="medium" />
                </ListItemIcon>
                <li style={{ fontWeight: 'bolder' }}>行程規劃</li>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <EditTwoToneIcon sx={{ color: 'black' }} fontSize="medium" />
                </ListItemIcon>
                <li style={{ fontWeight: 'bolder' }}>開始撰寫文章</li>
            </MenuItem>

            <Link to="/favorite" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem>
                    <ListItemIcon>
                        <StarIcon fontSize="medium" sx={{ color: '#ffea00' }}></StarIcon>
                    </ListItemIcon>
                    <li style={{ fontWeight: 'bolder' }}>個人收藏</li>
                </MenuItem>
            </Link>
            {/* <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="medium" />
                        </ListItemIcon>
                        Settings
                    </MenuItem> */}
            <MenuItem>
                <ListItemIcon sx={{ color: 'black' }}>
                    <Logout fontSize="medium" />
                </ListItemIcon>
                <li style={{ fontWeight: 'bolder' }}>登出</li>
            </MenuItem>
        </nav>
    );
}

export default Dropdownbar;
