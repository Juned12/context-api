import React, { useContext } from 'react';
import { Cart } from '../../Context';

const SingleProduct = ({product}) => {
    const {cart, setCart} = useContext(Cart)
  return (
    <div className='single-prod'>
    <img src={product.image} alt="" style={{width: "50px", height: "50px"}}/>
      <div>{product.name}</div>
      <div>{product.price}</div>
      {
        !cart.includes(product) ?
      <button onClick={()=>{setCart([...cart, product])}}>Add To Cart</button> :
      <button onClick={()=>{setCart(cart.filter(c=>c.id !== product.id))}}>Remove Cart</button>
      }

    </div>
  );
}

export default SingleProduct;
