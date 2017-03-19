import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

import {
    Router,
    Route,
} from 'react-router';

import {createBrowserHistory, createHashHistory} from 'history';
const history = createBrowserHistory();

import App from './App.jsx';
import Home from './Home.jsx';
import Admin from './admin/Admin.jsx';
import Dashboard from './admin/Dashboard.jsx';

ReactDOM.render((
    <Router history={history}>
        <App>
            <Route exact path="/" component={Home} />
            <Admin>
                <Route exact path="/dashboard" component={Dashboard}/>

            </Admin>
        </App>
    </Router>
), document.getElementById('app'));

