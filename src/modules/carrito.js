import { LitElement, html, css } from 'lit';
import { getCombinedData } from './consultas.js';
import './informacionProductoPedido.js';
import 'animate.css';

class MyElement extends LitElement {
  static styles = css`
  .product-list {
    width: 100%;
    height: 80%;
    padding: 0 0 0 1.5em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.8em;
    max-height: 70vh;
    overflow-y: hidden;
  }
  .product-list::-webkit-scrollbar {
    display: none;
  }
  .footer {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .vaciarCarrito_1 {
    width: 15%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vaciarCarrito_1 p {
    font-size: 1.5em;
  }

  .comprarCarrito {
    width: 40%;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    appearance: auto;
    text-rendering: auto;
    color: var(--color-primario);
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: pointer;
    box-sizing: border-box;
    background: var(--color-secundario);
    border-radius: 1em;
    margin-right: 1em;
    border-width: 0px;
    border-style: outset;
    border-color: buttonborder;
    border-image: none;
  }
  .total {
    display: flex;
    width: 37%;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }
  .total p {
    font-size: 1em;
  }
  @media only screen and (max-width: 800px) {
    :host {
      width: 100%;
      height: 30%;
    }
    .product-list {
      width: 100%;
      height: 10%;
      padding: 0 0 0 1.5em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1em;
      overflow-y: scroll;
    }
    .product-list::-webkit-scrollbar {
      display: none;
    }
    .footer {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .vaciarCarrito_1 {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .vaciarCarrito_1 p {
      font-size: 1em;
    }
    .comprarCarrito {
      width: 40%;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .total {
      display: flex;
      width: 60%;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
    }
    .total p {
      font-size: 1em;
    }
  }

  `;

  static properties = {
    products: { type: Array },
  };

  constructor() {
    super();
    this.products = [];
    this.pollingInterval = 2000;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadProducts();
    this.startPolling();
    this.addEventListener('add-to-cart', this.handleAddToCart.bind(this));
  }

  async disconnectedCallback() {
    super.disconnectedCallback();
    this.stopPolling();
    this.removeEventListener('add-to-cart', this.handleAddToCart.bind(this));
  }

  async loadProducts() {
    const carts = await getCombinedData();
    this.products = [...carts];
    this.dispatchEvent(new CustomEvent('carrito-actualizado', { bubbles: true, composed: true }));
  }

  startPolling() {
    this.polling = setInterval(async () => {
      await this.loadProducts();
    }, this.pollingInterval);
  }

  stopPolling() {
    if (this.polling) {
      clearInterval(this.polling);
      this.polling = null;
    }
  }

  getTotal() {
    return this.products.reduce((acc, product) => acc + product.subtotal, 0);
  }

  async vaciarCarrito() {
    try {
      const response = await fetch('http://localhost:5501/carrito');
      const carrito = await response.json();

      await Promise.all(
        carrito.map(item =>
          fetch(`http://localhost:5501/carrito/${item.id}`, {
            method: 'DELETE'
          })
        )
      );
      this.dispatchEvent(new CustomEvent('carrito-actualizado', { bubbles: true, composed: true }));
      await this.loadProducts();
    } catch (error) {
      console.error('Error al vaciar el carrito', error);
    }
  }

  async compraCompletada() {
    try {
      const response = await fetch('http://localhost:5501/carrito');
      const carrito = await response.json();

      await Promise.all(
        carrito.map(item =>
          fetch(`http://localhost:5501/carrito/${item.id}`, {
            method: 'DELETE'
          })
        )
      );
      this.dispatchEvent(new CustomEvent('carrito-actualizado', { bubbles: true, composed: true }));
      await this.loadProducts();
    } catch (error) {
      console.error('Error al vaciar el carrito', error);
    }
  }

  async eliminarProducto(id) { 
    try {
      console.log(`Eliminando producto con ID: ${id}`);
      const response = await fetch(`http://localhost:5501/carrito/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        await this.loadProducts();
        this.dispatchEvent(new CustomEvent('carrito-actualizado', { bubbles: true, composed: true }));
      } else {
        console.error('Error al eliminar el producto', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar el producto', error);
    }
  }

  handleDeleteProduct(event) {
    const productId = event.detail.id;
    this.eliminarProducto(productId);
  }

  async handleAddToCart(event) {
    const { productId, productType, productName, price, imgSrc } = event.detail;
    const existingProductIndex = this.products.findIndex(item => item.productId === productId && item.type === productType);

    if (existingProductIndex !== -1) {
      this.products[existingProductIndex].cantidad += 1;
      this.products[existingProductIndex].subtotal = this.products[existingProductIndex].cantidad * parseFloat(price.replace('$', ''));
    } else {
      const newProduct = {
        id: Date.now().toString(),
        productId,
        type: productType,
        nombre: productName,
        precio: price,
        imagen: imgSrc,
        cantidad: 1,
        subtotal: parseFloat(price.replace('$', ''))
      };
      this.products = [...this.products, newProduct];
    }

    console.log("Productos actualizados:", this.products);

    await this.saveProducts();
    this.dispatchEvent(new CustomEvent('carrito-actualizado', { bubbles: true, composed: true }));
    this.requestUpdate();
  }

  async saveProducts() {
    try {
      await fetch('http://localhost:5501/carrito', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.products)
      });
    } catch (error) {
      console.error('Error al guardar los productos', error);
    }
  }

  confirmarVaciarCarrito() {
    this.vaciarCarrito();
  }

  handleComprar() {
    this.compraCompletada();
  }

  render() {
    return html`
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <div class="product-list" @delete-product="${this.handleDeleteProduct}">
        ${this.products.map(
          (product) => html`
            <my-infodepedido
              imgSrc="${product.imagen}"
              productName="${product.nombre}"
              cuantity="${product.cantidad}"
              price="$ ${product.precio}"
              subtotal="${product.subtotal}"
              productId="${product.productId}" 
              type="${product.type}" 
            ></my-infodepedido>
          `
        )}
      </div>
      <div class="footer">
        <button class="vaciarCarrito_1" @click="${this.confirmarVaciarCarrito}">
          <p>Vaciar Carrito</p>
        </button>
        <div class="total">
          <p>
            Total<br>
            $ ${this.getTotal()}
          </p>
          <button class="comprarCarrito" @click="${this.handleComprar}">
            <p style="font-size: 1.5em;">Comprar</p>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("my-carrito", MyElement);


