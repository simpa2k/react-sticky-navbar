import React from 'react';
import {render} from 'react-dom';
import StickyNavbar from './StickyNavbar.jsx';

import offsetTop from './offsetTop';

class App extends React.Component {

    constructor(props) {

        super(props);
        this.setMainDivY = this.setMainDivY.bind(this);

        this.state = {};

    }

    componentDidMount() {

        this.setMainDivY();
        window.addEventListener('scroll', this.setMainDivY);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.setMainDivY);
    }

    setMainDivY() {
        this.setState({mainDivY: offsetTop(this.mainDiv)});
    }

    render() {

        return (

            <div>
                <div id="background"></div>
                <StickyNavbar headings={['hej', 'hopp']} socialMedia={['facebook', 'soundcloud']} elementToStickToY={this.state.mainDivY}/>
                <div id="main" ref={(mainDiv) => { this.mainDiv = mainDiv; }}>
                    <p>Hejhej</p>
                </div>
            </div>

        );
    }
}

render(<App/>, document.getElementById('app'));
