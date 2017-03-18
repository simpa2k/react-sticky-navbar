import React from 'react';
import List from './List.jsx';

class SocialMediaList extends List {

    constructor(props) {
        super(props);
    }

    createElement(element, classes) {
        return <a className={classes} href={element.destination}>
            <img src={element.src}></img>
        </a>;
    }
}

export default SocialMediaList;