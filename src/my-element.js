import { AllProducts } from "./allProducts";
import "./my-pages.js"
import { LitElement, html, css } from "lit";



class MyElement extends LitElement{
    constructor(){
        super();
  }
static styles = css`
h1, h2, h3, h4, h5, h6, p, a, input, textarea, ul {
    margin: 0;
    padding: 0;
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
.wrapper {
    display: grid;
    grid-template-columns: 1fr 4fr;
    background-color: var(--clr-main);
}
aside {
    padding: 2rem;
    padding-right: 0;
    color: var(--clr-white);
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.logo {
    font-weight: 400;
    font-size: 1.3rem;
}
.menu {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.boton-menu {
    background-color: transparent;
    border: 0;
    color: var(--clr-white);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
    padding: 1rem;
    font-size: .85rem;
    width: 100%;
}
.boton-menu.active {
    background-color: var(--clr-white);
    color: var(--clr-main);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
}
.boton-menu.active::before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 2rem;
    bottom: 100%;
    right: 0;
    background-color: transparent;
    border-bottom-right-radius: .5rem;
    box-shadow: 0 1rem 0 var(--clr-white);
}
.boton-menu.active::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 2rem;
    top: 100%;
    right: 0;
    background-color: transparent;
    border-top-right-radius: .5rem;
    box-shadow: 0 -1rem 0 var(--clr-white);
}
.boton-menu > i.bi-hand-index-thumb-fill,
.boton-menu > i.bi-hand-index-thumb {
    transform: rotateZ(90deg);
}
.boton-carrito {
    margin-top: 2rem;
}
.numerito {
    background-color: var(--clr-white);
    color: var(--clr-main);
    padding: .15rem .25rem;
    border-radius: .25rem;
}
.boton-carrito.active .numerito {
    background-color: var(--clr-main);
    color: var(--clr-white);
}
.texto-footer {
    color: var(--clr-main-light);
    font-size: .85rem;
}
main {
    background-color: var(--clr-white);
    margin: 1rem;
    margin-left: 0;
    border-radius: 2rem;
    padding: 3rem;
}
.titulo-principal {
    color: var(--clr-main);
    margin-bottom: 2rem;
}
.contenedor-productos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
.producto-imagen {
    max-width: 100%;
    border-radius: 1rem;
}
.producto-detalles {
    background-color: var(--clr-main);
    color: var(--clr-white);
    padding: .5rem;
    border-radius: 1rem;
    margin-top: -2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .25rem;
}
.producto-titulo {
    font-size: 1rem;
}
.producto-agregar {
    border: 0;
    background-color: var(--clr-white);
    color: var(--clr-main);
    padding: .4rem;
    text-transform: uppercase;
    border-radius: 2rem;
    cursor: pointer;
    border: 2px solid var(--clr-white);
    transition: background-color .2s, color .2s;
}
.producto-agregar:hover {
    background-color: var(--clr-main);
    color: var(--clr-white);
}
/** CARRITO **/
.contenedor-carrito {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.carrito-vacio,
.carrito-comprado {
    color: var(--clr-main);
}
.carrito-productos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.carrito-producto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--clr-gray);
    color: var(--clr-main);
    padding: .5rem;
    padding-right: 1.5rem;
    border-radius: 1rem;
}
.carrito-producto-imagen {
    width: 4rem;
    border-radius: 1rem;
}
.carrito-producto small {
    font-size: .75rem;
}
.carrito-producto-eliminar {
    border: 0;
    background-color: transparent;
    color: var(--clr-red);
    cursor: pointer;
}
.carrito-acciones {
    display: flex;
    justify-content: space-between;
}
.carrito-acciones-vaciar {
    border: 0;
    background-color: var(--clr-gray);
    padding: 1rem;
    border-radius: 1rem;
    color: var(--clr-main);
    text-transform: uppercase;
    cursor: pointer;
}
.carrito-acciones-derecha {
    display: flex;
}
.carrito-acciones-total {
    display: flex;
    background-color: var(--clr-gray);
    padding: 1rem;
    color: var(--clr-main);
    text-transform: uppercase;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    gap: 1rem;
}
.carrito-acciones-comprar {
    border: 0;
    background-color: var(--clr-main);
    padding: 1rem;
    color: var(--clr-white);
    text-transform: uppercase;
    cursor: pointer;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
.header-mobile {
    display: none;
}
.close-menu {
    display: none;
}
.disabled {
    display: none;
}
/*** MEDIA QUERIES ***/
@media screen and (max-width: 850px) {
    .contenedor-productos {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (max-width: 675px) {
    .contenedor-productos {
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 600px) {
    .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    aside {
        position: fixed;
        z-index: 9;
        background-color: var(--clr-main);
        left: 0;
        box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .75);
        transform: translateX(-100%);
        opacity: 0;
        visibility: hidden;
        transition: .2s;
    }
    .aside-visible {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    }
    .boton-menu.active::before,
    .boton-menu.active::after {
        display: none;
    }
    main {
        margin: 1rem;
        margin-top: 0;
        padding: 2rem;
    }
    .contenedor-productos {
        grid-template-columns: 1fr 1fr;
        
    }
    .header-mobile {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header-mobile .logo {
        color: var(--clr-gray);
    }
    .open-menu, .close-menu {
        background-color: transparent;
        color: var(--clr-gray);
        border: 0;
        font-size: 2rem;
        cursor: pointer;
    }
    .close-menu {
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
    .carrito-producto {
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: .5rem;
    }
    .carrito-producto-subtotal {
        display: none;
    }
    .carrito-acciones {
        flex-wrap: wrap;
        row-gap: 1rem;
    }
    
}
@media screen and (max-width: 400px) {
    .contenedor-productos {
        grid-template-columns: 1fr;
    }
}
`;

render(){
    return html`
    <div class="wrapper">
    <header class="header-mobile">
        <h1 class="logo">CampusShop</h1>
        <button class="open-menu" id="open-menu">
            <i class="bi bi-list"></i>
        </button>
    </header>
    <aside>
    <button class="close-menu" id="close-menu">
        <i class="bi bi-x"></i>
    </button>
    <header>
        <h1 class="logo">CampusShop</h1>
    </header>
    <nav>
    <ul class="menu">
    <li id="">
        <button id="todos" class="boton-menu boton-categoria active"><i class="bi bi-hand-index-thumb-fill"></i> todos los productos</button>
    </li>
    <li>
        <button id="abrigos" class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> abrigos</button>
    </li>
    <li>
        <button id="camisetas" class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> camisetas</button>
    </li>
    <li>
        <button id="pantalones" class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> pantalones</button>
    </li>
    <li>
        <a class="boton-menu boton-carrito" href="./views/carrito.html">
           
            <i class="bi bi-cart-fill"></i> Carrito <span id="numerito" class="numerito">10</span>
        </a>
    </li>
</ul>
</nav>
<footer>
<p class="texto-footer">© 2024 CampusLands</p>
</footer>
</aside>
<main>
<h3 class="titulo-principal" id="titulo-principal">Todos los productos</h3>
<div id="contenedor-productos" class="contenedor-productos">
<my-component id="miComponente"></my-component>
</div>
</main>
</div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
 `;
}

static get properties() {
    return {
      numProductosEnCarrito: { type: Number }
    };
  }
  connectedCallback() {
    super.connectedCallback();

    this.updateComplete.then(() => {

      const botonesDiv2 = this.shadowRoot.querySelectorAll('.boton-menu boton-categoria');
      const miComponente = this.shadowRoot.querySelector('#miComponente');

      const updateSelectedOption = (opcion) => {
        botonesDiv2.forEach(btn => btn.classList.remove('opcion-seleccionada'));
        opcion.classList.add('opcion-seleccionada');
        miComponente.opcionSeleccionada = opcion.querySelector('p').textContent.toLowerCase();

        const textoOpcion = opcion.querySelector('p').textContent;
        const textoFormateado = textoOpcion.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

        const div5_p = this.shadowRoot.querySelector('.div5_p');
        div5_p.textContent = textoFormateado;
      };

      const btnTodosProductos = this.shadowRoot.querySelector('#btnCarrito');
      updateSelectedOption(btnTodosProductos);

      botonesDiv2.forEach(boton => {
        boton.addEventListener('click', () => {
          updateSelectedOption(boton);
        });
      });
    });
  }


}





customElements.define("my-element", MyElement)
