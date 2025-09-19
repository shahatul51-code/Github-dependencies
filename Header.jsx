import React from 'react'
import { useSelector } from 'react-redux'
export default function Header({ onNavigate, current }){
  const items = useSelector(s => s.cart.items)
  const totalCount = Object.values(items).reduce((acc,i)=> acc + i.quantity,0)
  return (
    <header className='header'>
      <div className='brand' onClick={() => onNavigate('landing')}><h1>GreenThumb Nursery</h1></div>
      <nav className='nav'>
        <button className={current==='products'?'active':''} onClick={()=>onNavigate('products')}>Products</button>
        <button className={current==='cart'?'active':''} onClick={()=>onNavigate('cart')}>Cart</button>
        <div className='cart-icon' onClick={()=>onNavigate('cart')}>🛒 <span className='cart-count'>{totalCount}</span></div>
      </nav>
    </header>
  )
}
