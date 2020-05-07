import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store in index source: ', store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />	
	</Provider>
	, document.getElementById('root')
);