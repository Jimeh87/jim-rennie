require('normalize.css/normalize.css');
require('fullpage.js/dist/fullpage.css');
require('./index.scss');
const fullpage = require('fullpage.js');

const fullPageInstance = new fullpage('#content', {
    menu: '#menu',
    navigation: false,
    // navigationPosition: "right",
    sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', 'grey'],
    showActiveTooltip: true,
    slidesNavigation: true,
    recordHistory: false,
    css3: true,
    // scrollBar: false,
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    controlArrows: true,
    verticalCentered: false,
    // fixedElements: ‘#header, .footer’,
    keyboardScrolling: true,
    animateAnchor: true
});

// console.log(fullPageInstance);