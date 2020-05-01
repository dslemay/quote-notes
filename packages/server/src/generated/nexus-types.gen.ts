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
    sub?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Author: { // root type
    id: string; // ID!
    name: string; // String!
  }
  Entry: { // root type
    chapter?: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    notes?: string | null; // String
    page?: number | null; // Int
    quote?: string | null; // String
    updatedAt: any; // DateTime!
    userBookId: string; // ID!
    userId: string; // ID!
  }
  ISBNAPIBook: { // root type
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
  ISBNDatabaseBook: { // root type
    id: string; // ID!
    isbn10: string; // String!
    isbn13: string; // String!
    title: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    name?: string | null; // String
    sub: string; // String!
    updatedAt: any; // DateTime!
  }
  UserBook: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    isbn10: string; // String!
    isbn13: string; // String!
    rating?: number | null; // Int
    synopsis?: string | null; // String
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  BookBase: NexusGenRootTypes['ISBNDatabaseBook'] | NexusGenRootTypes['UserBook'];
  Node: NexusGenRootTypes['Author'] | NexusGenRootTypes['ISBNDatabaseBook'] | NexusGenRootTypes['Entry'] | NexusGenRootTypes['UserBook'] | NexusGenRootTypes['User'];
  Timestamps: NexusGenRootTypes['Entry'] | NexusGenRootTypes['UserBook'] | NexusGenRootTypes['User'];
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
    booksWritten: NexusGenRootTypes['ISBNDatabaseBook'][]; // [ISBNDatabaseBook!]!
    id: string; // ID!
    name: string; // String!
  }
  Entry: { // field return type
    book: NexusGenRootTypes['UserBook'] | null; // UserBook
    chapter: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    notes: string | null; // String
    owner: NexusGenRootTypes['User'] | null; // User
    page: number | null; // Int
    quote: string | null; // String
    updatedAt: any; // DateTime!
    userBookId: string; // ID!
    userId: string; // ID!
  }
  ISBNAPIBook: { // field return type
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
  ISBNDatabaseBook: { // field return type
    id: string; // ID!
    isbn10: string; // String!
    isbn13: string; // String!
    title: string; // String!
  }
  Mutation: { // field return type
    addToMyBooks: NexusGenRootTypes['UserBook']; // UserBook!
    createEntry: NexusGenRootTypes['Entry']; // Entry!
    removeEntry: string; // ID!
    removeMyBook: string; // ID!
    updateEntry: NexusGenRootTypes['Entry']; // Entry!
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    allAuthors: NexusGenRootTypes['Author'][] | null; // [Author!]
    author: NexusGenRootTypes['Author'] | null; // Author
    entry: NexusGenRootTypes['Entry'] | null; // Entry
    isbnAuthor: NexusGenRootTypes['ISBNAPIBook'][]; // [ISBNAPIBook!]!
    isbnBooks: NexusGenRootTypes['ISBNAPIBook'][]; // [ISBNAPIBook!]!
    me: NexusGenRootTypes['User'] | null; // User
    myBooks: NexusGenRootTypes['UserBook'][] | null; // [UserBook!]
    myEntries: NexusGenRootTypes['Entry'][] | null; // [Entry!]
    userBook: NexusGenRootTypes['UserBook'] | null; // UserBook
  }
  User: { // field return type
    books: NexusGenRootTypes['UserBook'][]; // [UserBook!]!
    createdAt: any; // DateTime!
    entries: NexusGenRootTypes['Entry'][]; // [Entry!]!
    id: string; // ID!
    name: string | null; // String
    sub: string; // String!
    updatedAt: any; // DateTime!
  }
  UserBook: { // field return type
    authors: NexusGenRootTypes['Author'][]; // [Author!]!
    createdAt: any; // DateTime!
    entries: NexusGenRootTypes['Entry'][]; // [Entry!]!
    id: string; // ID!
    isbn10: string; // String!
    isbn13: string; // String!
    rating: number | null; // Int
    synopsis: string | null; // String
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  BookBase: { // field return type
    isbn10: string; // String!
    isbn13: string; // String!
    title: string; // String!
  }
  Node: { // field return type
    id: string; // ID!
  }
  Timestamps: { // field return type
    createdAt: any; // DateTime!
    updatedAt: any; // DateTime!
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
    entry: { // args
      id: string; // ID!
    }
    isbnAuthor: { // args
      name: string; // String!
    }
    isbnBooks: { // args
      name: string; // String!
    }
    userBook: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  BookBase: "ISBNDatabaseBook" | "UserBook"
  Node: "Author" | "ISBNDatabaseBook" | "Entry" | "UserBook" | "User"
  Timestamps: "Entry" | "UserBook" | "User"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Author" | "Entry" | "ISBNAPIBook" | "ISBNDatabaseBook" | "Mutation" | "Query" | "User" | "UserBook";

export type NexusGenInputNames = "NewEntryInput" | "UpdateEntryInput" | "UserInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "BookBase" | "Node" | "Timestamps";

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