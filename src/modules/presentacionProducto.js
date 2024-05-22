import { LitElement, html, css } from 'lit';
import "./complementoCarritos.js"

class infoProducto extends LitElement {
  static styles = css`
    :host{
      width: 17vw;
      height: 37vh;
      background: var(--color-cuarto);
    }
    .div5_1 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
     
    }

    .div5_1 img {
      width: 100%;
      height: 100%;
    }

    .div5_1_1 {
      width: 100%;
      height: 30%;
      background: var(--color-secundario);
      border: 2px solid var(--color-tercero);
      display: flex;
      border-radius: 1em;
    }

    .div5_1_1_p {
      width: 55%;
      height: 100%;
      align-items: center;
      font-size: .9em;
      line-height: 2.5em;
      display:flex;
      flex-direction: column;
      margin-left: .5em;
    }
    .nombre{
      overflow:scroll;
    }
    .nombre::-webkit-scrollbar {
      display: none;
    }
    @media only screen and (max-width: 800px) {
      :host{
        width: 43vw;
        height: 33vh;
      }
      .nombre{
        overflow-y:scroll;
        font-size: .8em;
        line-height: 1;
      }
      .precio{
        font-size: .8em;
      }
    }
  `;

  static properties = {
    imgSrc: { type: String },
    productName: { type: String },
    price: { type: String },
    productId: { type: String },
    productType: { type: String }
  };

  constructor() {
    super();
    this.imgSrc = '';
    this.productName = '';
    this.price = '';
    this.productId = '';
    this.productType = '';
  }

  handleAddToCart() {
    this.dispatchEvent(new CustomEvent('add-to-cart', {
      detail: {
        productId: this.productId,
        productType: this.productType,
        nombre: this.productName,
        imagen: this.imgSrc,
        precio: this.price
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="div5_1">
        <img src=${this.imgSrc} alt="Product Image" />
        <div class="div5_1_1">
          <div class="div5_1_1_p">
            <div class="nombre">${this.productName}</div>
            <div class="precio">${this.price}</div>
          </div>
          <toggle-menu @click=${this.handleAddToCart}></toggle-menu>
        </div>
      </div>
    `;
  }
}

customElements.define('my-infodeproducto', infoProducto);