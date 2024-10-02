import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nav() {
  const cart = useSelector(state => state.cart);
  const cartItemCount = cart.length;
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/home" style={{ color: "black" }}>Shopify</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <form className="d-flex" role="search" style={{ maxWidth: "100%", width: "600px" }}>
                  <input className="form-control border-info me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-info text-light" type="submit">
                    <SearchIcon />
                  </button>
                </form>
              </li>
              <li className="nav-item ms-lg-4">
                <Link className="nav-link fw-bold" to="/products" style={{ color: "black" }}>Products</Link>
              </li>
              <li className="nav-item ms-lg-4">
                <Link className="nav-link fw-bold" to="/help" style={{ color: "black" }}>Help</Link>
              </li>
              <li className="nav-item ms-lg-4">
                <Link className="nav-link fw-bold" to="/login" style={{ color: "black" }}>Login</Link>
              </li>
              <li className="nav-item ms-lg-4" style={{ position: 'relative' }}>
                <Link className="nav-link" to="/cart" style={{ color: "black", display: 'inline-flex', alignItems: 'center' }}>
                  <ShoppingCartIcon style={{ fontSize: 24 }} />
                  {cartItemCount > 0 && (
                    <Badge 
                      pill 
                      bg="danger" 
                      style={{ 
                        position: 'absolute', 
                        top: '-10px', 
                        right: '-10px', 
                        fontSize: '0.75rem', 
                        padding: '0.25em 0.4em'
                      }}>
                      {cartItemCount}
                    </Badge>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
