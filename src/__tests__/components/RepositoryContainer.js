import React from 'react';
import { RepositoryListContainer } from "../../components/RepositoryListContainer";
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { getByTestId } = render(<RepositoryListContainer repositories={ repositories } />);

      expect(getByTestId('jaredpalmer.formik, name')).toHaveTextContent('jaredpalmer/formik');
      expect(getByTestId('jaredpalmer.formik, name')).toHaveTextContent('Build forms in React, without the tears');
      expect(getByTestId('jaredpalmer.formik, language')).toHaveTextContent('TypeScript');
      expect(getByTestId('jaredpalmer.formik, forksCount')).toHaveTextContent('1.6k Forks');
      expect(getByTestId('jaredpalmer.formik, ratingAverage')).toHaveTextContent('88 Rating');
      expect(getByTestId('jaredpalmer.formik, stargazerCount')).toHaveTextContent('21.9k Stars');
      expect(getByTestId('jaredpalmer.formik, reviewCount')).toHaveTextContent('3 Reviews');
      expect(getByTestId('async-library.react-async, name')).toHaveTextContent('async-library/react-async');
      expect(getByTestId('async-library.react-async, name')).toHaveTextContent('Flexible promise-based React data loader');
      expect(getByTestId('async-library.react-async, language')).toHaveTextContent('JavaScript');
      expect(getByTestId('async-library.react-async, forksCount')).toHaveTextContent('69 Forks');
      expect(getByTestId('async-library.react-async, ratingAverage')).toHaveTextContent('72 Rating');
      expect(getByTestId('async-library.react-async, stargazerCount')).toHaveTextContent('1.8k Stars');
      expect(getByTestId('async-library.react-async, reviewCount')).toHaveTextContent('3 Reviews');
    });
  });
});