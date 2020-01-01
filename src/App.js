import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard'

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' exact component={ Dashboard } />
      <Redirect to='/' />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={ <p>Loading...</p> }>{ routes }</Suspense>
    </Layout>
  );
};

export default withRouter(App);
