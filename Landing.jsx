import React from 'react'
export default function Landing({ onGetStarted }){
  return (
    <section className='landing'>
      <div className='landing-overlay'>
        <h2>GreenThumb Nursery</h2>
        <p>Your friendly online plant shop — bringing green to your home. We curate low-maintenance, air-purifying and tropical plants for every space.</p>
        <button className='get-started' onClick={onGetStarted}>Get Started</button>
      </div>
    </section>
  )
}
