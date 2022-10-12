import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
// import Cats from './components/Cats'
import Login from './components/login/Login';
// import Signup from './components/login/server'
import Cats from "./components/gatos/gatos";
import Dogs from "./components/perros/Perros";
import Gallery from "./components/Gallery";

const App = () => {
  const [pages] = useState([
    {name: 'Log in', description:<Login></Login>},
    // {name: 'Signup', description:<Signup></Signup>},
    { name: "Back to the top", description: <Header></Header> },
    { name: "FaDog", description: <Dogs></Dogs> },
    { name: "Cats", description: <Cats></Cats> },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  

  return (
    <>
      <div>
        {/* <Header/> */}
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          
        ></Nav>

        <main>
          <button
            onClick={() => {
              setCurrentPage(pages[1]);
            }}
          >
            {" "}
            Dog Link{" "}
          </button>

          <button
            onClick={() => {
              setCurrentPage(pages[2]);
            }}
          >
            {" "}
            Cat Link{" "}
          </button>

          <>
            <Gallery currentPage={currentPage}></Gallery>
          </>
        </main>
        {/* <Nav/> */}
      </div>

      {/* <Login/> */}
    </>
  );
};

export default App;
