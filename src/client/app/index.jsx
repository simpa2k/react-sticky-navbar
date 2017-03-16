import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import StickyNavbar from './StickyNavbar.jsx';

class App extends React.Component {

    constructor(props) {

        super(props);
        this.getMain = this.getMain.bind(this);

    }

    getMain() {
        return this.main;
    }

    render() {

    return (
        <div>
            <div id="background"></div>
            <StickyNavbar headings={['hej', 'hopp']} socialMedia={['facebook', 'soundcloud']} elementToStickTo={this.getMain}/>
            <div id="main" ref={(main) => { this.main = main; }}>
                <p>Hejhej</p>
            </div>
        </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
