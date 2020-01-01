import React from 'react';

import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => (
  <header className={ classes.toolbar }>
    <div className={ classes.logo }>
      <Logo />
    </div>

    <nav className={ classes['desktop-only'] }>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;