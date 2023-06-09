import React, { useState } from 'react'
//import { useState } from 'react'
//import Cart from './Cart'
//import {useDispatchCart, useCart} from'./ContextReducer';

function BuyCard(props) {
  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body align-text-center">
        <h5 className="card-title" style={{textAlign: 'center'}}>{props.buyProperties.type}<span>, {props.buyProperties.name}</span></h5>
            <img src={props.buyProperties.image} width="280px" height="200px" />
            <h5 className="card-title">Rs. {props.buyProperties.price}</h5>
            <h5 className="card-title">{props.buyProperties.city}</h5>
            <h6 className="card-title">{props.buyProperties.street}<span>, {props.buyProperties.locality}</span></h6>
            <h6 className="card-title">{props.buyProperties.ownerName}<span>, {props.buyProperties.ownerContact}</span></h6>
            <button style={{ fontSize:"1rem"}}>View More..</button>
            {/*<img src={props.buyProperties.image} />*/}
        </div>
    </div>
  )
}

export default BuyCard;