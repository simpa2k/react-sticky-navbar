/**
 * A function to find the y position of an element,
 * relative to the document.
 *
 * @param element the DOM element to find the position of.
 * @return the y position of the element passed to the function,
 * relative to the document.
 * @author Simon Olofsson
 */
let offsetTop = function(element) {

    let bRect = element.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return bRect.top + scrollTop;

};

module.exports = offsetTop;
