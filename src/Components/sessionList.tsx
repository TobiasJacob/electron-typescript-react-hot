import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Typography, List, ListItem } from '@material-ui/core';
import { StateType, HistoryType } from '../Reducers';

const SessionList = (props: { history: HistoryType }) => {
	const { history } = props;
	return (
		<div>
			<Typography variant="h2">Sessions</Typography>
			<List>
				{history.map(item => (
					<ListItem>{item.date}</ListItem>
				))}
			</List>
		</div>
	);
};

export default connect(
	(state: StateType) => ({ history: state.history }),
	dispatch => ({})
)(SessionList);
