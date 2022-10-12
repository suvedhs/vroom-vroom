
import React, { useState } from "react";
import Header from "../header/Header";
import Cats from "../gatos/gatos";
import Gallery from "../Gallery";
import Dog1 from "../../assets/dog1.png";
import Dog2 from "../../assets/dog2.png"

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
    <article className='cats-item flex grid grid-cols-3'>
      <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg">
        <img className="w-full object-contain" src= {Dog1} alt="" id="perro-img" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Doggo aka</div>
            <h3 className="text-gray-700 text-base">Husky</h3>
            <h3 className="text-gray-700 text-base">Age: 1 year</h3>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pupper</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#husky</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bark512</span>
          </div>
        </div>

        <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg">
          <img className="w-full object-contain" src= {Dog2} alt="" id="perro-img" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Doggo</div>
              <h3 className="text-gray-700 text-base">Husky</h3>
              <h3 className="text-gray-700 text-base">Age: 1 year</h3>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pupper</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#husky</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bark512</span>
            </div>
          </div>

          <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="husky-img.jpeg" alt="" id="perro-img" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Doggo</div>
                <h3 className="text-gray-700 text-base">Husky</h3>
                <h3 className="text-gray-700 text-base">Age: 1 year</h3>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pupper</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#husky</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bark512</span>
              </div>
            </div>

            <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg">
        <img class="w-full" src="husky-img.jpeg" alt="" id="perro-img" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Doggo</div>
            <h3 class="text-gray-700 text-base">Husky</h3>
            <h3 class="text-gray-700 text-base">Age: 1 year</h3>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pupper</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#husky</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bark512</span>
          </div>
        </div>

        <div class="max-w-sm p-4 rounded overflow-hidden shadow-lg">
          <img class="w-full" src="husky-img.jpg" alt="" id="perro-img"></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Doggo</div>
              <h3 class="text-gray-700 text-base">Husky</h3>
              <h3 class="text-gray-700 text-base">Age: 1 year</h3>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pupper</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#husky</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bark512</span>
            </div>
          </div>

          <div class="max-w-sm p-4 rounded overflow-hidden shadow-lg">
            <img class="w-full" src="husky-img.jpeg" alt="" id="perro-img" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Doggo</div>
                <h3 class="text-gray-700 text-base">Husky</h3>
                <h3 class="text-gray-700 text-base">Age: 1 year</h3>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pupper</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#husky</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bark512</span>
              </div>
            </div>

    </article>
  );
}

export default Perros;
