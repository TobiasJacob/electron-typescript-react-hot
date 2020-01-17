import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MemoryRouter, Switch, Route, Link } from 'react-router-dom';

const Router = (props: { todos: string[]; addItem: () => void }) => {
	const [count, setCount] = useState(0);
	return (
		<MemoryRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/users">Users</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/about">About</Route>
				<Route path="/users">Users</Route>
				<Route path="/">
					Hello World! {count} <button onClick={props.addItem}>Add</button>
				</Route>
			</Switch>
		</MemoryRouter>
	);
};

export default connect(
	state => ({ todos: state }),
	dispatch => ({ addItem: () => dispatch({ type: 'ADD' }) })
)(Router);
