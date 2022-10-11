import React, { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
// import Cats from './components/Cats'
// import Login from './components/login/server'
// import Signup from './components/login/server'
import Cats from './components/gatos/gatos';
import Dogs from './components/perros/Perros';
import Gallery from './components/Gallery';







const App = () => {

  const [pages] = useState([
    // {name: 'Log in', description:<Login></Login>},
    // {name: 'Signup', description:<Signup></Signup>},
    {name: 'Back to the top', description: <Header></Header> },
    {name: "FaDog" , description: <Dogs></Dogs> },
    {name: 'Cats', description: <Cats></Cats> },
  ])



  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <>

    <div>
      {/* <Header/> */}
      <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      
      <main>
          <>
            <Gallery currentCategory={currentPage}></Gallery>
          </>
        </main>
      {/* <Nav/> */}
    </div>
    


    {/* <Login/> */}
</>
  )
}

export default App;
