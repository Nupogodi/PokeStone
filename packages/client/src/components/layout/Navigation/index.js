import React from 'react';
import ROUTES from '../../../constants/routes';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { Link } from 'react-router-dom';

import style from './Navigation.module.css';

const Navigation = (props) => {
  const { toggleDrawer } = props;

  return (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer}>
      <List>
        {Object.entries(ROUTES).map(([key, value]) => {
          return (
            <Link className={style.link} to={value.url}>
              <ListItem button key={key}>
                <ListItemText>{value.title}</ListItemText>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default Navigation;
