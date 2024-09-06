import React, { useState } from 'react'

export default function Hooks() {

    const [current,updated] = useState(0);

    const like1=()=>{
        if(current<0){
            updated(0)
        }
        else if(current>=10){
            updated(10)
        }
        else{
            updated(current+1)
        }
    }

    const dislike1=()=>{
        if(current<=0){
            updated(0)
        }
        else if(current>10){
            updated(10)
        }
        else{
            updated(current-1)
        }
    }
    
  return (

    

    <div>
        <h2>This is the number of likes {current}</h2>
        <button type='button'  style={{width:"50px"}} onClick={like1} >LIKE</button>
        <button type='button' style={{width:"90px",marginLeft:"25px"}} onClick={dislike1} >DISLIKE</button>
    </div>
  )
}
