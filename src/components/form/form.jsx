import React from "react";
// import gql from "graphql";
// import { useQuery } from "@apollo/client";
// import { gql } from "graphql-tag";

function Form() {

  // const {loading,data} = useQuery(FETCH_CATS_QUERY);
  // if(data){
  //   console.log(data);
  // }

  return (

    
    <form action="/action_page.php">
      <label for="pet-type">What kind of pet did you find?</label>
      <select id="pet-type" name="pet-type">
        <option value="cats">Cats</option>
        <option value="dogs">Dogs</option>
      </select>
      <br />
      <label for="pet-breed">What breed is the pet?</label>
      <input type="text"></input>
      <br />
      <label for="pet-age">How old do you think the pet is?</label>
      <input type="text"></input>
      <br />
      <label for="pet-sex">Is the pet male or female?</label>
      <select id="pet-sex" name="pet-sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <label for="location">Where did you find the pet?</label>
      <input type="text"></input>
      <br />
      <label for="image">Upload a pic:</label>
      <input type="file" id="myFile" name="filename"></input>
      <br />
      <input type="submit"></input>
    </form>
  );
}

// const FETCH_CATS_QUERY = gql`
//   {
//     getCats {
//       id
//       name
//       breed
//       sex
//       age
//       city
//       image
//     }
//   }
// `;

export default Form;
