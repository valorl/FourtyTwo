import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/app';
import Authorized from './containers/authorized';
import DashboardPage from './containers/dashboard-page';
import Login from './containers/login';
import PlayPage from './containers/play';

export default (
	<Route path="/" component={App}>
		<Route path="app" component={Authorized}>
			<IndexRedirect to="/app/dashboard"/>
			<Route path="dashboard" component={DashboardPage} />
			<Route path="play" component={PlayPage}/>
		</Route>
		<Route path="login" component={Login} />
	</Route>
);

// <IndexRoute component={Home} />
