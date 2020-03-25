import React, { Component } from 'react';
import Navbar from './components/navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Ecommerce from './components/ecommerce';
import POS from './components/pos';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/ecommerce" component={Ecommerce} exact />
                    <Route path="/pos" component={POS} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;