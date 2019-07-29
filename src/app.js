import {} from 'normalize.css/normalize.css';
import {} from 'fullpage.js/dist/fullpage.css';
import {} from './app.scss';
import template from './index.html';
import Home from "./home/home.index";
import AboutMe from './about-me/about-me.index'
import Project from "./project/project.index";
import Life from "./life/life.index"
import Social from "./social/social.index";

const fullpage = require('fullpage.js');

class App {

    constructor(element) {
        this._element = element;
        this.applyTemplates();
        this.bind();
    }

    applyTemplates() {
        this._element.innerHTML = template;
        new Home(this._element.querySelector('#home-wrapper'))
        new AboutMe(this._element.querySelector('#about-me-wrapper'));
        new Project(this._element.querySelector('#graphql-project-wrapper'), 'graphql');
        new Project(this._element.querySelector('#game-of-life-project-wrapper'), 'gameoflife');
        new Project(this._element.querySelector('#junit5-project-wrapper'), 'junit5');
        new Project(this._element.querySelector('#pencil-project-wrapper'), 'pencil');
        new Project(this._element.querySelector('#ggcurling-project-wrapper'), 'ggcurling');
        new Life(this._element.querySelector('#life-wrapper'));
        new Social(this._element.querySelector('#social-wrapper'));
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
            keyboardScrolling: true,
            animateAnchor: true,
            responsiveSlides: false,
            // temporary key
            licenseKey: 'K+iR`\'tZ3U>3qx+%6A"& b|7nF+)C$Qb]HKc_e8KFh/S%1hpL%WkU\\dd\\dwwd\\-\\\\wwd\\wd-\\w\\wwdw\\-\\ddwdddw\\\\d\\dddd-wdwd\\wddw\\wddd\\\\-w\\dw\\\\wwdd\\\\\\\\w\\-dw\\dwww\\-\\\\\\\\\\d\\d-\\dd\\w\\d\\g.R`6(;r/c8Bu5rp/IYcI5XLt2|F!wbU.<+Ru"p] FH#wEd!JQp|B0}38WgF05lX3RawxbD5G\\=XsSb8hK9QMGq}:v`oCs{n!OC59vnUoh'
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