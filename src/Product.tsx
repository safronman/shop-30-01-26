import {useEffect, useState} from 'react';
import axios from 'axios';
import type {ProductType} from './BestSellers.tsx';
import rating from './assets/img/rating.svg'
import cartWhite from './assets/img/cartWhite.svg'
import arrowBack from './assets/img/arrowBack.svg'
import {Link, useParams} from 'react-router';

export const Product = () => {

  const [product, setProduct] = useState<ProductType | null>(null)

  const {productId} = useParams();

  console.log('1')
  console.log('productId', productId)

  useEffect(() => {
    console.log('2')
    axios.get(`https://masterclass.kimitsu.it-incubator.io/api/products/${productId}`).then((res) => {
      console.log('😻 product', res.data)
      setProduct(res.data)
    })
  }, [])


  if (product === null) {
    console.log('4')
    return <h1>🔘 Продукт грузится...</h1>
  }

  console.log('3')

  return (
    <div>
      <div className="arrowBack">
        <Link to={"/"}>
          <img src={arrowBack} alt="arrowBack" />
          Back to Best Seller
        </Link>
      </div>

      <div className="product">
        <img src={product.image} alt=""/>
        <div className="info">
          <p className="title">{product.title}</p>
          <p className="price">$ {product.price}</p>
          <div className="rating">
            <p>Rating: {product.rating.rate}</p>
            <img src={rating} alt=""/>
          </div>
          <div className="category">
            <span>Category:</span>
            <p>{product.category}</p>
          </div>
          <p className="description">{product.description}</p>
          <button>
            <img src={cartWhite} alt=""/>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
