/* eslint-disable import/first */
import React, { useState, useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import WalletIcon from '@mui/icons-material/Wallet';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import UserIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { alpha, useTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SavingsIcon from '@mui/icons-material/Savings';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCoins)

import ColorModeContext from '../components/ColorModeContext';
import CustomButton from '../components/CustomButton';

const Header = ({ onSidebarOpen}) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const anchorRef = useRef(null);
    const colorMode = useContext(ColorModeContext);
    const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('Credentials');
    if (email === (`${email}`)) {
      setIsSignedIn(true);
    }
  }, []);
    
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <div>
{isSignedIn ? (
        
            
        <React.Fragment>
            <AppBar
             
                elevation={5}
                sx={{
                    top: 0,
                    border: 0,
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.secondary
                }}
            >
                <Toolbar sx={{ minHeight: 70 }}>
                    <Box 
                        alignItems='center'
                        sx={{ display: { md: 'block', lg: 'none' } }}
                    >
                        <Button
                            color='inherit'
                            variant='outlined'
                            onClick={() => onSidebarOpen()}
                            aria-label='Menu'
                            sx={{
                                borderRadius: 2,
                                minWidth: 'auto',
                                padding: 1,
                                color: theme.palette.text.secondary,
                                borderColor: alpha(theme.palette.text.secondary, 0.2),
                            }}
                        >
                            <MenuIcon fontSize='medium' />
                        </Button>
                    </Box>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Box>
                            <IconButton size='large' disabled>
                                <Avatar
                                    variant='rounded'
                                    sx={{
                                        backgroundColor: deepPurple[600],
                                        height: 52,
                                        width: 52,
                                        marginRight: '15px'
                                    }}
                                >
                                    <FontAwesomeIcon 
                                        icon={faCoins} 
                                        style={{ 
                                            color: '#fff', 
                                            height: 30, 
                                            width: 30 
                                        }} 
                                    />
                                </Avatar>
                                <Typography 
                                    variant='h3' 
                                    component='div' 
                                    sx={{
                                        flexGrow: 1,
                                        color: theme.palette.text.primary,
                                        fontWeight: 'bold',
                                        display: {
                                            md: 'inline',
                                            xs: 'none'
                                        },
                                    }}
                                >
                                Currency  Dashboard
                                </Typography>
                            </IconButton>
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: { lg: 'flex', md: 'none', xs: 'none' }
                        }}
                    >
                        <CustomButton 
                            href='/dash'
                            icon={<DashboardIcon />}
                            text='Dashboard'
                        />
                        <CustomButton 
                            href='/wallet'
                            icon={<WalletIcon/>}
                            text='Wallet'
                        />
                        <CustomButton 
                            href='/currency'
                            icon={<AttachMoneyIcon />}
                            text='Currency Converter'
                        />
                        <CustomButton 
                            href='/signIn'
                            icon={<LockOpenIcon/>}
                            text='signIn'
                        />
                        {/* <CustomButton 
                            href='/Cart'
                            icon={<ShoppingCartIcon/>}
                            text='Add to Cart'
                        /> */}
                        {/* <CustomButton 
                            href='/bankLogin'
                            icon={<SavingsIcon/>}
                            text='Shell'
                        /> */}
                         <CustomButton 
                            href='/register'
                            icon={<VpnKeyIcon/>}
                            text='SignUp'
                        />
                        {/* <CustomButton 
                            href='/coin'
                            icon={<MonetizationOnIcon/>}
                            text='Coin'
                        /> */}
                    </Box>
                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 32, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' }
                        }}
                    />
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            aria-label='Theme Mode'
                            color={theme.palette.mode === 'dark' ? 'warning' : 'inherit' }
                        >
                            {theme.palette.mode === 'dark' 
                                ? (
                                    <LightModeIcon fontSize='medium' />
                                ) 
                                : (
                                    <DarkModeIcon fontSize='medium' />
                                )
                            }
                        </IconButton>
                    </Box>
                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 32, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' } 
                        }} 
                    />
                    <Box sx={{ display: { lg: 'flex', md: 'none', xs: 'none' } }}>
                        <Box
                            component={ButtonBase}
                            onClick={handleOpen}
                            ref={anchorRef}
                            sx={{
                                alignItems: 'center',
                                display: 'flex'
                            }}
                        >
                            <Tooltip title='User Account'>
                                <Avatar 
                                    sx={{ 
                                        height: 32, 
                                        width: 32, 
                                        backgroundColor: theme.palette.primary.main 
                                    }} 
                                />
                            </Tooltip>
                        </Box>
                        <Popover
                            anchorEl={anchorRef.current}
                            anchorOrigin={{
                                horizontal: 'center',
                                vertical: 'bottom'
                            }}
                            keepMounted
                            onClose={handleClose}
                            open={open}
                            PaperProps={{
                                sx: { width: 240 }
                            }}
                        >
                            <Box sx={{ p: 2 }}>
                                <Typography
                                    color={theme.palette.text.primary}
                                    variant='subtitle2'
                                >
                                    
                                </Typography>
                                <Typography
                                    color={theme.palette.text.secondary}
                                    variant='subtitle2'
                                >
                                </Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ mt: 2 }}>
                                <MenuItem
                                    component={Link}
                                    to='/profile'
                                >
                                    <ListItemIcon>
                                    
                                        <UserIcon fontSize='small'/>
                                        
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={(
                                            <Typography
                                                
                                            color={theme.palette.text.primary}
                                                variant='subtitle2'
                                            >
                                                Profile
                                            </Typography>
                                        )}
                                    />
                                </MenuItem>
                                <MenuItem
                                    component={Link}
                                    to=''
                                >
                                    <ListItemIcon>
                                        {/* <SettingsIcon fontSize='small' /> */}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={(
                                            <Typography
                                                color={theme.palette.text.primary}
                                                variant='subtitle2'
                                            >
                                                
                                            </Typography>
                                        )}
                                    />
                                </MenuItem>
                            </Box>
                            <Box sx={{ p: 2 }}>
                                <Button
                                    color='primary'
                                    fullWidth
                                    variant='outlined'
                                    href='/'
                                >
                                    Logout
                                </Button>
                            </Box>
                        </Popover>
                    </Box>
                    {theme.palette.mode === 'dark' && <Divider />}
                </Toolbar>
           
            </AppBar>
        
        </React.Fragment>
):(
    <h1>Please Sign In To Access Navigation Bar.</h1>
)}
        </div>

    );
    
                                      
};




    
Header.propTypes = {
    onSidebarOpen: PropTypes.func,
};
  
export default Header;