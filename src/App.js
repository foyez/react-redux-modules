import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './layout/Layout';
import DashboardPage from './pages/dashboard/dashboard.component';
import PlaygroundPage from './pages/Playground/Playground';
import Spinner from './components/UI/Spinner/Spinner';

const NotFound = lazy(() => import('./components/404/404'));

const App = () => {
	const routes = (
		<Switch>
			<Route path="/" exact component={DashboardPage} />
			<Route path="/playground" component={PlaygroundPage} />
			<Route path="*" component={NotFound} />
			<Redirect to="/" />
		</Switch>
	);

	return (
		<Layout>
			<Suspense fallback={<Spinner />}>{routes}</Suspense>
		</Layout>
	);
};

export default withRouter(App);
