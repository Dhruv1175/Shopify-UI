import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartActions';

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    alert("Product Added To Cart")
  };

  return (
    <button 
      onClick={handleAddToCart}
      style={{
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
