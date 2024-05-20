import {LitElement,html,css} from 'lit-element';
import"./allProducts.js"
import"./my-abrigo.js"
import"./my-pantalon.js"
import"./my-camiseta.js"


class MiComponente extends LitElement{
    static get properties(){
        return{
            opcionSeleccionada:
            {type: String}
        };
    }

 constructor(){
    super();
     this.opcionSeleccionada = "";

 }
 render(){
    return html`
    
    <div class='magic'>
    ${this.opcionSeleccionada === 'Todos los productos'
    ? html`<all-products></all-products>`
    : ''}
  ${this.opcionSeleccionada === 'Abrigos'
    ? html`<all-abrigogotten></all-abrigogotten>`
    : ''}
  ${this.opcionSeleccionada === 'Camisetas'
    ? html`<all-camisetagotten></all-camisetagotten>`
    : ''}
  ${this.opcionSeleccionada === 'Pantalones'
    ? html`<all-pantalongotten></all-pantalongotten>`
    : ''}
  ${this.opcionSeleccionada === 'Carrito'
    ? html`<my-cart></my-cart>`
    : ''}
</div>

    ` 
 }

 




}
customElements.define('my-component', MiComponente);
 