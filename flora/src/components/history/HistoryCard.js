import React from 'react';
import './HistoryCard.css';

const HistoryCard = ({ purchases }) => {
    return (
        <div className="history-container">
          {purchases.map((purchase, index) => (
            <div key={index} className="purchase-group">
            <div className='borda'>
              <h3 className='title-history'>
                {purchase.items.length > 1 ? 'Produtos comprados' : 'Produto comprado'}
              </h3>
              <h3 className='title-history'> Preço total: R${purchase.price_total.toFixed(2)}</h3>
            </div>
            <div className='products-container'>
              <div className='text-products'>
                <h4 className='text'><span className='bold'>Data da compra: </span> {purchase.date}</h4>
              </div>

              <div className="products">
                {purchase.items.map((item, i) => (
                  <div key={i} className="product-card-history">
                    <div className='infos-products-history'>
                      <img
                      className="photo-product-history"
                      src={item.image}
                      alt="Foto do produto"
                      />
                      <div className='text-info-products'>
                        <p className='text'><span className='bold'>Nome: </span>{item.name}</p>
                        <p className='text'><span className='bold'>Marca: </span>{item.brand}</p>
                        <p className='text'><span className='bold'>Quantidade: </span>{item.qnt}</p>
                      </div>
                    </div>
                    <div>
                      <p className='text'><span className='bold'>Preço do produto: </span>R${item.price.toFixed(2)}</p>
                      <button className='button-card'>Ver produto</button>
                    </div>
                    
                  </div>
                ))}

              </div>
                    
            </div>
            </div>
          ))}
        </div>
      );
};

export default HistoryCard;