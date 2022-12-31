const {gql} = require('apollo-server-express');

//create the type defs
const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link:String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        getSingleUser: User
        getAllUsers: [User]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password:String!): Auth
        addBook(bookId: ID!, authors: [String], title: String, description: String, image: String ): User
        deleteBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;