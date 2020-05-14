import React, { Component } from 'react';
import Navbar from './components/navigation';
import { Router, Switch, Route } from 'react-router-dom';

import history from './services/history';

import PackageList from './components/pages/package-list';
import PackageDetails from './components/pages/package-details';
import CartView from './components/pages/cart/';
import Demographic from './components/pages/demographic/';
import Confirmation from './components/pages/confirmation';
import NoMatch from './components/pages/no-match';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Navbar />
				<div className="app">
					<Switch>
						<Route path="/" component={PackageList} exact />
						<Route path="/cartView" component={CartView} exact />
						<Route path="/packageDetails/:id" component={PackageDetails} exact />
						<Route path="/demographic" component={Demographic} exact />
						<Route path="/confirmation" component={Confirmation} exact />
						<Route component={NoMatch} exact />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;