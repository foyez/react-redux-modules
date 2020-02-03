import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './layout/Layout.jsx';
import DashboardPage from './pages/Dashboard/Dashboard';
import PlaygroundPage from './pages/Playground/Playground';
import NotFound from './components/404/404';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' exact component={ DashboardPage } />
      <Route path='/playground' component={ PlaygroundPage } />
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
