import { LitElement, html, css } from "lit-element";
import './modules/redirecciones.js';

class MyBodyComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100vh;
        background: var(--color-secundario);
        color: var(--color-primario);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        overflow:hidden;
        display: grid;
        grid-template-columns: .1fr 1fr 4fr;
        grid-template-rows: repeat(6, 1fr);
        grid-template-areas:
          ". logo img"
          ". menus img"
          ". menus img"
          ". . img"
          ". carrito img"
          ". derechos img";
      }

      .div1 {
        grid-area: logo;
      }
      .div1_h1 {
        font-size: 2.5em;
      }
      #toggleMenu {
        display: none;
      }
      .div2 {
        grid-area: menus;
      }
      .menu{
        height:100%;
        width:100%;
        display:flex;
      }
      .div2_ul {
        height: 100%;
        width:100%;
        font-size: 1.5em;
        display: flex;
        flex-direction: column;
        padding-inline-start: 0px;
        margin-block-start: 0em;
        margin-block-end: 0em;
      }
      .div2_ul_li {
        height:100%;
        width:100%;
        list-style-type: none;
        
      }
      button{
        height:90%;
        width:100%;
        text-indent: 0px;
        text-shadow: none;
        text-align: center;
        cursor: pointer;
        margin: 0em;
        padding-block: 0px;
        padding-inline: 0px;
        border-width: 0px;
        display:flex;
        align-items: center;
        font-size: 1em;
        gap:10px;
        background: var(--color-secundario);
        color: var(--color-primario);
      }
      .opcion-seleccionada {
        background: var(--color-cuarto);
      }
      .div3 {
        grid-area: carrito;
        height:50%;
      }
      .div3_1 {
        font-size: 1.5em;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5em;
      }
      .bxs-cart {
        font-size: 1.5em;
      }
      .div3_1_3 {
        background: var(--color-cuarto);
        width: 8%;
        border: 3px solid var(--color-primario);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #btnCarrito{
        font-size:1.2em;
      }
      .div4 {
        grid-area: derechos;
      }
      .div4_p {
        font-size: 1.5em;
      }
      .div5 {
        width: 99%;
        height: 98%;
        margin-top: .5em;
        grid-area: img;
        background: var(--color-cuarto);
        border-radius: 3em;
        overflow-y: hidden;
      
      }
      .div5_p {
        width: 100%;
        height: 10vh;
        font-size: 3em;
        padding: 0.5em 0 0em 0.5em;
        display: flex;
        margin-block-start: 0em;
        margin-block-end: 0em;
        
      }
      @media only screen and (max-width: 800px) {
        :host {
          padding: 0.5em 0.5em 0.5em 0.5em;
          grid-template-columns: 1fr;
          grid-template-rows: .5fr .5fr .5fr 10fr .5fr;
          grid-template-areas:
            "logo"
            "menus"
            "carrito"
            "img"
            "derechos";
        }
        .div1{
          display:flex;
          flex-direction:column;
        }
        .div1_h1 {
          font-size: 1em;
        }
        .div2 nav{
          display: none;
          background: var(--color-cuarto);
          border: 1px solid var(--color-terciario);
        }
        #toggleMenu{
          display: block;
          font-size: 1em;
          width: 100%;
          /*background: var(--color-menu);*/
          text-shadow: 
          0 0 20px #DD761C, 
          0 0 25px #DD761C, 
          0 0 30px #DD761C, 
          0 0 35px #DD761C;
        }
        .div2_ul {
          padding-top: 0em;
          gap: 0em;
          margin-top: 0em;
          background: var(--color-terciario);
        }
        button{
          height:90%;
          width:100%;
          text-indent: 0px;
          text-shadow: none;
          text-align: center;
          cursor: pointer;
          margin: 0em;
          padding-block: 0px;
          padding-inline: 0px;
          border-width: 0px;
          display:flex;
          align-items: center;
          font-size: .8em;
          gap:15px;
          background: var(--color-secundario);
          color: var(--color-primario);
        }
        
        .div3 {
          grid-area: carrito;
          height:80%;
        }
        .div3_1 {
          font-size: ;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5em;
        }
        .bxs-cart {
          font-size: .8em;
        }
        .div3_1_3 {
          background: var(--color-cuarto);
          width: 5%;
          border: 3px solid var(--color-primario);
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #btnCarrito{
          font-size:1.2em;
        }
        .opcion-seleccionada {
          background: var(--color-secundario);
        }
        .div4 {
          width:100%;
          height:100%;
        }
        .div4_p {
          padding-top: 0em;
          margin-block-start: 0em;
          margin-block-end: 0em;
        }
        .div5{
          height:100%;
          width:100%;
          
          
        }
        .div5_p {
          width: 100%;
          height: 5%;
          font-size: 33px;
          padding: 0.8em 0 0em 1em;
          padding-top: 30px;
          display: flex;
          margin-block-start: 0em;
          margin-block-end: 0em;
        
        }
        .div2_ul_li_p{
          font-size: 5px;
        }
      }
    `;
    };
  render() {
    return html`
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <div class="div1">
        <h1 class="div1_h1">CampusShop</h1>
        <br />
        <button id="toggleMenu">Menu</button>
      </div>
      <div class="div2">
        <nav id="menu" class="menu">
          <ul class="div2_ul">
            <li class="div2_ul_li" id="todosProductos">
              <button id="btnTodosProductos">
                <i></i>
                <p class="div2_ul_li_p">Todos los productos</p>
              </button>
            </li>
            <li class="div2_ul_li" id="abrigos">
              <button id="btnAbrigos">
                <i ></i>
                <p class="div2_ul_li_p">Abrigos</p>
              </button>
            </li>
            <li class="div2_ul_li" id="camisetas">
              <button id="btnCamisetas">
                <i ></i>
                <p class="div2_ul_li_p">Camisetas</p>
              </button>
            </li>
            <li class="div2_ul_li" id="pantalones">
              <button id="btnPantalones">
                <i ></i>
                <p class="div2_ul_li_p">Pantalones</p>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="div3">
        <li class="div2_ul_li" id="carrito">
          <button id="btnCarrito">
            <i class="bx bxs-cart"></i>
            <p class="div2_ul_li_p">Carrito</p>
            <div class="div3_1_3">${this.numProductosEnCarrito}</div>
          </button>
        </li>
      </div>
      <div class="div4">
        <p class="div4_p">© 2024 CampusLand</p>
      </div>
      <div class="div5">
        <p class="div5_p"></p>
        <my-component id="miComponente"></my-component>
      </div>
    `;
  }

  static get properties() {
    return {
      numProductosEnCarrito: { type: Number }
    };
  }

  async actualizarCantidadProductosEnCarrito() {
    try {
      const response = await fetch('http://localhost:5501/carrito');
      const carrito = await response.json();
      this.numProductosEnCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);
      this.requestUpdate();
    } catch (error) {
      console.error('Error al obtener el carrito:', error);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.actualizarCantidadProductosEnCarrito();
  
    this.addEventListener('carrito-actualizado', () => {
      this.actualizarCantidadProductosEnCarrito();
    });
  
    this.updateComplete.then(() => {
      const botonesDiv2 = this.shadowRoot.querySelectorAll('.div2_ul_li button');
      const miComponente = this.shadowRoot.querySelector('#miComponente');
      const menuDiv2 = this.shadowRoot.querySelector('.div2 nav');
      const toggleMenuButton = this.shadowRoot.querySelector('#toggleMenu');
  
      const updateSelectedOption = (opcion) => {
        botonesDiv2.forEach(btn => btn.classList.remove('opcion-seleccionada'));
        opcion.classList.add('opcion-seleccionada');
        miComponente.opcionNav = opcion.querySelector('p').textContent.toLowerCase();
  
        const textoOpcion = opcion.querySelector('p').textContent;
        const textoFormateado = textoOpcion.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  
        const div5_p = this.shadowRoot.querySelector('.div5_p');
        div5_p.textContent = textoFormateado;
      };
  
      const closeMenu = () => {
        menuDiv2.style.display = 'none';
        document.removeEventListener('click', closeMenu);
      };
  
      const toggleMenu = (event) => {
        event.stopPropagation();
        const isMenuVisible = menuDiv2.style.display === 'block';
        menuDiv2.style.display = isMenuVisible ? 'none' : 'block';
        if (!isMenuVisible) {
          document.addEventListener('click', closeMenu);
        }
      };
  
      const btnTodosProductos = this.shadowRoot.querySelector('#btnCarrito');
      updateSelectedOption(btnTodosProductos);
  
      botonesDiv2.forEach(boton => {
        boton.addEventListener('click', () => {
          updateSelectedOption(boton);
        });
      });

      toggleMenuButton.addEventListener('click', toggleMenu);
    });
  }
}

customElements.define("my-main", MyBodyComponent);