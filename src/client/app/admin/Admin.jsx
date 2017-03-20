import React from 'react';
import StickyNavbar from '../StickyNavbar/StickyNavbar.jsx';

class Admin extends React.Component {

    constructor(props) {

        super(props);
        this.headings = [];
        this.socialMedia = [];
        this.findLinks();

    }

    findLinks() {

        this.headings = [
            {
                name: 'KONSERTER',
                destination: 'gigs'
            },
            {
                name: 'NYHETER',
                destination: 'news'
            }
        ];
    }

    render() {

        return (
            <div>
                <StickyNavbar headings={this.headings} socialMedia={this.socialMedia} elementToStickToY={0}/>
                {this.props.children}
            </div>
        );
    }
}

export default Admin;
