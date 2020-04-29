/* eslint-disable import/no-cycle */
import DataLoader from 'dataloader';

import {
  BooksAuthorsEntity,
  UserBooksEntity,
  IsbnBooksEntity,
} from '../generated/db-types';
import { byColumnLoader, manyByColumnLoader } from '../utils/loader-utils';
import Context from './context';

class BookSource {
  protected ctx: Context;

  public constructor(ctx: Context) {
    this.ctx = ctx;
  }

  // Used to get book ids from an author
  private bookIdsLoader = new DataLoader<string, BooksAuthorsEntity[]>(ids => {
    // @ts-ignore
    return manyByColumnLoader(this.ctx, 'booksAuthors', 'book_id', ids);
  });

  // TODO: likely eliminate this as a Data loader
  private userBooksLoader = new DataLoader<string, UserBooksEntity[]>(ids => {
    // @ts-ignore
    return manyByColumnLoader(this.ctx, 'userBooks', 'user_id', ids);
  });

  private userBookByIdLoader = new DataLoader<string, UserBooksEntity>(ids => {
    return byColumnLoader(this.ctx, 'userBooks', 'id', ids);
  });

  // TODO: This may not be needed in favor of a join on userBookByIdLoader
  private isbnBookByIdLoader = new DataLoader<string, IsbnBooksEntity>(ids => {
    return byColumnLoader(this.ctx, 'isbnBooks', 'id', ids);
  });

  private async bookIds(authorId: string) {
    const result = await this.bookIdsLoader.load(authorId);
    return result.map(({ bookId }) => bookId);
  }

  public async currentUsersBooks(): Promise<(UserBooksEntity)[] | null> {
    const userId = await this.ctx.user.userId;
    return userId ? this.userBooksLoader.load(userId) : Promise.resolve(null);
  }

  public isbnBookById(id: string): Promise<IsbnBooksEntity> {
    return this.isbnBookByIdLoader.load(id);
  }

  public getUserBookById(id: string): Promise<UserBooksEntity> {
    return this.userBookByIdLoader.load(id);
  }

  public async booksWritten(authorId: string) {
    const bookIds = await this.bookIds(authorId);
    // TODO: Implement join from ISBN book to user book
  }
}

export default BookSource;