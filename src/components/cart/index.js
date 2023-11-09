import React, { useContext, useEffect, useState } from 'react';
import SingleProduct from '../singleProduct';
import { Cart } from '../../Context';
const CartPage = () => {

    const {cart, setCart} = useContext(Cart)
    const [total, setTotal] = useState()

    useEffect(()=>{
        setTotal(cart.reduce((acc, val) => acc + Number(val.price),0))
    },[cart])
    
  return (
    <div>
      <h2>My Cart</h2>
      <br />
      <h3>Total : {total}</h3>
      <div className='product-container'>
      {
        cart.map((res)=> (
            <SingleProduct product={res} cart={cart} setCart={setCart} key={res.id}/>
        ))
      }

      </div>
    </div>
  );
}

export default CartPage;
