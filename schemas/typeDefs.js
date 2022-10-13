// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs ("type User is how we customly name the query for what we are looking for in the database, and 'String' or 'Int' is the datatype that will be returned")
const typeDefs = gql`

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        cats: [Cat]
        dogs: [Dog]
    }
    type User {
        _id: ID
        username: String
        email: String
    }
    type Cat {
        _id: ID
        name: String
        breed: String
        sex: String
        age: Int
        city: String
        image: String
    }
    type Dog {
        _id: ID
        name: String
        breed: String
        sex: String
        age: Int
        city: String
        image: String
    }
`;

// export the typeDefs
module.exports = typeDefs;