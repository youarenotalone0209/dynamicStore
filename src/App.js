import React, { Component } from 'react';
import Navbar from './components/navBar';
import Configure from './components/configure';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Configure></Configure>
            </div>
        )
    }
}

export default App;