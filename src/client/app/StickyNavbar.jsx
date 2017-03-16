import React from 'react';

class StickyNavbar extends React.Component {

    constructor(props) {

        super(props);
        this.expanded = false;
        this.fixatedAtElement = true;

        this.getNavbar = this.getNavbar.bind(this);
        this.navbarPositionListener = this.navbarPositionListener.bind(this);
        //this.fixateElementPositionTop = this.fixateElementPositionTop().bind(this);
        //this.fixateElementPositionBottom = this.fixateElementPositionBottom.bind(this);

    }

    componentDidMount() {
        window.addEventListener('scroll', this.navbarPositionListener);
    }

    componentWillUnmount() {
        window.removeEvent('scroll', this.navbarPositionListener);
    }

    getNavbar() {
        return this.navbar;
    }

    offsetTop(element) {

        let bRect = element.getBoundingClientRect();
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return bRect.top + scrollTop;

    }

    navbarPositionListener() {

        let navbar = this.getNavbar();
        let elementToStickToY = this.offsetTop(this.props.elementToStickTo());
        let topOfWindowAlignsWithTopOfNavbar = window.scrollY > (elementToStickToY - navbar.clientHeight);

        if(topOfWindowAlignsWithTopOfNavbar) {
            this.fixateElementPositionTop(navbar, navbar.clientHeight);
        } else {
            this.fixateElementPositionBottom(navbar, elementToStickToY);
        }

    }

    fixateElementPositionTop(navbar, navbarHeight) {

        this.fixatedAtElement = false;

        navbar.style.zIndex = '10';
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.height = String(navbarHeight) + 'px';

    }

    fixateElementPositionBottom(navbar, elementToStickToY) {

        this.fixatedAtElement = true;

        navbar.style.zIndex = '10';
        navbar.style.position = 'absolute';
        navbar.style.bottom = String(elementToStickToY);
        navbar.style.top = '';

    }

    getHeadings() {

        return this.props.headings.map((heading, index) =>
            <li key={index}>{heading}</li>
        );
    }

    getSocialMedia() {

        return this.props.socialMedia.map((socialMediaItem, index) =>
            <li key={index}>{socialMediaItem}</li>
        );
    }

    render() {

        return (

            <nav id="navbar" ref={(navbar) => { this.navbar = navbar; }}>
                <div className="container-fluid">
                    <a className="navbar-brand">
                    </a>

                    <ul>{this.getHeadings()}</ul>

                    <div id="social-media-section">{this.getSocialMedia()}</div>
                    <button id="navbar-button" type="button" className="btn btn-default"><span className="glyphicon glyphicon-menu-hamburger"></span></button>
                </div>
            </nav>

        );
    }
}

export default StickyNavbar;
