import { getAllAbrigoInformation } from "./consultas";

import { LitElement,html,css } from "lit";
export class AllProducts extends LitElement{
    constructor(){
        super();
    }
static styles = css `



.containerProductos{

    display:flex;
    height:300px;
    width: 250px;
    background: pink;
    border-box: 10%;
    border-radius:10px;
    align-items: flex-end;
    flex-direction: row;
}

.containerProductos__names{

    
    height:70px;
    width: 250px;
    background: var(--clr-main-light);
    border-radius:10px;
    display:flex;
    flex-direction: row;
}

.containerProductos__button{

    appearance: none;
    height:70px;
    width: 500px;
    border-radius:10px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    // background:blue;
    margin-left:70%;
    margin-button:5px
}

button{
    background: withe;
    border-radius:none;
}








`
render(){
    return html`
    
    
<div class="containerProductos">
<div class="containerProductos__names">
<div class="containerProductos__button"><button>Agregar</button></div>
</div>
</div>
    
    
    
    
    
    
    
    
    `


}
}

customElements.define("all-products", AllProducts)