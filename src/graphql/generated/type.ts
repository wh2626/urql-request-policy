export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Product = {
  __typename?: 'Product';
  inStock?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  shippingEstimate?: Maybe<Scalars['Int']>;
  upc: Scalars['String'];
  weight?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  topProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryTopProductsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type Review = {
  __typename?: 'Review';
  author?: Maybe<User>;
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  product?: Maybe<Product>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  username?: Maybe<Scalars['String']>;
};
