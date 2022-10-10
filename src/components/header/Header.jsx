import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <section>
      <div className="container header_container">
        <h5>WELCOME TO </h5>
        <h1> HAPPY PAWS</h1>
        <CTA/>
        
        </div>
        </section>
    </header>
  )
}

export default Header