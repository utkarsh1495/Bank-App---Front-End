import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'
import config from './config';
import { withRouter } from 'react-router-dom'

class RouteConfig extends Component {

    render() {
        return (
            <div>
                <Switch>
                    {
                        config.map((item) => {
                            return <Route key={item.component}
                                path={item.path}
                                component={item.component} />
                        })
                    }
                </Switch>
            </div>
        );
    }
}

export default withRouter(RouteConfig);