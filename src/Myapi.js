import React, { useEffect, useState } from 'react'

export default function Myapi() {

const[data,setdata]=useState([])

const fun=async()=>{

    const response= await fetch("https://dummyjson.com/products")
    const result= await response.json()
    setdata(result.products)
}


useEffect(()=>{

    fun()

})

  return (
    <div className='d-flex flex-wrap bg-light'>
        {
        data.map((value,index)=>{

            return(

                <div className='card m-2'  style={{width:280 ,height:470,marginLeft:50,marginTop:80  }}>
                    
                    <img src={value.images[0]} className='card-img '  id='i1' /> 
                    <h6 style={{color:"rgb(88, 92, 112)",fontFamily:"roboto",marginLeft:5}} className='card-title'>{value.title}</h6>
                    <hr style={{marginTop:0}}></hr>
                    <p className='card-text' style={{color:"#737577",fontSize:14,marginTop:-12,marginLeft:5}}>{value.description}</p>
                    <p className='card-text' style={{marginLeft:10 ,fontWeight:"bold"}}>${value.price} <strike style={{color:'grey'}}>{value.oprice}</strike> <i style={{color:'red'}}> {value.discountPercentage} </i> </p>
                    
                </div>
                
            )
        })
    }
    </div>
  )
}
