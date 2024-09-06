import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Mymap() {

    const data=[
        {
            name:"TSS Original : Race Red",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709979395_7358361.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709979395_9240211.jpg?format=webp&w=480&dpr=1.0",
            sub:"Oversized Full Sleeve T-Shirt",
            price:999
        },
        {
            name:"Supima : Jade Green",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693468517_3422010.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693468517_1901890.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supina T-Shirts",
            price:949
        },
        {
            name:"Supima : Navy Blue",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1686829556_7619774.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1689443883_8766973.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supima T-Shirt",
            price:699,
            oprice:"₹999",
            dis:"300 OFF"
        },
        {
            name:"Supima : Teal",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1682421910_3158420.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1682421910_4642471.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supima T-Shirts",
            price:699,
            oprice:"₹899",
            dis:"300 OFF"
        },
        {
            name:"Supima : Airy Blue",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1685692006_3378072.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1689442650_2282832.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supima T-Shirts",
            price:999
        },
        {
            name:"Supima : Mineral Red",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693908018_7996872.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693908018_3332603.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supima T-Shirts",
            price:899
        },
        {
            name:"Supima : Watermelon",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1684566295_4407896.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1689443675_9660595.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supima T-Shirts",
            price:999
        },
        {
            name:"Supima : Orchid",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693468225_8080863.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693468225_3827684.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supima T-Shirts",
            price:899
        },
        {
            name:"Supima : Dusty Rose",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693474961_9240809.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693474961_7292619.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supima T-Shirts",
            price:899
        },
        {
            name:"Supima : Brick Red",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693564423_8705251.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693564423_2859526.jpg?format=webp&w=480&dpr=1.0",
            sub:"Supima T-Shirts",
            price:999
        },
        {
            name:"Ed Sheeran : Mathematics Tour",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709963089_6937304.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710140507_7933122.jpg?format=webp&w=480&dpr=1.0",
            sub:"T-Shirts",
            price:699
        },
        {
            name:"Men Mystery T-Shirt",
            himg:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709202333_5375663.jpg?format=webp&w=480&dpr=1.0",
            img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709202333_9192717.jpg?format=webp&w=480&dpr=1.0",
            sub:"Mystery T-Shirts",
            price:399
        },

        
    ]

  return (
    <div className='d-flex flex-wrap'>
        {
            data.map((value,index)=>{
                
               return(
                
                <div className='card'  style={{width:280 ,height:470,marginLeft:50,marginTop:80  }}>
                    <FavoriteBorderIcon style={{position:'absolute',marginLeft:250,color:'red'}}></FavoriteBorderIcon>
                    <img src={value.img} className='card-img '  id='i1' /> 
                    <h6 style={{color:"rgb(88, 92, 112)",fontFamily:"roboto",marginLeft:5}} className='card-title'>{value.name}</h6>
                    <hr style={{marginTop:0}}></hr>
                    <p className='card-text' style={{color:"#737577",fontSize:14,marginTop:-12,marginLeft:5}}>{value.sub}</p>
                    <p className='card-text' style={{marginLeft:10 ,fontWeight:"bold"}}>₹{value.price} <strike style={{color:'grey'}}>{value.oprice}</strike> <i style={{color:'red'}}> {value.dis} </i> </p>
                    
                </div>
                
               )
            })
        }
    </div>
  )
}
