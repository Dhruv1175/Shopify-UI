import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartActions'; 
import './ProductDetail.css'

const ProductDetail = ({ product, onClose }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product Added To Cart")
    onClose(); // Optionally close modal after adding to cart
  };

  return (
    <Modal show={true} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            {/* Product Images Carousel */}
            <div className="col-md-6">
              <Carousel>
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img src={image} alt={`Slide ${index}`} className="d-block w-100" />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            {/* Product Details */}
            <div className="col-md-6">
              <h3>{product.title}</h3>
              <p className="text-muted">Category: {product.category}</p>
              <h4 className="text-danger">₹{product.price}</h4>
              <p><strong>Description:</strong></p>
              <ul>
                {product.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <button className="btn btn-warning btn-lg mt-3" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDetail;
