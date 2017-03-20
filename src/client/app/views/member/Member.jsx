import React from 'react';

function Member(props) {

    return (
        <div className="member colored-text">
            <p>{ props.model.firstname } { props.model.lastname } - { props.model.instrument }</p>
        </div>
    );
}

export default Member;