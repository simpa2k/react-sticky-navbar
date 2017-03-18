import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function SocialMediaText(props) {
    return (

        <div>
            <ReactCSSTransitionGroup transitionName={"sm"}
                                     transitionEnterTimeout={200}
                                     transitionLeaveTimeout={200} >
            {props.text}
            </ReactCSSTransitionGroup>
        </div>

    );
}

export default SocialMediaText;