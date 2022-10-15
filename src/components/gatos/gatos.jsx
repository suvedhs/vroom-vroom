import React from "react";
import Header from "../header/Header";


import { useQuery, gql } from "@apollo/client";


// searches up the cat database
const GET_CATS = gql`
  query GetCats {
    getCats {
      id
      name
      breed
      sex
      age
      city
      image
    }
  }
`;


// function places each cat in a card, styling will have to be done here
function Gatos() {
  const { loading, error, data } = useQuery(GET_CATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.getCats.map(({ id, name, breed, sex, age, city, image }) => (
    
    <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg">
    <img
      className="w-fill object-cover h-96"
      class=""
      src={image}
      alt=""
      id="perro-img"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Doggo aka</div>
      <h3 className="text-gray-700 text-base">Husky</h3>
      <h3 className="text-gray-700 text-base">Age: 1 year</h3>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #pupper
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #husky
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #bark512
      </span>
    </div>
  </div>
    
  ));
}

export default function App() {
  return (
    <div>
      <h2>
      
      </h2>
      <br />
      <article className="cats-item flex grid grid-cols-3">
      
      <Gatos></Gatos>
      
    </article>
      
    </div>
  );
}
