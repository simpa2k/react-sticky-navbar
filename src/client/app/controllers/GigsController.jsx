import React from 'react';
import Controller from './Controller.jsx';

class GigsController extends Controller {

    getGigs(callback) {

        this.getPromise('backend/server.php/gigs').then(function(json) {
            callback(json);
        });
    }

    gigClick(gig) {

        if (!gig.classList.contains('expanded')) {
            gig.classList.add('expanded');
            gig.classList.remove('collapsed');
        } else {
            gig.classList.remove('expanded');
            gig.classList.add('collapsed');
        }
    }
}

export default GigsController;