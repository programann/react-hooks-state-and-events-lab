import React, { useState } from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(prev => !prev);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name} - {category} 
      <button onClick={toggleCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
