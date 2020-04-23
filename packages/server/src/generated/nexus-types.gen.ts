/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */


import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  NewEntryInput: { // input type
    book: string; // ID!
    chapter?: string | null; // String
    notes?: string | null; // String
    page?: number | null; // Int
    quote?: string | null; // String
  }
  UpdateEntryInput: { // input type
    chapter?: string | null; // String
    id: string; // ID!
    notes?: string | null; // String
    page?: number | null; // Int
    quote?: string | null; // String
  }
  UserInput: { // input type
    name?: string | null; // String
    picture?: string | null; // String
    sub: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Author: { // root type
    id: string; // ID!
    name: string; // String!
  }
  Book: { // root type
    id: string; // ID!
    isbn?: string | null; // String
    publishedDate?: any | null; // DateTime
    synopsis?: string | null; // String
    title: string; // String!
  }
  Entry: { // root type
    chapter?: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    notes?: string | null; // String
    page?: number | null; // Int
    quote?: string | null; // String
  }
  ISBNBook: { // root type
    authors?: string[] | null; // [String!]
    date_published: string; // String!
    dewey_decimal?: string | null; // String
    dimensions?: string | null; // String
    edition?: string | null; // String
    excerpt?: string | null; // String
    format?: string | null; // String
    image?: string | null; // String
    isbn: string; // String!
    isbn13: string; // String!
    langage?: string | null; // String
    msrp?: number | null; // Int
    overview?: string | null; // String
    pages?: number | null; // Int
    publisher?: string | null; // String
    reviews?: string[] | null; // [String!]
    subjects?: string[] | null; // [String!]
    synopsys?: string | null; // String
    title: string; // String!
    title_long?: string | null; // String
  }
  Mutation: {};
  Query: {};
  User: { // root type
    id: string; // ID!
    name?: string | null; // String
    picture?: string | null; // String
    sub: string; // String!
  }
  Node: NexusGenRootTypes['Author'] | NexusGenRootTypes['Book'] | NexusGenRootTypes['Entry'] | NexusGenRootTypes['User'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  NewEntryInput: NexusGenInputs['NewEntryInput'];
  UpdateEntryInput: NexusGenInputs['UpdateEntryInput'];
  UserInput: NexusGenInputs['UserInput'];
}

export interface NexusGenFieldTypes {
  Author: { // field return type
    booksWritten: NexusGenRootTypes['Book'][]; // [Book!]!
    id: string; // ID!
    name: string; // String!
  }
  Book: { // field return type
    authors: NexusGenRootTypes['Author'][]; // [Author!]!
    entries: NexusGenRootTypes['Entry'][]; // [Entry!]!
    id: string; // ID!
    isbn: string | null; // String
    publishedDate: any | null; // DateTime
    synopsis: string | null; // String
    title: string; // String!
  }
  Entry: { // field return type
    book: NexusGenRootTypes['Book'] | null; // Book
    chapter: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    notes: string | null; // String
    owner: NexusGenRootTypes['User'] | null; // User
    page: number | null; // Int
    quote: string | null; // String
  }
  ISBNBook: { // field return type
    authors: string[] | null; // [String!]
    date_published: string; // String!
    dewey_decimal: string | null; // String
    dimensions: string | null; // String
    edition: string | null; // String
    excerpt: string | null; // String
    format: string | null; // String
    image: string | null; // String
    isbn: string; // String!
    isbn13: string; // String!
    langage: string | null; // String
    msrp: number | null; // Int
    overview: string | null; // String
    pages: number | null; // Int
    publisher: string | null; // String
    reviews: string[] | null; // [String!]
    subjects: string[] | null; // [String!]
    synopsys: string | null; // String
    title: string; // String!
    title_long: string | null; // String
  }
  Mutation: { // field return type
    addToMyBooks: NexusGenRootTypes['Book'] | null; // Book
    createEntry: NexusGenRootTypes['Entry'] | null; // Entry
    removeEntry: string | null; // ID
    removeMyBook: NexusGenRootTypes['User'] | null; // User
    updateEntry: NexusGenRootTypes['Entry'] | null; // Entry
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    allAuthors: NexusGenRootTypes['Author'][] | null; // [Author!]
    allBooks: NexusGenRootTypes['Book'][] | null; // [Book!]
    author: NexusGenRootTypes['Author'] | null; // Author
    book: NexusGenRootTypes['Book'] | null; // Book
    entry: NexusGenRootTypes['Entry'] | null; // Entry
    isbnAuthor: NexusGenRootTypes['ISBNBook'][]; // [ISBNBook!]!
    isbnBooks: NexusGenRootTypes['ISBNBook'][]; // [ISBNBook!]!
    me: NexusGenRootTypes['User'] | null; // User
    myBooks: NexusGenRootTypes['Book'][] | null; // [Book!]
    myEntries: NexusGenRootTypes['Entry'][] | null; // [Entry!]
  }
  User: { // field return type
    books: NexusGenRootTypes['Book'][]; // [Book!]!
    entries: NexusGenRootTypes['Entry'][]; // [Entry!]!
    id: string; // ID!
    name: string | null; // String
    picture: string | null; // String
    sub: string; // String!
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addToMyBooks: { // args
      isbn: string; // String!
    }
    createEntry: { // args
      input: NexusGenInputs['NewEntryInput']; // NewEntryInput!
    }
    removeEntry: { // args
      id: string; // ID!
    }
    removeMyBook: { // args
      id: string; // ID!
    }
    updateEntry: { // args
      input: NexusGenInputs['UpdateEntryInput']; // UpdateEntryInput!
    }
    updateUser: { // args
      user: NexusGenInputs['UserInput']; // UserInput!
    }
  }
  Query: {
    author: { // args
      id: string; // String!
    }
    book: { // args
      id: string; // String!
    }
    entry: { // args
      id: string; // ID!
    }
    isbnAuthor: { // args
      name: string; // String!
    }
    isbnBooks: { // args
      name: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Node: "Author" | "Book" | "Entry" | "User"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Author" | "Book" | "Entry" | "ISBNBook" | "Mutation" | "Query" | "User";

export type NexusGenInputNames = "NewEntryInput" | "UpdateEntryInput" | "UserInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "Node";

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}