import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>User Login Auth</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
