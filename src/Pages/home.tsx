import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import SessionList from '../Components/sessionList';

const Home = () => {
	return (
		<Container maxWidth="sm">
			<SessionList />
		</Container>
	);
};

export default Home;
