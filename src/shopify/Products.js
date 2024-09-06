import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail'; // Create this component


export default function Products() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const [showDetail, setShowDetail] = useState(false); // State to control detail view

  const fetchData = async () => {
    const response = await fetch("https://shivraj-chavan.github.io/api/electronics.json");
    const result = await response.json();
    setData(result);
    setChange(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setChange(data);
    } else {
      const filteredData = data.filter(value => value.category === category);
      setChange(filteredData);
    }
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowDetail(true);
  };

  return (
    <>
      <div style={{marginTop:50}} className="d-flex flex-wrap">
        <div className="container-fixed" style={{ width: 300, backgroundColor: "#e3edf6" }}>
          <h5 style={{ fontWeight: "bolder", marginTop: 50, marginLeft: 70 }}>Categories</h5>
          <div style={{ marginLeft: 70 }}>
            <li style={{ listStyle: "none", margin: 10 }}><button className="btn" onClick={() => handleCategoryChange("all")}>All</button></li>
            <li style={{ listStyle: "none", margin: 10 }}><button className="btn" onClick={() => handleCategoryChange("mobile")}>Mobile</button></li>
            <li style={{ listStyle: "none", margin: 10 }}><button className="btn" onClick={() => handleCategoryChange("laptop")}>Laptop</button></li>
            <li style={{ listStyle: "none", margin: 10 }}><button className="btn" onClick={() => handleCategoryChange("watch")}>Watch</button></li>
            <li style={{ listStyle: "none", margin: 10 }}><button className="btn" onClick={() => handleCategoryChange("airdopes")}>AirPods</button></li>
            <li style={{ listStyle: "none", margin: 10 }}><button className="btn" onClick={() => handleCategoryChange("tv")}>TV</button></li>
          </div>
        </div>

        <div className="d-flex flex-wrap" style={{ width: 1040 }}>
          {change.map((value, index) => (
            <div
              key={index}
              className="card"
              style={{ width: '20rem', marginLeft: 20, marginTop: 30, cursor: 'pointer' }}
              onClick={() => handleCardClick(value)}
            >
              <img src={value.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <p style={{ color: "rgb(107 114 128)" }}> {value.category}</p>
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.heading}</p><br />
                <p className='card-text text-primary'><em>₹{value.price}</em></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDetail && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setShowDetail(false)}
        />
      )}

      <br /><br />
      <footer style={{ width: "90%", marginLeft: "5%", textAlign: "center" }} className="bg-primary text-light">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h5>© Copyright | All Rights Reserved<br /> M A Alim</h5>
          </div>
        </div>
      </footer>
    </>
  );
}
