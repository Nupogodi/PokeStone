import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Navigation from '../Navigation/index';
import Drawer from '@mui/material/Drawer';


function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {

    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
            <Navigation toggleDrawer={toggleDrawer} />
          </Drawer>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer} />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            PokeStone
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
