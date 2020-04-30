import { combineReducers } from 'redux'
import Employee from './EmployeeReducer';
import Account from './AccountReducer';

export default combineReducers({
    Employee,
    Account
})