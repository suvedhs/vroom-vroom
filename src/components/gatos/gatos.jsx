import React from "react";
import Header from "../header/Header";
import Dogs from "../perros/perros";
import PostCard from "../PostCard/PostCard";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";


function Gatos() {
  // const { loading, 
  //   data: {getCats: cats} 
  // } = useQuery(FETCH_CATS_QUERY);
 
  

  return (
    <grid columns= {3}>
      <div>
        {loading ? (
          <h1>Recent Posts</h1>
        ) : (
          cats.map((cat)=>(
            <div key = {cat.id}>
            <PostCard cat = {cat}/>
            </div>
          ))
        )}
      </div>
      
    </grid>
  );
}
const FETCH_CATS_QUERY = gql`
  {
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
export default Gatos;
