import { getDomTree, getSessions, getSessionSongs } from 'seratolibraryparser'
import { ThunkAction } from 'redux-thunk';

export interface Song {
    title: string,
    artist: string
}

export interface Session {
    date: string,
    songs: Song[]
}

export interface StateType {
    history: Session[]
}

export interface ActionType {
    type: string, history?: Session[]
}

const path = '/Users/tobiasjacob/Music/_Serato_/History/'

async function read() {
    const sessions = await getSessions(path + 'history.database')
    const result: Session[] = []

    for (const key in sessions) {
        if (sessions.hasOwnProperty(key)) {
            const session = sessions[key];
            const songlist = await getSessionSongs(path + 'Sessions/' + session + '.session')
            result.push({ date: key, songs: songlist })
        }
    }
    return result;
}

export function loadData(): ThunkAction<void, StateType, null, ActionType> {
    return async (dispatch) => {
        const history = await read();
        dispatch({ type: 'setHistory', history })
    }
}

export default function todos(state: StateType = { history: [{ date: '20.10.20', songs: [{ title: 'asdf', artist: 'asdf' }] }] }, action: ActionType) {
    switch (action.type) {
        case 'setHistory':
            return Object.assign({}, state, {
                history: action.history
            })
        default:
            return state
    }
}