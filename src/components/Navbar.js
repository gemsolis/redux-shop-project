import React from 'react'
import styled from 'styled-components'

import {useSelector} from 'react-redux'

import {GiShoppingCart} from 'react-icons/gi'

const Navbar = () => {
    //Represent Initial State
    const {amount} = useSelector((store) => store.cart);


  return (
    <div>
        <Container>
        <Nav>
            <Brand>Redux Toolkit Shop</Brand>
            <CartButton>
            <GiShoppingCart/>
            <span>{amount}</span>
            </CartButton>
        </Nav>
        </Container>

    </div>
  )
}



//Styled Components

const Container = styled.div`
    width: 100%;
`

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px 70px;
    background-color: #333;
    color: #fff;
    
`

const Brand = styled.h2`
    
`

const CartButton = styled.button`
    border: none;
    outline: none;
    color: greenyellow;
    background: transparent;
    font-size:30px;
    cursor: pointer;
    position: relative;

    span{
        position: absolute;
        top:-5px;
        right:-10px;
        background-color: #fff;
        color:#000;
        font-size: 10px;
        padding:5px 8px;
        border-radius: 50%;
    }
`

export default Navbar