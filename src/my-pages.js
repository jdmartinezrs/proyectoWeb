import {LitElement,html,css} from 'lit-element';
import"./allProducts.js"
import"./my-abrigo.js"
import"./my-pantalon.js"
import"./my-camiseta.js"
import"./my-car.js"

class MiComponente extends LitElement {
  static get properties() {
    return {
      opcionSeleccionada: { type: String }
    };
  }

  constructor() {
    super();
    this.opcionSeleccionada = '';
  }

  render() {
    return html`
      <div class="contenido">
        ${this.opcionSeleccionada === 'todos los productos'
          ? html`<all-products></all-products>`
          : ''}
        ${this.opcionSeleccionada === 'abrigos'
          ? html`<all-abrigogotten></all-abrigogotten>`
          : ''}
        ${this.opcionSeleccionada === 'camisetas'
          ? html`<all-camisetagotten></all-camisetagotten>`
          : ''}
        ${this.opcionSeleccionada === 'pantalones'
          ? html`<all-pantalongotten></all-pantalongotten>`
          : ''}
        ${this.opcionSeleccionada === 'carrito'
          ? html`<my-car></my-car>`
          : ''}
      </div>
    `;
  }
}

customElements.define('my-component', MiComponente);
 