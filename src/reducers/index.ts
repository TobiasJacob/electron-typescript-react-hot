export interface HistoryType extends Array<{
    date: string,
    songs: [
        {
            title: string,
            artist: string
        }?
    ]
}> { };

export interface StateType {
    history: HistoryType
}

export default function todos(state: StateType = { history: [{ date: '20.10.20', songs: [{ title: 'asdf', artist: 'asdf' }] }] }, action: { type: string }) {
    switch (action.type) {
        default:
            return state
    }
}