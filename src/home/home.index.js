import {} from 'normalize.css/normalize.css';
import {} from './home.index.scss';
import template from './home.index.html';

export default class Home {

    constructor(element) {
        this._element = element;
        this.setTemplate();
    }

    setTemplate() {
        this._element.innerHTML = template;
    }

}