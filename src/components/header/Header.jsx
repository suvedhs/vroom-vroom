import React from 'react'
import './header.css'
import CTA from './CTA'
import Dogs from './Dogs'
import Cats from './Cats'
// import Login from '../../src/Login'


const Header = () => {
  return (
    <header>
      <section>
      <div className="container header_container">

        <h1>WELCOME TO HAPPY PAWS</h1>

        
        <CTA/>
        <Dogs/>
        <Cats/> 
        {/* <Login/> */}
        
        </div>
        </section>
    </header>
  )
}

export default Header