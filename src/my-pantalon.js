import { getPantalonInfo } from "./consultas";

import { LitElement,html,css } from "lit";
export class AllPantalonGotten  extends LitElement{
    static properties = {
        products: {type: Array}

    };
  
    
static styles = css `

:host {
  padding-left: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}

.card {
  border-radius: 20px;
  width: 250px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--clr-main-light);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
}

.product-name {
  color: #333;
  font-size: 13px;
  margin-top: 10px;
}

.product-price {
  color: var(--clr-white);
  font-size: 21px;
}

.add-button {
  background-color: var(--clr-main);
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
}

@media (max-width: 768px) {
  :host {
    grid-template-columns: 1fr; /* Mostrar un solo producto por fila en dispositivos móviles */
    padding-left: 0; /* Eliminar el relleno a la izquierda en dispositivos móviles */
  }

  .card {
    width: calc(45% - 40px); /* Utilizar todo el ancho menos el relleno */
    margin-right: auto;
    margin-left: auto;
  }
}


`;
constructor() {
    super();
    this.products= [];
}
async connectedCallback(){
    super.connectedCallback();
    this.products = await getPantalonInfo();
}

render(){
    return html`
    
    
    
    ${this.products.map(product=> html`
    <div class="card">
      <div class="product-image">
        <!-- Aquí debes colocar la imagen del producto -->
        <img src="${product.image}">
      </div>
      <p class="product-name"><small>${product.name}</small></p>
      
      <p class="product-price">$${product.price}</p>
      
      <p class="product-price">Id:${product.id}</p>
      <button class="add-button">Agregar</button>
    </div>
 
     `)}


     

    `
    ;

}
}


customElements.define("all-pantalongotten", AllPantalonGotten )
