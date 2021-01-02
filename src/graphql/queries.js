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

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }      
    }
  }
`;