import React from 'react';
import GigsController from '../controllers/GigsController.jsx';
import Gigs from '../views/Gig/Gigs.jsx';

import offset from '../StickyNavbar/functions/offset';

class GigsSection extends React.Component {

    constructor(props) {

        super(props);

        this.state = {gigs: []};
        this.controller = new GigsController();

        this.updateGigs = this.updateGigs.bind(this);

    }

    componentDidMount() {
        this.controller.getGigs(this.updateGigs);
    }

    getTop() {
        return offset(this.sectionDiv).top;
    }

    updateGigs(gigs) {
        this.setState({gigs: gigs});
    }

    render() {
        return (
            <div id="gigs-section" className="section" ref={(sectionDiv) => { this.sectionDiv = sectionDiv; }}>

                <div className="container-fluid">
                    <div className="row">

                        <div id="gigs" className="col-md-8 col-md-offset-2">

                            <p className="large-section-heading">KOMMANDE KONSERTER</p>
                            <Gigs gigs={this.state.gigs} click={this.controller.gigClick} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GigsSection;