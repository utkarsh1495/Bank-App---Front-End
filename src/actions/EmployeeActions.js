import RestClient from '../utils/restClient'
import Constants from '../config/Constants'

const getUrl = (url) => {
    return `/employee/${url}`;
}

export default {
    doLogin: (username, password) => async dispatch => {
        try {
            const loginRequest = {
                username,
                password
            }
            const response = await RestClient.post(getUrl('login'), loginRequest)
            return dispatch({
                type: Constants.ACTIONS.LOGIN_SUCCESS,
                token: response.data.token,
                userName: response.data.employee.username
            })
        }
        catch (error) {
            return dispatch({
                type: Constants.ACTIONS.LOGIN_ERROR
            })        
        }

    }
}