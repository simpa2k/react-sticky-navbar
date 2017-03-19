import React from 'react';
import StickyNavbar from './StickyNavbar/StickyNavbar.jsx';
import GigsSection from './sections/GigsSection.jsx';

import offset from './StickyNavbar/functions/offset';

class Home extends React.Component {

    constructor(props) {

        super(props);
        this.setMainDivY = this.setMainDivY.bind(this);

        this.state = {};
        this.headings = [];
        this.socialMedia = [];

    }

    componentDidMount() {

        this.setMainDivY();
        this.findLinks();
        window.addEventListener('scroll', this.setMainDivY);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.setMainDivY);
    }

    setMainDivY() {
        this.setState({mainDivY: offset(this.mainDiv).top});
    }

    findLinks() {

        this.headings = [
            {
                name: 'KONSERTER',
                //destination: offset(this.gigsSection).top
                destination: this.gigsSection.getTop()
            },
            {
                name: 'NYHETER',
                destination: offset(this.newsSection).top
            }
        ];

        this.socialMedia = [
            {
                src: '../../images/socialmedia/facebooklogga_29.png',
                destination: 'http://www.facebook.com',
                imageText: "../../images/socialmedia/facebooktext.png"
            },
            {
                src: '../../images/socialmedia/sc29.png',
                destination: 'http://www.soundcloud.com',
                imageText: "../../images/socialmedia/soundcloudtext.png"
            }
        ];
    }

    render() {

        return (

            <div>
                <div id="background"></div>

                <StickyNavbar headings={this.headings}
                              socialMedia={this.socialMedia}
                              elementToStickToY={this.state.mainDivY}/>

                <div id="main" ref={(mainDiv) => { this.mainDiv = mainDiv; }}>

                    <GigsSection ref={(gigsSection) => { this.gigsSection = gigsSection; }} />

                    <div className="section" ref={(newsSection) => { this.newsSection = newsSection; }}>
                        <p className="large-section-heading">NYHETER</p>
                    </div>

                </div>
            </div>

        );
    }
}

export default Home;