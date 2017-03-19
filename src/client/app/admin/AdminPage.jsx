import React from 'react';

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
    }

    map() {
        console.log(this.props);
        /*return this.props.route.model.map((field, index) =>
            <input key={index} name={index} type="text" value={field} />
        );*/
    }

    render() {

        return (
            <form>{this.map()}</form>
        );
    }
}

export default AdminPage;