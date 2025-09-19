import React, { useState } from 'react'
import Landing from './components/Landing'
import ProductList from './components/ProductList'
import CartPage from './components/CartPage'
import Header from './components/Header'

export default function App(){
  const [route, setRoute] = useState('landing')
  return (
    <div className='app'>
      <Header onNavigate={setRoute} current={route} />
      <main className='main'>
        {route === 'landing' && <Landing onGetStarted={() => setRoute('products')} />}
        {route === 'products' && <ProductList />}
        {route === 'cart' && <CartPage onContinue={() => setRoute('products')} />}
      </main>
    </div>
  )
}
