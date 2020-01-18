import React, { useState, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Container, Typography, List, ListItem } from '@material-ui/core';
import { StateType, Session, loadData, ActionType } from '../Reducers';
import { ThunkDispatch } from 'redux-thunk';

const SessionList = (props: { history: Session[]; loadData: () => void }) => {
	const { history, loadData } = props;
	return (
		<div>
			<Typography variant="h2">Sessions</Typography>
			<button onClick={loadData}>Load</button>
			<List>
				{history.map((item, index) => (
					<ListItem key={item.date}>
						<Typography variant="h6">{item.date}</Typography>

						<List>
							{item.songs.map(song => (
								<ListItem>
									{song.title} - {song.artist}
								</ListItem>
							))}
						</List>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default connect(
	(state: StateType) => ({ history: state.history }),
	(dispatch: ThunkDispatch<StateType, null, ActionType>) => ({
		loadData: () => {
			dispatch(loadData());
		},
	})
)(SessionList);
