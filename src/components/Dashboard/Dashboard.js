import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { blue, green, purple, white } from '@mui/material/colors';
import Dropdownbar from '../Navbar/DropDownBar'
import { useState } from 'react';
import Areachart from './Areachart';
import  Avatar  from '@mui/material/Avatar';
import { Button } from '@mui/material';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        <b>EEIT36 不只是色色</b>
      </Link>{' '}
      {'Since 2021 - '}
      {new Date().getFullYear()}

    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#a5d6a7',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    usewhite: {
      main: green[50]
    }
  },
});



function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // DropDownBar
/* const [anchorEl, setAnchorEl] = useState(null);
const Elopen = Boolean(anchorEl);
const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget.style)
};
const handleMenuClose = () => {
    setAnchorEl(null);
}; */

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        
        <CssBaseline />
        <AppBar position="absolute" open={open}  >
          
          <Toolbar
          
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              
              <MenuIcon />
              
            </IconButton>
            <Typography
              component="h1"
              variant="h5"
              color="white"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            不可以色色の後台
            </Typography>
            <IconButton color="usewhite" >
              {/* Content可以塞data state */}
              <Badge  badgeContent={0} color="neutral">
                <NotificationsIcon sx={{marginRight:'15px'}}/>
              </Badge>
            </IconButton>
           {/* <Avatar sx={{width: 56, height: 56,bgcolor:"black"}}  src="/static/images/avatar/1.jpg" /> */}
          <Button sx={{bgcolor:'white',color:'#a5d6a7','&:hover':{backgroundColor:'#eceff1',color:'black',fontWeight:'bold'},borderRadius:'10%',width: 75, height: 35}}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
             
              <Grid container spacing={3}>
              <Grid item xs={5}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            
                  <Areachart></Areachart>
              
                  {/* <Orders /> */}
                </Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                
                  <Areachart></Areachart>
              
                  {/* <Orders /> */}
                </Paper>
              </Grid>
              
            </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
