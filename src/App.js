/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Modal from './components/Modal';

import CartContainer from './components/CartContainer'

import {useSelector, useDispatch} from 'react-redux'
import {calculateTotals, getCartItems} from './features/cart/cartSlice'


function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const {isOpen} = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if(isLoading){
    return(

      <div className="loading">Loading...</div>
    )
   
  }


  return (  
    <div className="App">
     {isOpen && <Modal/>}
     <Navbar/>
     <CartContainer/>
    </div>
  );
}

export default App;
