import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/cartSlice'
export default function ProductCard({ product }){
  const dispatch = useDispatch()
  const items = useSelector(s => s.cart.items)
  const isAdded = Boolean(items[product.id])
  function handleAdd(){ dispatch(addItem(product)) }
  return (
    <div className='product-card'>
      <img src={product.img} alt={product.name} className='thumb' />
      <div className='info'>
        <h4>{product.name}</h4>
        <p className='price'>${product.price.toFixed(2)}</p>
        <button onClick={handleAdd} disabled={isAdded}>{isAdded ? 'Added' : 'Add to Cart'}</button>
      </div>
    </div>
  )
}
