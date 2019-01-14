require('normalize.css/normalize.css');
require('./index.css');
// require( 'fullpage.js');

import fullpage from 'fullpage.js';
// When using fullPage extensions replace the previous import
// of fullpage.js for this file
//import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// Initializing it
var fullPageInstance = new fullpage('#fullpage', {
    navigation: true,
    sectionsColor:['#b5e9e9', '#fef6dd', '#ffe1d0', '#fff1b5', '#dcf3d0']
});

console.log(fullPageInstance);

class Foo {
    constructor(){
        this.value = "foobar"
    }
    static instance() {
        return new Foo()
    }
    getValue() {
        return this.value
    }
}