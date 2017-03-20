import React from 'react';
import Controller from './Controller.jsx';

class MembersController extends Controller {

    constructor(props) {

        super(props);
        this.getMembers = this.getMembers.bind(this);

    }

    getMembers(callback) {

        this.getPromise('backend/server.php/members').then(function(json) {
            callback(json);
        });
    }
}

export default MembersController;