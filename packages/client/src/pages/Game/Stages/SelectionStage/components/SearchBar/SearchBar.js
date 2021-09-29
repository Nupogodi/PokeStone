import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Header from 'components/material/components/Header/Header.js';
import GridContainer from 'components/material/components/Grid/GridContainer.js';
import GridItem from 'components/material/components/Grid/GridItem.js';

// custom components
import Filter from '../Filter/Filter';

import styles from 'assets/styles/jss/material-kit-react/views/landingPage';
import styless from './SearchBar.module.css';

const useStyles = makeStyles(styles);

const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <div style={{ color: '#000' }} className={classNames(classes.container)}>
      <Header color='white' brand='Pokemon Library' rightLinks={<Filter />}/>
    </div>
  );
};

export default SearchBar;
