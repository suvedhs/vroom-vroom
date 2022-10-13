// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs ("type User is how we customly name the query for what we are looking for in the database, and 'String' or 'Int' is the datatype that will be returned")
const typeDefs = gql`

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type User {
        _id: ID
        username: String
        email: String
    }
`;

// export the typeDefs
module.exports = typeDefs;