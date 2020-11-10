import React, { Suspense, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Components/Module_15-16/Layout';
import AppBar from '../Components/Module_15-16/AppBar';
import { authOperations } from '../redux_15-16/auth';
import routes from '../views_15-16/routes';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
               <Layout>
                   <Suspense falback={<h2>Loading...</h2>} >
                       <Switch>
                           {routes.map(route => {
                               <Route key={route.path} {...route} />
                           })}
                       </Switch>
                   </Suspense>
               </Layout>
            </BrowserRouter>
        );
    }
};

export default connect(null, {onGetCurrentUsers: authOperations.getCurrentUser})(App);