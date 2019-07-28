import {} from 'normalize.css/normalize.css';
import {} from './life.index.scss';
import template from './life.index.html';

export default class AboutMe {

    constructor(element) {
        this._element = element;
        this.setTemplate();
    }

    setTemplate() {
        this._element.innerHTML = template;
    }

}