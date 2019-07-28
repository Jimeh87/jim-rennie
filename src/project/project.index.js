import {} from 'normalize.css/normalize.css';
import {} from './project.index.scss';
import gameoflifetemplate from './gol-project.index.html';
import graphqltemplate from './graphql-project.index.html';
import junit5template from './junit5-project.index.html';
import ggcurlingtemplate from './ggcurling-project.index.html';
import penciltemplate from './pencil-project.index.html';

export default class Project {

    constructor(element, project) {
        this._element = element;
        this.setTemplate(project);
    }

    setTemplate(project) {
        switch(project) {
            case 'gameoflife':
                this._element.innerHTML = gameoflifetemplate;
                break;
            case 'graphql':
                this._element.innerHTML = graphqltemplate;
                break;
            case 'junit5':
                this._element.innerHTML = junit5template;
                break;
            case 'pencil':
                this._element.innerHTML = penciltemplate;
                break;
            case 'ggcurling':
                this._element.innerHTML = ggcurlingtemplate;
                break;
        }
    }

}