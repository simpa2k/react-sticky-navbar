import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';

import App from './App.jsx';
import Home from './Home.jsx';
import Admin from './admin/Admin.jsx';
import Dashboard from './admin/Dashboard.jsx';
import AdminPage from './admin/AdminPage.jsx';

import gigModel from './models/gigModel.js';
import GigsController from './controllers/GigsController.jsx';
import Gig from './views/gig/Gig.jsx';

import memberModel from './models/memberModel.js';
import MembersController from './controllers/MembersController.jsx';
import Member from './views/member/Member.jsx';

ReactDOM.render((
    <Router history={createBrowserHistory()}>
        <App>
            <Route exact path="/" component={Home} />
            <Admin>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/gigs" component={function() {
                    return (
                        <AdminPage itemView={Gig} model={gigModel} getData={new GigsController().getGigs}/>
                    );
                }}/>
                <Route path="/members" component={function() {
                    return (
                        <AdminPage itemView={Member} model={memberModel} getData={new MembersController().getMembers}/>
                    );
                }}/>
            </Admin>
        </App>
    </Router>
), document.getElementById('app'));

