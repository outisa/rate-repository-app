import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials)  {
      accessToken
    }
  }
`;

/*export const CREATE_USER = gql`
  mutation createUser($user: ) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
    }
  }
`;*/