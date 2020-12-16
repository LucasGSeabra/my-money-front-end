const INITIAL_STATE = { list: [], tabKey: 2 }

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        case 'CHANGE_TAB':
            return {...state, tabKey: action.payload.data}
        default:
            return state
    }
    
}