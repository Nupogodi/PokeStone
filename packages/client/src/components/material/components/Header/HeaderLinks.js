/*eslint-disable*/
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';

// core components
import CustomDropdown from 'components/material/components/CustomDropdown/CustomDropdown.js';
import Button from 'components/material/components/CustomButtons/Button.js';

import styles from 'assets/styles/jss/material-kit-react/components/headerLinksStyle.js';

//routes
import ROUTES from 'constants/routes.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  // routes
  const { main, highScores, game, about } = ROUTES;

  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText='Menu'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={ListIcon}
          dropdownList={[
            <Link to={main.url} className={classes.dropdownLink}>
              {main.title}
            </Link>,
            <Link to={game.url} className={classes.dropdownLink}>
              {game.title}
            </Link>,

            <Link to={highScores.url} className={classes.dropdownLink}>
              {highScores.title}
            </Link>,

            <Link to={about.url} className={classes.dropdownLink}>
              {about.title}
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='#'
          color='transparent'
          target='_blank'
          className={classes.navLink}
        >
          <PersonIcon className={classes.icons} /> Sign In
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href='https://twitter.com/CreativeTim?ref=creativetim'
            target='_blank'
            color='transparent'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-twitter'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Follow us on facebook'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.facebook.com/CreativeTim?ref=creativetim'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on instagram'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.instagram.com/CreativeTimOfficial?ref=creativetim'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
