import { LitElement, html, css } from "lit";

class ToggleMenu extends LitElement {
  static styles = css`
    .button {
      --width: 100px;
      --height: 35px;
      margin: 4em 1em 1em 0.5em;
      width: var(--width);
      height: var(--height);
      background: var(--color-quinto);
      position: relative;
      text-align: center;
      border-radius: 0.5em;
      font-family: "Arial";
      transition: background 0.7s;
    }
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button-wrapper,
    .text {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      color: #fff;
    }

    .button:hover {
      cursor: pointer;
    }

    .text:hover {
      cursor: pointer;
      color: var(--color-secundario);
      background: var(--color-cuarto);
      border-radius: 0.5em;
    }

    .menu {
      display: none;
    }

    .menu[open] {
      display: block;
    }
    @media only screen and (max-width: 800px) {
      .button {
        --width: 40px;
        --height: 20px;
        margin: 4em 1em 1em 0.5em;
        font-size:.5em;
      }
    }
  `;

  static properties = {
    open: { type: Boolean },
    product: { type: Object }
  };

  constructor() {
    super();
    this.open = false;
    this.product = {};
  }
toggleMenu() {
  this.open = !this.open;
  if (this.product.productId && this.product.productType && this.product.productName && this.product.price && this.product.imgSrc) {
    this.dispatchEvent(new CustomEvent('add-to-cart', { 
      detail: this.product, 
      bubbles: true, 
      composed: true 
    }));
  }
}

  render() {
    return html`
      <div class="button" @click=${this.toggleMenu}>
        <div class="button-wrapper">
          <div class="text">Agregar</div>
        </div>
      </div>
    `;
  }
}
customElements.define("toggle-menu", ToggleMenu);