import React from 'react';

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    map() {
        return this.props.items.map((element, index) =>
            <li key={index}>{element}</li>
        );
    }

    render() {

        return (
            <ul>{this.map()}</ul>
        )
    }
}

export default List;