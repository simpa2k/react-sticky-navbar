import React from 'react';

class Controller extends React.Component {

    constructor() {

        super();
        this.getPromise = this.getPromise.bind(this);

    }

    getPromise(resource) {

        return fetch(resource).then(function(response) {
            return response.json();
        });
    }
}

export default Controller;