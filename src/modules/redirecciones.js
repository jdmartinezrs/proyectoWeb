import { LitElement, html, css } from 'lit-element';
import "./productos.js"
import "./abrigos.js"
import "./camisetas.js"
import "./pantalones.js"
import "./carrito.js"

class MiComponente extends LitElement {
  static get properties() {
    return {
      opcionNav: { type: String }
    };
  }

  constructor() {
    super();
    this.opcionNav = '';
  }

  render() {
    return html`
      <div class="contenido">
        ${this.opcionNav === 'todos los productos'
          ? html`<my-productos></my-productos>`
          : ''}
        ${this.opcionNav === 'abrigos'
          ? html`<my-abrigos></my-abrigos>`
          : ''}
        ${this.opcionNav === 'camisetas'
          ? html`<my-camisetas></my-camisetas>`
          : ''}
        ${this.opcionNav === 'pantalones'
          ? html`<my-pantalones></my-pantalones>`
          : ''}
        ${this.opcionNav === 'carrito'
          ? html`<my-carrito></my-carrito>`
          : ''}
      </div>
    `;
  }
}

customElements.define('my-component', MiComponente);
