// src/pages/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartActions';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={8} className="mx-auto mt-4">
          <h1 className="text-center mb-4">Your Cart</h1>
          {cart.length === 0 ? (
            <div className="text-center">
              <h4>Your cart is empty</h4>
            </div>
          ) : (
            <>
              <Row>
                {cart.map(item => (
                  <Col md={4} key={item.id} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src={item.thumbnail} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          <strong>Price:</strong> ${item.price}
                        </Card.Text>
                        <Button 
                          variant="danger" 
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col md={12} className="text-center mt-4">
                  <h4>Total Price: ${getTotalPrice()}</h4>
                  <Button variant="success">Proceed to Checkout</Button>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
