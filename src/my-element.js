
import "./my-pages.js"
import { LitElement, html, css } from "lit";



class MyElement extends LitElement{
    constructor(){
        super();
  }
static styles = css`
:host {
  width: 100%;
  height: 100vh;
  background:  var(--clr-main);
  color: var(--clr-white);
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
  /*background: var(--color-primario;*/
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
  /*background: var(--color-primario;*/
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
  width: 100%;
  height: 95%;
  grid-area: img;
  background: var(--clr-white);
  border-radius: 3em;
  margin-top: 1em;
  margin-left: -1em;
  overflow-y: scroll;
 
}
.div5_p {
  width: 100%;
  height: 10vh;
  font-size: 35px;
  padding: 0.5em 0 0em 0.5em;
  display: flex;
  margin-block-start: 0em;
  margin-block-end: 0em;
 color: var(--clr-main );
}
.div5_contenedor {
  width: 100%;
  height: 95%;
  padding: 0 0 0 1.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.8em;
  max-height: 80vh;
  overflow-y: scroll;
}

@media only screen and (max-width: 800px) {
  body {
    padding: 0.5em;
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "menus"
      "carrito"
      "img"
      "derechos";
  }
  .div2 nav {
    display: none;
    border: 1px solid var(--color-terciario);
  }
  #toggleMenu {
    display: block;
    font-size: 1.5em;
    width: 3em;
  }
  .div2_ul {
    padding-top: 1em;
    gap: 0em;
    margin-top: -1em;
  }
  .div2_ul_li_eleccion,
  .div2_ul_li {
  }
  .div2_ul_li_eleccion {
    background: none;
  }
  .div3_1 {
    background: none;
    padding-top: 2em;
  }
  .div4_p {
    padding-top: 2em;
  }
  .div5 {
    width: 95vw;
    height: 100vh;
    margin-top: 0.5em;
    padding: 0;
  }
  .div5_p {
    font-size: 32px;
    padding: 1em 0 1.5em 1em;
    display: flex;
   
  }
  .div5_contenedor {
    height: 100%;
    padding: 0 0 0 1em;
    gap: 1em;
    max-height: 75vh;
    overflow: scroll;
  }
  .div5_1 {
    width: 45%;
    height: 35vh;
    gap: 0.2em;
  }
  .div5_1 img {
    width: 50%;
    height: 30vh;
  }
  .div5_1_1 {
    width: 100%;
    font-size: 0.5em;
    display: flex;
    align-items: center;
    line-height: 1.5em;
  }
  .div5_1_1_p {
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1em;
    margin-left: 1em;
    line-height: 2em;
  }
  .button {
    --width: 80px;
    --height: 20px;
  }
  .icon svg {
    width: 14px;
    height: 14px;
  }
}
`;


render(){
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
                <i
                  class='bx bx-closet'>
                </i>
                  <p class="div2_ul_li_p">Todos los productos</p>
              </button>
            </li>
            <li class="div2_ul_li" id="abrigos">
              <button id="btnAbrigos">
                <i 
                  class='bx bxs-thermometer'>
                </i>
                <p class="div2_ul_li_p">Abrigos</p>
              </button>
            </li>
            <li class="div2_ul_li" id="camisetas">
              <button id="btnCamisetas">
                <i 
                class='bx bxs-t-shirt'>
                </i>
                  <p class="div2_ul_li_p">Camisetas</p>
                </button>
            </li>
            <li class="div2_ul_li" id="pantalones">
              <button id="btnPantalones">
                <i 
                  class='bx bxs-arch'>
                  </i>
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
        <p class="div4_p">© 2024</p>
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
  connectedCallback() {
    super.connectedCallback();
    
    this.updateComplete.then(() => {
      
      const botonesDiv2 = this.shadowRoot.querySelectorAll('.div2_ul_li button');
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

customElements.define("my-element", MyElement);

export async function actualizarCantidadProductosEnCarrito() {
  try {
    const response = await fetch('http://localhost:5501/carrito');
    const carrito = await response.json();
    this.numProductosEnCarrito=carrito.id.length
    return this.numProductosEnCarrito;
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
  }
}