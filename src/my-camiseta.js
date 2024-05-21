import { getCamisetaInfo } from "./consultas";

import { LitElement,html,css } from "lit";
export class AllCamisetaGotten  extends LitElement{
    static properties = {
        products: {type: Array}

    };
  
    
static styles = css `

:host{
  padding-left:40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}
.card {
    border-radius: 20px;
    width: 250px;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color:  var(--clr-main-light);
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
    font-size: 18px;
    margin-top: 10px;
  }

  .product-price {
    color: var(--clr-white);
    font-size: 16px;
  }

  .add-button {
    background-color:  var(--clr-main);   
    color: white;
    border: none;
    padding: 10px;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
  }

`;
constructor() {
    super();
    this.products= [];
}
async connectedCallback(){
    super.connectedCallback();
    this.products = await getCamisetaInfo();
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


customElements.define("all-camisetagotten", AllCamisetaGotten)