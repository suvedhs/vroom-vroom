
import React, { useState } from "react";
import Header from "../header/Header";
import Cats from "../gatos/gatos";
import Gallery from "../Gallery";



function Perros() {
    const [pages] = useState([
      // {name: 'Log in', description:<Login></Login>},
      // {name: 'Signup', description:<Signup></Signup>},
      {name: 'Dog Page', description: <></> },
      
      {name: 'Back to the top', description: <Header></Header> },
      
      {name: 'Cats', description: <Cats></Cats> },
    ])

    const [currentPage, setCurrentPage] = useState(pages[0]);



  return (
    <div>
      <main>
          <button
            onClick={() => {
              currentPage(pages[1]);
            }}
          >
            {" "}
            Header{" "}
          </button>

          <button
            onClick={() => {
              currentPage(pages[1]);
            }}
          >
            {"     "}
            Cat Link #2{" "}
          </button>

          <h1>I'm a dog woof woof</h1>

          
        </main>
      {/* cotains the classname for the download button */}
      
    </div>
  );
}

export default Perros;
