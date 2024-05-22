import { LitElement, html, css } from "lit";

class infoPedidos extends LitElement {
  static styles = css`
    :host {
      width: 95%;
      height: 21vh;
      background: var(--color-cuarto);
      border-radius: 3em;
    }
    .div5_1 {
      width: 100%;
      height:100%;
      background: var(--color-secundario);
      display: flex;
      align-items: center;
      border-radius: 3em;
      gap:72px;

      
    }
    .contenedor_imagen {
      width: 25%;
      height: 90%;
      display: flex;
      justify-content: center;
    }
    .contenedor_imagen img {
      width: 50%;
      height: 100%;
      /* background: green; */
    }
    .nombre{
        font-size:.8em;
    }
    .div5_1_nombre,
    .div5_1_precio,
    .div5_1_subtotal,
    .div5_1_cantidad {
      width: 18%;
      height: 80%;
      font-size: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5em;
      /* background: red; */
    }
    .div5_trash{
        width:8%;
        height:30%;
    }
    button{
        appearance: auto;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        line-height: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        cursor: pointer;
        box-sizing: border-box;
        background: var(--color-primary);
        margin-right: 1em;
        padding-block: 0px;
        padding-inline: 0px;
        border-width: 0px;
        border-style: outset;
        border-color: buttonborder;
        border-image: none;
    }
    .bx-trash{
      height:100%;
      width:100%;
      font-size: 4.5em;
      color: var(--color-primario);
    }
    @media only screen and (max-width: 800px) {
      :host{
        width: 100vw;
        height: 22vh;
        
      }
      .div5_1 {
        width: 100%;
        height:100%;
        gap: .5em;
      }
      .contenedor_imagen {
        width: 80%;
        height: 60%;
      }
      .contenedor_imagen img {
        width: 90%;
        height: 100%;
      }
      .nombre{
        font-size: .8em;
        line-height: 1;
      }
      .precio{
        font-size: .8em;
      }
      .div5_1_nombre,
      .div5_1_precio,
      .div5_1_subtotal,
      .div5_1_cantidad {
      width: 41%;
      height: 80%;
      font-size: .8em;
      gap: 1em;
      text-align:center;
      }
      button{
        font-size:.75em;
      }
      .bx-trash{
        height:100%;
        width:100%;
        font-size: 4em;
      }
    }
  `;

  static properties = {
    imgSrc: { type: String },
    productName: { type: String },
    price: { type: String },
    cuantity: { type: String },
    subtotal: { type: String },
    productId: { type: String }
  };

  constructor() {
    super();
    this.imgSrc = "";
    this.productName = "";
    this.price = "";
    this.cuantity = "";
    this.subtotal = "";
    this.productId = "";

  }

  handleDelete() {
    console.log(`Producto a eliminar con ID: ${this.productId}`);
    const event = new CustomEvent('delete-product', {
      detail: { id: this.productId },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }


  render() {
    return html`
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <div class="div5_1">
        <div class="contenedor_imagen">
          <img src=${this.imgSrc} alt="Product Image" />
        </div>
        <div class="div5_1_nombre">
          Nombre <br />
          <div class="nombre">${this.productName}</div>
        </div>
        <div class="div5_1_cantidad">
          <div class="div5_1_cantidad_palabra">Cantidad</div>
          <div class="nombre">${this.cuantity}</div>
        </div>
        <div class="div5_1_precio">
          Precio<br />
          <div class="nombre">${this.price}</div>
        </div>
        <div class="div5_1_subtotal">
          Subtotal <br />
          <div class="nombre">$ ${this.subtotal}</div>
        </div>
        <button id="btnTrash" class="div5_trash" @click="${this.handleDelete}">
          <i class="bx bx-trash"></i>
        </button>
      </div>
    `;
  }
}

customElements.define("my-infodepedido", infoPedidos);