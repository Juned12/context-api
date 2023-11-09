import React, { useState} from 'react';
import {faker} from "@faker-js/faker";
import "./index.css"
import SingleProduct from '../singleProduct';

faker.seed(100)
const Home = () => {

    const productArray = [...Array(20)].map(()=> ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.avatar()
    }))
    const [products] = useState(productArray);

  return (
    <div className='product-container'>
      {
        products.map((res)=> (
            <SingleProduct product={res} key={res.id}/>
        ))
      }
    </div>
  );
}

export default Home;
