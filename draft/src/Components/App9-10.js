import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../views/views9-10/Home';
import Blog from '../views/views9-10/Blog';
import Profile from '../views/views9-10/Profile';
import Patterns from '../views/views9-10/Patterns';
import NotFound from '../views/views9-10/NotFound';
import AuthContext from '../contexts/Auth';
import routes from '../views/routes';

class App extends Component {

    render() {
        return (
            <AuthContext>
                <Switch>
                    <Route path={routes.home} exact component={Home} />
                    <Route path={routes.blog} exact component={Blog} />
                    <Route path={routes.profile} component={Profile} />
                    <Route path={routes.patterns} component={Patterns} />
                    <Route component={NotFound} />
                </Switch>
            </AuthContext>
        );
    }
}

export default App;

