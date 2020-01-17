import { hot } from 'react-hot-loader';
import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from './reducers';

import Router from './Router/Router';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => (
	<Provider store={store}>
		<Router />
	</Provider>
);

export default hot(module)(App);
