import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses  } from 'react-pro-sidebar';
import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InputAdornment from '@mui/material/InputAdornment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsIcon from '@mui/icons-material/Settings';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import BloodtypeTwoToneIcon from '@mui/icons-material/BloodtypeTwoTone';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivismTwoTone';

const SideAppbar = (props) => {
  const [collapsed, setCollapsed] = React.useState(false);
  
  return ( 
    <> 
  
    <Sidebar
    transitionDuration={800}
    collapsed={collapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#DEF3F6',
          height: '100vh',
          color: '#000000',
          fontWeight:'Bold',
        },
      }}
    >
    <Box sx={{
      backgroundColor: '#DEF3F6',
      padding:2,
    }}>
      <Button sx={{ fontSize: 18, padding: 0, color: '#000000', fontWeight:'Bold', width:'100%', }} startIcon={collapsed ? <BloodtypeIcon size={40} /> : <BloodtypeIcon size={40}  />} onClick={() => setCollapsed(!collapsed)}> <b style={{ color:'black'}}>{collapsed ? null : 'Blood Bank'}</b></Button>
    </Box>
    <Divider />
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            color: '#000000',
            fontWeight:'Bold',
            backgroundColor: '#DEF3F6',
            '&:hover': {
              backgroundColor: '#ffffff',
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
                          
            },
            [`&.active`]: {
              backgroundColor: '#ffffff',
              color: '#ffffff',
            },
          },
        }}
      >
        <MenuItem icon={<DashboardIcon />} component={<Link to="/UserDashboard" />} label="Dashboard">Dashboard</MenuItem>
        <MenuItem icon={<AddIcon />} component={<Link to="/MakeRequest" />} label="Make Request">Make Request</MenuItem>
        <MenuItem icon={<HelpCenterOutlinedIcon />} component={<Link to="/OverallRequest" />} label="Overall Request">Overall Request</MenuItem>
        <MenuItem icon={<BloodtypeTwoToneIcon />} component={<Link to="/DonateBlood" />} label="Donate Blood">Donate Blood</MenuItem>
        <MenuItem icon={<VolunteerActivismIcon />} component={<Link to="/DonorsList" />} label="Donors">Donors</MenuItem>
        <MenuItem icon={<SettingsIcon />} component={<Link to="/EventAdminDashboard" />} label="Settings">Settings</MenuItem>
      </Menu>
      <Divider />
      <Box sx={{
      backgroundColor: '#DEF3F6',
      padding:2,
      bottom: 0,
      position:'absolute',
    }}>
      <Button sx={{ fontSize: 18, padding: 0, color: '#000000', fontWeight:'Bold', width:'100%' }} startIcon={collapsed ? <LogoutIcon size={40} /> : <LogoutIcon size={40}  />} > {collapsed ? null : 'Logout'}</Button>
    </Box>
    </Sidebar>
    </>
  )
}

export default SideAppbar