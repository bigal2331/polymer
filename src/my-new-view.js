//importing PolymerElment base class and 'html' helper function
import { PolymerElement, html} from '@polymer/polymer/polymer-element.js';
//importing the view styles
import './shared-styles.js';

class MyNewView extends PolymerElement{
    
    //defining the required template function (getter)
    static get template(){
        // pass a string literal to the html helper function to return an instance of
        // HTMLTemplateElement
        return html `
          <style include="shared-styles">
            :host {
                display: block;
                padding: 10px;
            }
          </style>
          <div class="card">
            <div class="circle">1</div>
            <h1>New View</h1>
            <p>New View!!</p>
          </div>
        
        `;
    }
    
}

/*
    - register the new custom element with the browser
    - custom elements have to be named in lower case separated by a "-"
*/

window.customElements.define('my-new-view', MyNewView);