import React from 'react'

import './Product.css';

const Product = () => {
      return (
            <div className = 'product'>
                  <div className = 'product__info'>
                        <p>The startup...</p>
                        <p className = 'product_price'>
                              <small>$</small>
                              <strong>29.99</strong>
                        </p>

                        <div className = 'product__rating'>
                              <p> ⭐</p>
                        </div>

                        <img src = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png' alt = "product-image"/>

                        <button>Add to Basket</button>
                  </div> 
            </div>
      )
}

export default Product
