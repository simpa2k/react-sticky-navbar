import React from 'react';
import Controller from './Controller.jsx';

class MembersController extends Controller {

    constructor(props) {

        super(props);
        this.getMembers = this.getMembers.bind(this);

    }

    getMembers(callback) {
        this.getData('backend/server.php/members', callback)
    }
}

export default MembersController;