import React, { Component } from 'react';
import { connect } from 'react-redux';

import ManageApplication from '../components/manageApplication';

import EmployeeActions from '../actions/EmployeeActions';
import Constants from '../config/Constants'

class ManageApplicationPage extends Component {
    render() {
        return (
            <ManageApplication {...this.props}/>
        )   
    }
}

export function mapStateToProps(state) {
    return {
        userName: state.Employee.userName,
        token: state.Employee.token,
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageApplicationPage);
