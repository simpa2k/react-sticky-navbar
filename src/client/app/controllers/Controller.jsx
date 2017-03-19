import React from 'react';

class Controller extends React.Component {

    getPromise(resource) {

        return fetch(resource).then(function(response) {
            return response.json();
        });
    }
}

export default Controller;