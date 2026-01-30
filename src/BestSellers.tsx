import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export type ProductType = {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const BestSellers = () => {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    axios.get('https://masterclass.kimitsu.it-incubator.io/api/products').then((res) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div className={'bestSeller'}>
      <h2>Bestsellers</h2>
      <div className={'cards'}>
        {products.map((el) => {
          return (
            <div className="card" key={el.id}>
              <img src={el.image} alt="img"/>
              <h4>{el.title}</h4>
              <p className="price">${el.price}</p>
              <Link to={`product/${el.id}`}>Show more</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
