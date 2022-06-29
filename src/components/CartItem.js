import React from 'react'
import styled from 'styled-components'
import {FaPlus, FaMinus} from 'react-icons/fa'

import { removeItem, increase, decrease } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'


const CartItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();
  return (
  
      <Container>
      <ItemWrap>
        <ItemImg>
        <img src={img} alt="" />
        </ItemImg>
        <ItemInfo>
          <h3>{title}</h3>
          <p>$ {price}</p>
          <button onClick={()=>{dispatch(removeItem(id))}}>remove</button>
        </ItemInfo>
        <ItemButton>
          <button classname ="decrease-btn" onClick={()=>{
            if (amount===1){
              dispatch(removeItem(id))
            }
            dispatch(decrease({id}))}}><FaMinus/></button>
          <span>{amount}</span>
          <button onClick={()=>{dispatch(increase({id}))}}><FaPlus/></button>
        </ItemButton>
      </ItemWrap>
      </Container>
  )
}

const Container = styled.div`
  width: 100%;
  box-shadow: 4px 11px 9px -3px rgba(0,0,0,0.05);
-webkit-box-shadow: 4px 11px 9px -3px rgba(0,0,0,0.05);
-moz-box-shadow: 4px 11px 9px -3px rgba(0,0,0,0.05);
margin:10px 0;
`

const ItemWrap = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-around;
`

const ItemImg= styled.div`
    overflow: hidden;
    width: 150px;
    height: 100px;


    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
`

const ItemInfo = styled.div`
  flex-grow: 1;
  align-self: flex-start;
  margin: 20px;


  p{
    color: #444;
    font-weight: bolder;
    font-size: 18px;
  }

  button{
    color:red;
    font-size: 15px;
    margin: 5px 0;
    text-decoration: underline;
    background: none;
    border: none;
    outline:none;
    cursor:pointer;

  }
`

const ItemButton = styled.div`
  display: flex;
  align-items: center;

  button{
    margin:10px 20px;
    outline:none;
    border:none;
    background:transparent;
    color: #d3d;
    cursor: pointer;
    padding:6px 7px;
    border-radius: 50%;
  }

  span{
    font-size: 20px;
    font-weight: 700;
  }
`



export default CartItem