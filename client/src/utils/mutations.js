import {gql} from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!,$email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login (email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_BOOK = gql`
mutation addBook($bookId: ID!, $authors: [String], $title: String, $description: String, $image: String) {
    addBook(bookId: $bookId, authors: $authors, title: $title, description: $description, image: $image) {
      username
      savedBooks {
        title
        _id
        authors
        description
        bookId
        image
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql`
mutation delete($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      username
      savedBooks {
        title
        _id
        authors
        description
        bookId
        image
        link
      }
    }
  }
`;