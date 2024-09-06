import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for v6
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Hook to handle navigation

  const handleRegister = () => {
    if (password === confirmPassword) {
      // Save user info to localStorage
      localStorage.setItem('user', JSON.stringify({ username, email, password }));
      alert("Registration SuccessFul")
      navigate('/login'); // Redirect to login page or wherever needed
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <Container fluid className="p-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <div className="register-box p-4 border rounded">
            <h2 className="text-center mb-4">Register</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" className="w-100 mt-3" onClick={handleRegister}>
                Register
              </Button>
            </Form>
            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
