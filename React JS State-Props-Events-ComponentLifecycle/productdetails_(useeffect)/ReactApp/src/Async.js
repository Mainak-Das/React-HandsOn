
import './style.css';
import productsData from './products.json';
import React, { useState, useEffect } from 'react';

function Async() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData); // Loading JSON data into state
  }, []);

  return (
    <div>
      <h1 style={{ color: 'red' }}>Products</h1> {/* Matches screenshot heading color */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Async;


	
    


