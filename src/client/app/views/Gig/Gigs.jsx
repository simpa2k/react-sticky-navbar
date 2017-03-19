import React from 'react';
import Gig from './Gig.jsx';

function Gigs(props) {

    return (
        <div id="gigs-container" className="selectable-container">
            {props.gigs.map((item, index) =>
                <div key={index} className="gig selectable collapsed row" onClick={(event) => props.click(event.currentTarget) }>
                    <Gig key={index}
                         datetime={item.datetime}
                         venueName={item.venue_name}
                         city={item.city}
                         price={item.price}
                         address={item.address}
                         webpage={item.webpage}
                         ticketLink={item.ticketLink}
                         info={item.info} />
                </div>
            )}
        </div>
    );
}

export default Gigs;