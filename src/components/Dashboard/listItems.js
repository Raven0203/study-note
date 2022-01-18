import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BadgeIcon from '@mui/icons-material/Badge';
import { unstable_HistoryRouter } from 'react-router-dom';


export const mainListItems = (
  <div>
    <ListItem button onClick={()=>window.location.href='/dashboard'}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={()=>window.location.href='/member'}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
    </ListItem>
   {/*  <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem> */}
    <ListItem button onClick={()=>window.location.href='/github'}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
   {/*  <ListItem button onClick={()=>window.location.href='/employee'}>
      <ListItemIcon>
        <BadgeIcon />
      </ListItemIcon>
      <ListItemText primary="Employee" />
    </ListItem> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <img style={{width:'250px',height:'250px'}} src='https://00f74ba44b5e85d36ea6f07943dbf85ad8332f2f98-apidata.googleusercontent.com/download/storage/v1/b/eeit36travel/o/%E6%88%AA%E5%9C%96%202022-01-17%20%E4%B8%8B%E5%8D%882.39.04.png?jk=AFshE3UVmRxV8VWr-HVqwKJeMvARCHYiyfYk29uDQtVgy-wXtqjCH6jDfNplYnh9rbKNI9cYkOIR7mRcRcT2V46rbL-8Ya7L2u1IWop-auhbg2kjmymvcyOzncaAxtE7l0sNDwapT9UNOP2bNj6VEfhIv0bwP_t5Q90BIVj-3fjE8b2BlxsS54lqYGhO61L4NDr2MObwQXrpI7e94UL1pmmwNqlKTYj6vAd7fRKt4-tktlounqhzWai177of0vcs34gzTRYLAJIYUoi2LuxrjBpbAW_poHczNsf_j4YFiwPyEXoBFcb8WUMDuO7ABmgM6hHkUks5Jbk5lIvIJF3CYL02yyiwgUxUga0RGyYC6G8v_Ss_ucHUHnHxE1Sr7QoxX4S7IqTPBiT68ReACrEGwSfWufVkhYBYMKxYvJkyTkC2PWHVp2gi9JHAspRzYfu0NjTo_sC8ANTsnja4NaehvLzpUY1Zdd2MeB32CXXBlwH_1v5-XHGMgbYcF_xWeZyF0Ij4CrOMEI0gO5BUjfmltenRQ0u38KjDA8WMvnScGAVi-cVWswMzSr2qnkUZ6EwYBiOHnT500ctn_3pzo-eJm2jfQ5jRgqxtVDtlEfo9j9Yc8wp7UpInt4upn6Vlkb8n437QThIKoHkfxW2uzkDULXOHIcn7IFKklPEUACRGV-gdi5ZS_duQp5MFbcf7mExTJcOsUUm34SAbeAVDe8MMExJwNBAR6otXqoNbSYFGNBXTtiAVjWv1Wn5sfZcVA_g217GDZ2UcahGp1G2YFQdbhNCMCYPUNFB1z5Fm2x9TcELikEQsl-4hqBhPUKypG5bht-uZ4yu6OgBvY6B6hUuJOFDoG8nogXhucQ-ZNBSJ_4tZhjwbaf-QrcssF2O481DdyVavd7YQIHVOYjQ2gADxIcNPBkYxlwSHBNZ_c2A0I3sACg_qpjn4tTOWqVItEWWQf1cKw5J0EVOGy2shSb9mwIu7E8CWNvi9Yj4Bd47y1Sh7OXouCf0UT1ObLklJZgOtAAtNIjpB&isca=1'></img>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
