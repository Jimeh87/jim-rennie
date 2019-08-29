import {} from 'normalize.css/normalize.css';
import {} from './blog.index.scss';
import template from './blog.index.html';

export default class AboutMe {

    constructor(element) {
        this._element = element;
        this.setTemplate();
    }

    setTemplate() {
        this._element.innerHTML = template;
    }

}