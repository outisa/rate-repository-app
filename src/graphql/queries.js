import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories { 
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query User {
    authorizedUser {
      id
      username
    }    
  }
`;