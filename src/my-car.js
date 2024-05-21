import { LitElement, html, css } from 'lit';

class ShoppingCartItem extends LitElement {

  static styles = css`
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      
    }
    
    .card img {
      width: 50px;
      height: auto;
    }
    
    .card-details {
      display: flex;
      
    }
    
    .detail {
      margin-right: 20px;
    }
    
    .detail-title {
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }
    
    .delete-icon {
      cursor: pointer;
      color: red;
    }
  `;

  render() {
    return html`
      <div class="card">
        <img src="./jack.webp" alt="Abrigo 01">
        <div class="card-details">
          <div class="detail">
            <div class="detail-title">Título</div>
            Abrigo 01
          </div>
          <div class="detail">
            <div class="detail-title">Cantidad</div>
            2
          </div>
          <div class="detail">
            <div class="detail-title">Precio</div>
            $1000
          </div>
          <div class="detail">
            <div class="detail-title">Subtotal</div>
            $2000
          </div>
        </div>
        <div class="delete-icon">🗑️</div>
      </div>

    `;
  }
}

customElements.define('my-car', ShoppingCartItem);

