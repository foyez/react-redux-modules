import React, { Fragment } from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />

      <main className={ classes.container }>
        <div className={ classes.content }>
          { props.children }
        </div>
        <Footer />
      </main>
    </Fragment>
  )
}

export default Layout;