import { gql } from 'apollo-server-express';

import { BookResolvers, QueryResolvers } from '../../generated/graphql';
import Author from '../models/author';

export const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
  }

  extend type Book {
    """
    A list of authors for a given book
    """
    authors: [Author]
  }

  extend type Query {
    allAuthors: [Author]
    author(id: ID!): Author
  }
`;

interface Resolvers {
  Book: BookResolvers;
  Query: QueryResolvers;
}

export const resolvers: Resolvers = {
  Query: {
    allAuthors: () => Author.find({}).exec(),
    author: (_, { id }) => Author.findById(id).exec(),
  },
  Book: {
    authors: ({ authors }) =>
      Author.find({
        _id: { $in: authors },
      }).exec(),
  },
};