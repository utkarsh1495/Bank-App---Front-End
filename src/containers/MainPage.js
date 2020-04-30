import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../components/app';

import EmployeeActions from '../actions/EmployeeActions'
import Constants from '../config/Constants'

class MainPage extends Component {
    render() {
        return (
            <App {...this.props}/>
        )   
    }
}

export function mapStateToProps(state) {
    return state
}

export function mapDispatchToProps(dispatch) {
    return {
        doLogin: function(username,password,successCallBack,errorCallBack){
            dispatch(EmployeeActions.doLogin(username,password)).then((action) => {
                if(action.type === Constants.ACTIONS.LOGIN_SUCCESS )
                    successCallBack()
                else
                    errorCallBack()
            })
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
