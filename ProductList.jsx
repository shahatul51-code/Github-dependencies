import React from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'
export default function ProductList(){
  const categories = Array.from(new Set(products.map(p=>p.category)))
  return (
    <section className='products'>
      {categories.map(cat => (
        <div key={cat} className='category-group'>
          <h3>{cat}</h3>
          <div className='product-grid'>
            {products.filter(p=>p.category===cat).map(p=> <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      ))}
    </section>
  )
}
