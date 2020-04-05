import React, { Component } from 'react';

import RouteConfig from '../routes';
import { BrowserRouter } from 'react-router-dom';

/* eslint-disable */
export default class BankApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <RouteConfig />
            </BrowserRouter>
        );
    }
}

