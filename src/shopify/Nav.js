import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nav() { 
  const cart = useSelector(state => state.cart);
  const cartItemCount = cart.length; 
  return (
    <div><nav style={{position:"fixed",}} className="navbar sticky-top navbar-expand-lg bg-body-tertiary   ">
  <div className="container-fluid text-dark "  >
    <Link  style={{color:"black",fontWeight:"bolder",fontSize:30}} className="navbar-brand" to="/home">Shopify</Link>
    
    <div className="collapse navbar-collapse text-dark " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
    
      <li>
      <form style={{marginLeft:200}} className="d-flex" role="search">
        <input className="form-control border-info" style={{width:550}} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-info text-light" type="submit"><SearchIcon></SearchIcon></button>
      </form></li>
      <li style={{marginLeft:100}} className="nav-item">
          <Link style={{color:"black",fontWeight:"bolder"}}  className="nav-link" to="/products"><b>Products</b></Link>
        </li>
        <li style={{marginLeft:25,listStyle:"none",width:50}} >
        <Link style={{color:"black",fontWeight:"bolder"}} className="nav-link" to="/help">Help</Link>
        </li>
        <li style={{marginLeft:25,listStyle:"none",width:50}} >
        <Link style={{color:"black",fontWeight:"bolder"}} className="nav-link" to="/login">Login</Link>
        </li>
        <li style={{ marginLeft: 20, position: 'relative' }} className="nav-item">
      <Link style={{ color: "black", position: 'relative', display: 'inline-flex', alignItems: 'center' }} className="nav-link" to="/cart">
        <ShoppingCartIcon style={{ fontSize: 24 }} />
        {cartItemCount > 0 && (
          <Badge 
            pill 
            bg="danger" 
            style={{ 
              position: 'absolute', 
              top: -10, 
              right: -10, 
              fontSize: '0.75rem', 
              padding: '0.25em 0.4em'
            }}
          >
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
    
  )
}
