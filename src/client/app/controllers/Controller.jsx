import React from 'react';

class Controller extends React.Component {

    constructor() {

        super();
        this.getData = this.getData.bind(this);

    }

    getData(resource, callback) {

        return fetch(resource).then(function(response) {
            return response.json();
        }).then(function(json) {
            callback(json);
        });
    }
}

export default Controller;