// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs ("queryName is gonna be how we name the query for what we are looking for in the database, and 'string' is the datatype that will be returned")
const typeDefs = gql`
type Query {
    queryName: String 
}
`;

// export the typeDefs
module.exports = typeDefs;