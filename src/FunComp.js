import React from 'react'
import './Mycss.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function FunComp(props) {
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <p>{props.children}</p>
      <a style={{marginLeft:"16px",textDecoration:"none",color:"#149ECA"}} href="#">Read More</a><ArrowDropDownIcon style={{fontSize:"30px"}}/>
    </div>
  )
}
