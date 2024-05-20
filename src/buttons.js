import {LitElement,html,css} from "lit";
import { AllAbrigoGotten } from "./my-abrigo";
import { AllCamisetaGotten } from "./my-camiseta";
import { AllPantalonGotten } from "./my-pantalon";
import { AllProducts } from "./allProducts";
import { changeToAbrigos } from "./consultas";

export class AllButtons extends LitElement{
    constructor(){
        super();
    }
    static styles = css`

      
    .aside {
        padding: 2rem;
        padding-top: 100px;
        padding-right: 0;
        color: var(--clr-white);
        position: fixed;
        top: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:flex-end;
    }
    

    .logo {
        padding-top:80px;
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
  



    `
    render(){
        return html` 
        <aside>
        <button class="close-menu" id="close-menu">
            <i class="bi bi-x"></i>
        </button>
        <header>
            <h1 class="logo">CampusShop</h1>
        </header>
        <nav>
    
        <ul class="menu">
        <li>
            <button id="todos" class="boton-menu boton-categoria active"><i class="bi bi-hand-index-thumb-fill"></i> Todos los productos</button>
        </li>
        <li>
       
        <button id="abrigos" class="boton-menu boton-categoria" @click=${changeToAbrigos}>
        <i class="bi bi-hand-index-thumb"></i> Abrigos
    </button>

   

        </li>
        <li>
            <button id="camisetas" class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> Camisetas</button>
        </li>
        <li>
            <button id="pantalones" class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> Pantalones</button>
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
     

    
        
        
        `
       
  
    }

}



customElements.define("my-buttons", AllButtons)


      


// botonTodos.addEventListener('click', () => mostrarComponente('all-products'));
// botonAbrigos.addEventListener('click', () => mostrarComponente('all-abrigogotten'));
// botonCamisetas.addEventListener('click', () => mostrarComponente('all-camisetagotten'));
// botonPantalones.addEventListener('click', () => mostrarComponente('all-pantalongotten'));

