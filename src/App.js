import React, { Component } from 'react';
import Navbar from './components/navigation';
import { Router, Switch, Route } from 'react-router-dom';

import history from './services/history';

import Tours from './components/tours';
import PackageDetails from './components/package-details';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Navbar />
				<Switch>
					<Route path="/" component={Tours} exact />
					<Route path="/packageDetails/:id" component={PackageDetails} exact />
				</Switch>
			</Router>
		);
	}
}

export default App;