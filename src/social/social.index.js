import {} from 'normalize.css/normalize.css';
import {} from './social.index.scss';
import template from './social.index.html';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"


export default class Social {

    constructor(element) {
        library.add(fab);
        dom.watch();
        this._element = element;
        this.setTemplate();
    }

    setTemplate() {
        this._element.innerHTML = template;
    }

}