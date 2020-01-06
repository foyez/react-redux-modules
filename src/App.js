import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';
import Playground from './containers/Playground/Playground';
import NotFound from './components/404/404';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' exact component={ Dashboard } />
      <Route path='/playground' component={ Playground } />
      <Route path='*' component={ NotFound } />
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
