import { REHYDRATE } from 'redux-persist/constants';
import merge from 'lodash/merge';
import Constants from '../config/Constants'

let initialState = {
    accounts: []
}

export default function AccountReducer(state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case REHYDRATE:
            newState = action.payload.Account ?
                merge(newState, action.payload.Account) : newState
            break;
        case Constants.ACTIONS.FETCH_ACCOUNT_SUCCESS:
            newState.accounts = action.accounts
            break;
        default:
            break
    }
    return newState
}