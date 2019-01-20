import {} from 'normalize.css/normalize.css';
import {} from 'fullpage.js/dist/fullpage.css';
import {} from './app.scss';
import template from './index.html';
import AboutMe from './about-me/about-me.index'

const fullpage = require('fullpage.js');

class App {

    constructor(element) {
        this._element = element;
        this.applyTemplates();
        this.bind();
    }

    applyTemplates() {
        this._element.innerHTML = template;
        this._aboutMe = new AboutMe(this._element.querySelector('#about-me-wrapper'));
    }

    bind() {
        this.bindFullPage();
        this.bindToHtml();
    }

    bindFullPage() {
        new fullpage('#content', {
            menu: '#menu',
            navigation: false,
            sectionsColor: ['#130303', '#071E22', '#2F3061', '#F4C095', '#A54657'],
            showActiveTooltip: true,
            slidesNavigation: true,
            recordHistory: false,
            css3: true,
            scrollBar: false,
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            controlArrows: true,
            verticalCentered: false,
            // fixedElements: ‘#header, .footer’,
            keyboardScrolling: true,
            animateAnchor: true
        });
    }

    bindToHtml() {
        this._element.querySelector('#menu-toggle').onclick = function () {
            this._element.querySelector('#menu-toggle').classList.toggle('open');
        }.bind(this);

        this._element.querySelector('#content').onclick = function () {
            this._element.querySelector('#menu-toggle').classList.remove('open');
        }.bind(this);

        this._element.querySelector('#menu').onclick = function () {
            this._element.querySelector('#menu-toggle').click();
        }.bind(this);
    }

}

new App(document.body);