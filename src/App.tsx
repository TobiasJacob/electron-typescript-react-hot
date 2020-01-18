import { hot } from 'react-hot-loader';
import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import rootReducer from './Reducers';

import Router from './Router';

const store = createStore(rootReducer, composeWithDevTools());

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		// primary: purple,
		// secondary: green,
	},
});

const App = () => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router />
		</ThemeProvider>
	</Provider>
);

export default hot(module)(App);
