import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for v6
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to handle navigation

  const handleLogin = () => {
    // Retrieve user info from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      
      if (storedUser.username === username && storedUser.password === password) {
        alert("Login Successful")
        navigate('/home');
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('No user found. Please register first.');
    }
  };

  return (
    <Container fluid className="p-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <div className="login-box p-4 border rounded">
            <h2 className="text-center mb-4">Login</h2>
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" className="w-100 mt-3" onClick={handleLogin}>
                Login
              </Button>
            </Form>
            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
