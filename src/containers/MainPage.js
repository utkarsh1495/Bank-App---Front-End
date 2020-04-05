import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../components/app';

// import CheckoutActions from './checkoutActions';
// import ActionConstants from './actionConstants';

class MainPage extends Component {
    render() {
        return (
            <App/>
        )   
    }
}

export function mapStateToProps(state) {
    return state
}

export function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
