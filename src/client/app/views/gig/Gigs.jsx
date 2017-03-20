import React from 'react';
import Gig from './Gig.jsx';

function Gigs(props) {

    return (
        <div id="gigs-container" className="selectable-container">
            {props.gigs.map((item, index) =>
                <Gig key={index} model={item} click={(event) => props.click(event.currentTarget)} />
            )}
        </div>
    );
}

export default Gigs;