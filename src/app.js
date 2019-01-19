import {} from 'normalize.css/normalize.css';
import {} from 'fullpage.js/dist/fullpage.css';
import {} from './app.scss';
import template from './index.html';

const fullpage = require('fullpage.js');

export class App {

    constructor(element) {
        this._element = element;
        this.setTemplate();
        this.bind();
    }

    setTemplate() {
        this._element.innerHTML = template;
        new fullpage('#content', {
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
    }

    bind() {
        this._element.querySelector('#my-first-button').onclick = function () {
            console.log('bar');
        };

        this._element.querySelector('#menu-toggle').onclick = function (event) {
            const target = event.target;
            target.classList.toggle('open');
        };

        this._element.querySelector('#content').onclick = function () {
            this._element.querySelector('#menu-toggle').classList.remove('open');
        }.bind(this);

        this._element.querySelector('#menu').onclick = function () {
            this._element.querySelector('#menu-toggle').click();
        }.bind(this);
    }


}

new App(document.body);