import React, { Fragment } from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />

      <main className={ classes.content }>{ props.children }</main>
    </Fragment>
  )
}

export default Layout;