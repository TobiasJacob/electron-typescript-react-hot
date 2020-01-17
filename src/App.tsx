import { hot } from 'react-hot-loader';
import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

import Router from './Router/Router';

const store = createStore(rootReducer);

const App = () => (
	<Provider store={store}>
		<Router />
	</Provider>
);

export default hot(module)(App);
