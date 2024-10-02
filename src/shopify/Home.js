import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {data,newdata} from './productData'
import AddToCartButton from './AddToCartButton';

export default function Home() {



  return (
    <>
    <div className="container-fixed d-flex flex-wrap" style={{marginTop:30,backgroundColor:"#e3edf6"}}>
      <div className="flex item-center " style={{width:450,height:300,marginLeft:180,margin:50}}>
        <p style={{paddingTop:50}}><b>Starting At $999</b></p>
        <h2 style={{fontWeight:"bolder",fontSize:35}}>The best notebook collection 2024</h2>
        <p style={{fontWeight:"bolder"}}>Exclusive offer <em className="text-danger">-10%</em>  off this week</p>
      </div>
      <div style={{height:300,width:400,marginLeft:"15%",margin:50}} >
        <img src="https://shopify-xrh7.onrender.com/hero.png" alt='Product' className='img-fluid' />
      </div>
    </div>
    <div className="container" style={{marginTop:20}}>
  <div className="row d-flex justify-content-center align-items-center">
    <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
      <div style={{ backgroundColor: "rgb(243 244 246)", padding: "20px", textAlign: "center", width: "100%", maxWidth: "300px", height: "100px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3><LocalShippingIcon /> Free Delivery</h3>
        <p style={{ color: "rgb(75 85 99)" }}>Orders from all items</p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
      <div style={{ backgroundColor: "rgb(243 244 246)", padding: "20px", textAlign: "center", width: "100%", maxWidth: "300px", height: "100px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3><CurrencyExchangeIcon /> Return & Refund</h3>
        <p style={{ color: "rgb(75 85 99)" }}>Money Back Guarantee</p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
      <div style={{ backgroundColor: "rgb(243 244 246)", padding: "20px", textAlign: "center", width: "100%", maxWidth: "320px", height: "100px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3><LocalOfferIcon /> Member Discount</h3>
        <p style={{ color: "rgb(75 85 99)" }}>On Orders Above $99</p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
      <div style={{ backgroundColor: "rgb(243 244 246)", padding: "20px", textAlign: "center", width: "100%", maxWidth: "300px", height: "100px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3><SupportAgentIcon /> Support 24/7</h3>
        <p style={{ color: "rgb(75 85 99)" }}>Contact Us 24 hours a day</p>
      </div>
    </div>
  </div>
</div>

    <h1 style={{marginLeft:20}}>Trending Products</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
  {data.map((value, index) => {
    return (
      <div key={index} className="card" style={{ width: '16rem', margin: '20px', flex: '1 1 auto' }}>
        <img 
          src={value.thumbnail} 
          className="card-img-top" 
          alt={value.title} 
          style={{ height: '200px', objectFit: 'cover' }}  // Ensures uniform image size
        />
        <div className="card-body">
          <p style={{ color: "rgb(107 114 128)" }}> {value.category}</p>
          <h5 className="card-title">{value.title}</h5>
          <p className='card-text text-primary'>
            <em>${value.price}</em><AddToCartButton item={value}/> 
          </p>
        </div>
      </div>
    )
  })}
</div>
<div className="container">
  <div className="row d-flex align-items-center justify-content-center" style={{ marginTop: 20, backgroundColor: "#e3edf6" }}>
    <div className="col-12 col-md-6 p-3 d-flex justify-content-center">
      <img alt="Product" className="img-fluid" style={{ maxHeight: "400px", width: "100%" }} src="https://shopify-xrh7.onrender.com/banner.jpg" />
    </div>
    <div className="col-12 col-md-6 p-3 text-center text-md-start">
      <h2 style={{ fontSize: "2rem", fontWeight: "bolder" }}>Don't Miss the Offer</h2>
      <h4 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>Grab it now</h4>
      <button className="btn mt-3" style={{ backgroundColor: "white", color: "black" }}>Shop Now</button>
    </div>
  </div>
</div>

    <h1 style={{marginLeft:20}}>New Arrivals</h1>
    <div className="d-flex flex-wrap justify-content-center">
  {newdata.map((value, index) => {
    return (
      <div key={index} className="card" style={{ width: '16rem', margin: '15px' }}>
        <img 
          src={value.thumbnail} 
          className="card-img-top" 
          alt={value.title} 
          style={{ height: '200px', objectFit: 'cover' }}  // Ensures uniform image size
        />
        <div className="card-body">
          <p style={{ color: "rgb(107 114 128)" }}> {value.category}</p>
          <h5 className="card-title">{value.title}</h5>
          <p className='card-text text-primary'>
            <em>${value.price}</em><AddToCartButton item={value}/> 
          </p>
        </div>
      </div>
    );
  })}
</div>

    <br/><br/>
    <footer style={{width:"90%",marginLeft:"5%",textAlign:"center"}} class="bg-primary text-light">
		<div class="row">
			<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<h5>© Copyright | All Rights Reserved<br></br>
M A Alim </h5>
			</div>
		</div>
	</footer>
    </>
  )
}
