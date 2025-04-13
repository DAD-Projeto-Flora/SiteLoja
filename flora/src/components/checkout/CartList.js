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
                  <img
                    src={product.urlImagem?.startsWith("http") ? product.urlImagem : `https:${product.urlImagem}`}
                    alt={product.nome}
                  />
                  <span>{product.nome}</span>
                </div>
              </td>
              <td>{product.deliveryPrice ? `R$ ${parseFloat(product.deliveryPrice).toFixed(2)}` : '—'}</td>
              <td>R$ {parseFloat(product.precoUnid).toFixed(2)}</td>
              <td>{product.quantity || 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CartList;
