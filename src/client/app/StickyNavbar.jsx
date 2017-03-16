import React from 'react';

class StickyNavbar extends React.Component {

    constructor(props) {

        super(props);
        this.expanded = false;
        this.fixatedAtElement = true;

        this.navbarPositionListener = this.navbarPositionListener.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

    }

    componentDidMount() {
        window.addEventListener('scroll', this.navbarPositionListener);
    }

    componentWillUnmount() {
        window.removeEvent('scroll', this.navbarPositionListener);
    }

    offsetTop(element) {

        let bRect = element.getBoundingClientRect();
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return bRect.top + scrollTop;

    }

    navbarPositionListener() {

        let navbar = this.navbar;
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

    toggleNavbar() {

        var navbarButton = this.navbarBtn;

        if(this.navbar.hasClass('expanded')) {
            element.removeClass('expanded');
            element.css('height', String(collapsedNavbarHeight) + 'px');

            checkNavbarLowerEdge();

            navbarButton.removeClass('active');
        } else {
            element.addClass('expanded');
            expandedNavbarHeight = $(element).children('.container-fluid').height();
            element.css('height', String(expandedNavbarHeight) + 'px');

            checkNavbarUpperEdge();

            navbarButton.addClass('active');
        }
    }

    map(element, list) {
        return list.map((item, index) =>
            React.createElement(
                element,
                {key: index},
                item
            )
        );
    }

    list(list) {
        return this.map('li', list);
    }

    render() {

        return (

            <nav id="navbar" ref={(navbar) => { this.navbar = navbar; }}>
                <div className="container-fluid">
                    <a className="navbar-brand"></a>

                    <ul>{this.list(this.props.headings)}</ul>

                    <div id="social-media-section">{this.list(this.props.socialMedia)}</div>
                    <button id="navbar-button" type="button" className="btn btn-default"
                            onClick={this.toggleNavbar}
                            ref={(navbarBtn) => { this.navbarBtn = navbarBtn; }}>
                        <span className="glyphicon glyphicon-menu-hamburger"></span>
                    </button>
                </div>
            </nav>

        );
    }
}

export default StickyNavbar;
