import React from 'react';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import Dogs from './dogs/Dogs';
import Cats from './cats/Cats'
// import Login from './components/login/server'


const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <Dogs/>
    <Cats/>


    {/* <Login/> */}
</>
  )
}

export default App;
