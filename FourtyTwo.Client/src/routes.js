import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Authorized from './containers/authorized';
import DashboardPage from './containers/dashboard-page';
import Login from './components/login';
import PlayPage from './containers/play';




export default (
	<Route path="/" component={App}>
		<Route component={Authorized}>
			<IndexRoute component={DashboardPage} />
			<Route path="play" component={PlayPage}/>
		</Route>
		<Route path="login" component={Login} />
	</Route>
);

// <IndexRoute component={Home} />