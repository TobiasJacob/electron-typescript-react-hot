export default function todos(state: string[] = [], action: { type: string }) {
    switch (action.type) {
        case 'ADD':
            return ['New item', ...state]
        default:
            return state
    }
}