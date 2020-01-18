import React, { useState } from 'react';
import { MemoryRouter, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon, Home as HomeIcon, QuestionAnswer } from '@material-ui/icons';

import Home from '../Pages/home';

const Router = () => {
	return (
		<MemoryRouter>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" style={{ flex: 1 }}>
						App
					</Typography>
					<IconButton edge="start" color="inherit" aria-label="menu" component={Link} to="/">
						<HomeIcon />
					</IconButton>
					<IconButton edge="start" color="inherit" aria-label="menu" component={Link} to="/about">
						<QuestionAnswer />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Switch>
				<Route path="/about">About</Route>
				<Route path="/users">Users</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</MemoryRouter>
	);
};

export default Router;
