import React from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modalSlice'


const Modal = () => {
    const dispatch = useDispatch();

  return (
        <Overlay>
            <ModalWrap>
                <h4>Remove all items from your shopping cart?</h4>
                <ModalButton>
                <button onClick={()=>
                    {
                    dispatch(clearCart())
                    dispatch(closeModal())
                    }}>
                    Confirm</button>
                 <button onClick={()=>dispatch(closeModal())}>Cancel</button>
                </ModalButton>
            </ModalWrap>
        </Overlay>
  )
}

const Overlay = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    background-color: rgba(0,0,0,0.55);
`

const ModalWrap = styled.div`
    position:absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    height: 200px;
    background-color: #fff;
    padding:20px;
    border-radius: 10px;
`

const ModalButton = styled.div`
    

    button{
        margin: 20px;
        padding:10px 10px;
        border:none;
        background-color: #432;
        color: #fff;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        transition: 0.3s all ease;

        &:hover{
            background-color: #000;
            color: #d3d;
            transform: scale(1.2);
        }
    }
`

export default Modal