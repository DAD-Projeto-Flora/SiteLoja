import React from 'react';
import './CartList.css'; 



const CartList = ({ products }) => {
    return (
      <section className="cart">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Entrega</th>
              <th>Preço</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className="product">
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td>{product.deliveryPrice}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default CartList;
  