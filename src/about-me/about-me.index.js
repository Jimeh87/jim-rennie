import {} from 'normalize.css/normalize.css';
import {} from './about-me.index.scss';
import template from './about-me.index.html';

export default class AboutMe {

    constructor(element) {
        this._element = element;
        this.setTemplate();
    }

    setTemplate() {
        this._element.innerHTML = template;
    }

}