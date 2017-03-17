/**
 * Created by simpa2k on 2017-03-17.
 */

let offsetTop = function(element) {

    let bRect = element.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return bRect.top + scrollTop;

};

module.exports = offsetTop;
