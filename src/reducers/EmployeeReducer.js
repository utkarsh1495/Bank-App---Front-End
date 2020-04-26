import { REHYDRATE } from 'redux-persist/constants';
import merge from 'lodash/merge';
import Constants from '../config/Constants'

let initialState = {
    token: '',
    userName: ''
}

export default function EmployeeReducer(state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case REHYDRATE:
            newState = action.payload.Employee ?
                merge(newState, action.payload.Employee) : newState
            break;
            case Constants.ACTIONS.LOGIN_SUCCESS:
                newState.token = action.token
                newState.userName = action.userName
                break
        default:
            break
    }
    return newState
}