import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import Shows from '../views/Shows';
import ShowDetails from '../views/ShowDetails';
import NotFound from '../views/NotFound';
import Layout from './Module_7-8/Layout';
import routes from '../views/routes';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path={routes.home} exact component={Home} />
                <Route path={routes.shows} exact component={Shows} />
                <Route path={routes.showDetails} component={ShowDetails} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    );
};

export default App;

