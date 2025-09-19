import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, removeItem, clearCart } from '../features/cartSlice'
export default function CartPage({ onContinue }){
  const items = useSelector(s => s.cart.items)
  const dispatch = useDispatch()
  const entries = Object.values(items)
  const totalCount = entries.reduce((acc,e)=> acc + e.quantity,0)
  const totalCost = entries.reduce((acc,e)=> acc + e.quantity * e.product.price,0)
  return (
    <section className='cart-page'>
      <h2>Your Shopping Cart</h2>
      <p>Total items: {totalCount}</p>
      <p>Total cost: ${totalCost.toFixed(2)}</p>
      <div className='cart-items'>
        {entries.length === 0 && <p>Your cart is empty.</p>}
        {entries.map(entry => (
          <div key={entry.product.id} className='cart-item'>
            <img src={entry.product.img} alt='' className='thumb-small' />
            <div className='cart-info'>
              <h4>{entry.product.name}</h4>
              <p>Unit price: ${entry.product.price.toFixed(2)}</p>
              <div className='qty-controls'>
                <button onClick={()=>dispatch(decrement(entry.product.id))}>-</button>
                <span>{entry.quantity}</span>
                <button onClick={()=>dispatch(increment(entry.product.id))}>+</button>
                <button className='delete' onClick={()=>dispatch(removeItem(entry.product.id))}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='cart-actions'>
        <button onClick={()=>alert('Coming Soon')}>Checkout</button>
        <button onClick={onContinue}>Continue Shopping</button>
        <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </div>
    </section>
  )
}
