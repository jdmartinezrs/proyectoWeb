import { LitElement, html, css } from "lit";
import { getAbrigoInfo, getCamisetaInfo, getPantalonInfo } from "./consultas";

export class AllProducts extends LitElement {
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
            const abrigoProducts = await getAbrigoInfo();
            const camisetaProducts = await getCamisetaInfo();
            const pantalonProducts = await getPantalonInfo();

            this.products = [...abrigoProducts, ...camisetaProducts, ...pantalonProducts];
           

            // Asegúrate de que la propiedad se actualice después de cargar los productos
            this.requestUpdate();
        } catch (error) {
            console.error('Error loading products:', error);
        }
    }

    static styles = css `
        :host {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
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
            font-size: 18px;
            margin-top: 10px;
        }

        .product-price {
            color: var(--clr-white);
            font-size: 16px;
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
    `;

    render() {
        return html`
            ${this.products.map(product => html`
                <div class="card">
                    <div class="product-image">
                        <img src="${product.image}">
                    </div>
                    <p class="product-name"><small>${product.name}</small></p>
                    <p class="product-price">$${product.price}</p>
                    <p class="product-price">Id: ${product.id}</p>
                    <button class="add-button">Agregar</button>
                </div>
            `)}
        `;
    }
}

customElements.define("all-products", AllProducts);

