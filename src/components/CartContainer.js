import React from 'react'
import styled from 'styled-components';

import CartItem from './CartItem';

import { useDispatch , useSelector} from 'react-redux'
import { openModal } from '../features/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartItems, total, amount} = useSelector((store) => store.cart);


  if (amount < 1) {
  return (
    <Container>
      <Header>Your Bag</Header>
      <EmptyCart>
        <p>is currently empty.</p>
      </EmptyCart>
    </Container>
  );
  }
  
  return (
      <Container>
        <Header>Your Bag</Header>
        <CartWrap>
          {cartItems.map((item) => {
            return <CartItem key = {item.id} {...item}/>
          })}
        </CartWrap>
        
        <Footer>
          <hr />
          <CartTotal>
          <h2>
            Total 
            <span>$ {total}</span></h2>
          </CartTotal>
          <ClearBtn>
            <button onClick={()=>dispatch(openModal())}>Clear Cart</button>
          </ClearBtn>
        </Footer>

      </Container>

  )
}



const Container = styled.div`
    width: 100%;
    padding:30px 10vw;
`

const Header = styled.h2`
    margin:10px 0;
    text-align: center;
    text-transform: uppercase;

`

const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
`

const CartWrap = styled.div`

`

const Footer = styled.div`
  margin-top: 30px;
`

const CartTotal = styled.div`
  padding:10px;

  h2{
  display: flex;
  justify-content: space-between;
  }
`

const ClearBtn = styled.div`
  text-align: center;
  padding:20px;

  button{
    outline:none;
    border:2px solid red;
    padding:5px 10px;
    border-radius: 5px;
    background-color: transparent;
    text-transform: uppercase;
    color: red;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
      background-color: red;
      color:#fff;
    }

  }
`

export default CartContainer