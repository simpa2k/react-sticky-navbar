import React from 'react';

class Gig extends React.Component {

    constructor(props) {

        super(props);
        this.buildOptionals();

    }

    buildOptionals() {

        this.optionals = [];

        this.createOptional('span', 'orange-brown', this.props.price);
        this.createOptional('span', 'orange-brown', this.props.address);
        this.createOptional('a', this.props.webpage, this.props.webpage);
        this.createOptional('a', this.props.ticketLink, this.props.ticketLink);

    }

    createOptional(innerElement, prop, data) {

        if (typeof(data) === 'undefined') {
            return;
        }

        let propObject = prop == 'a' ? {href: prop} : {className: prop};
        let inner = React.createElement(
            innerElement,
            propObject,
            data
        );

        let element = React.createElement(
            'p',
            {},
            inner
        );

        this.optionals.push(element);

    }

    render() {
        return (
            <div className="col-xs-12">
                <div className="row">
                    <div className="gig-text col-xs-9">
                        <p className="text-center">{ this.props.datetime } - <span className="orange-brown">{ this.props.venueName }</span> { this.props.city }</p>
                    </div>
                    <div className="gig-button col-xs-3"></div>
                </div>

                <div className="row">

                    <div className="additional-info col-xs-12">
                        <p>Tid: <span className="orange-brown">{ this.props.datetime }</span></p>
                        {this.optionals}
                        <p>{ this.props.info }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gig;