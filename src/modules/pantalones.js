import { LitElement, html, css } from 'lit';
import {
  dataPantalones
} from "./consultas.js";
import "./presentacionProducto.js";


class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .product-list {
      width: 95%;
      height: 95%;
      padding: 0 0 0 1.5em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 130px;
      max-height: 80vh;
      overflow-y: scroll;
    }
    .product-list::-webkit-scrollbar{
      display: none;
    }
    @media only screen and (max-width: 800px){
      .product-list {
        width: 95%;
        height: 100%;
        gap: 1em;
        max-height: 69vh;
        overflow-y: scroll;
      }
    }
  `;

  static properties = {
    products: { type: Array }
  };

  constructor() {
    super();
    this.products = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadProducts();
  }

  async loadProducts() {
    try {
      const pants = await dataPantalones();
      this.products = [...pants];
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }

  async addToCart(product) {
    const carritoResponse = await fetch('http://localhost:5501/carrito');
    const carrito = await carritoResponse.json();

    const productTypeIdField = `${product.productType}Id`;

    const existingProduct = carrito.find(item => item[productTypeIdField] === product.productId);

    if (existingProduct) {
      existingProduct.cantidad += 1;
      await fetch(`http://localhost:5501/carrito/${existingProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(existingProduct)
      });
    } else {
      const newProduct = {
        cantidad: 1,
        [productTypeIdField]: product.productId,
        id: String(carrito.length + 1) // Obtén el siguiente id consecutivo
      };
      await fetch('http://localhost:5501/carrito', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
    }

    this.dispatchEvent(new CustomEvent('carrito-actualizado', { bubbles: true, composed: true }));
  }

  handleAddToCart(event) {
    this.addToCart(event.detail);
  }

  render() {
    return html`
      <div class="product-list" @add-to-cart="${this.handleAddToCart}" >
        ${this.products.map(
          product => html`
            <my-infodeproducto
              imgSrc="${product.imagen}"
              productName="${product.name}"
              price="$ ${product.precio}"
              productId="${String(product.id)}"
              productType="pantalon"
            ></my-infodeproducto>
          `
        )}
      </div>
    `;
  }
}

customElements.define('my-pantalones', MyElement);
