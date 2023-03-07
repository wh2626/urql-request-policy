import * as Types from '@/src/graphql/generated/type';

import gql from 'graphql-tag';
import * as Urql from 'urql';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ExampleQueryQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', topProducts?: Array<{ __typename?: 'Product', name?: string | null, reviews?: Array<{ __typename?: 'Review', author?: { __typename?: 'User', id: string, name?: string | null } | null } | null> | null } | null> | null };


export const ExampleQueryDocument = gql`
    query ExampleQuery($first: Int) {
  topProducts(first: $first) {
    name
    reviews {
      author {
        id
        name
      }
    }
  }
}
    `;

export function useExampleQueryQuery(options?: Omit<Urql.UseQueryArgs<ExampleQueryQueryVariables>, 'query'>) {
  return Urql.useQuery<ExampleQueryQuery, ExampleQueryQueryVariables>({ query: ExampleQueryDocument, ...options });
};

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockExampleQueryQuery((req, res, ctx) => {
 *   const { first } = req.variables;
 *   return res(
 *     ctx.data({ topProducts })
 *   )
 * })
 */
export const mockExampleQueryQuery = (resolver: ResponseResolver<GraphQLRequest<ExampleQueryQueryVariables>, GraphQLContext<ExampleQueryQuery>, any>) =>
  graphql.query<ExampleQueryQuery, ExampleQueryQueryVariables>(
    'ExampleQuery',
    resolver
  )
