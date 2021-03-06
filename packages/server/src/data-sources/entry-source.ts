/* eslint-disable import/no-cycle */
import DataLoader from 'dataloader';
import { QueryBuilder } from 'knex';

import { NexusGenInputs } from '../generated/nexus-types.gen';
import { EntriesEntity } from '../generated/db-types';
import { byColumnLoader, manyByColumnLoader } from '../utils/loader-utils';
import Context from './context';

class EntrySource {
  protected ctx: Context;

  public constructor(ctx: Context) {
    this.ctx = ctx;
  }

  private entryReturn: Extract<keyof EntriesEntity, string>[] = [
    'id',
    'userBookId',
    'userId',
    'createdAt',
    'updatedAt',
    'title',
    'notes',
    'chapter',
    'pages',
    'quote',
  ];

  private get writeEntry(): QueryBuilder {
    return this.ctx.knex<EntriesEntity>('entries').returning(this.entryReturn);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private byIdLoader = new DataLoader<string, EntriesEntity>(ids => {
    return byColumnLoader(this.ctx, 'entries', 'id', ids);
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private byBookIdLoader = new DataLoader<string, EntriesEntity[]>(ids => {
    return manyByColumnLoader(this.ctx, 'entries', 'userBookId', ids);
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private byUserIdLoader = new DataLoader<string, EntriesEntity[]>(ids => {
    return manyByColumnLoader(this.ctx, 'entries', 'userId', ids);
  });

  public byId(id: string): Promise<EntriesEntity> {
    return this.byIdLoader.load(id);
  }

  public byBookId(id: string): Promise<EntriesEntity[]> {
    return this.byBookIdLoader.load(id);
  }

  public byUserId(id: string): Promise<EntriesEntity[]> {
    return this.byUserIdLoader.load(id);
  }

  public async currentUserEntries(): Promise<EntriesEntity[] | null> {
    const userId = await this.ctx.user.userId;
    return userId ? this.byUserId(userId) : null;
  }

  public async createEntry(
    data: NexusGenInputs['NewEntryInput'],
  ): Promise<EntriesEntity> {
    const userId = await this.ctx.user.userId;
    if (!userId) {
      return Promise.reject(
        new Error('You must be authenticated to create an entry'),
      );
    }
    const input = {
      ...data,
      userId,
    };
    const [entry] = await this.writeEntry.insert(input);
    return entry;
  }

  public async updateEntry(
    data: NexusGenInputs['UpdateEntryInput'],
  ): Promise<EntriesEntity> {
    const userId = await this.ctx.user.userId;
    if (!userId) {
      return Promise.reject(
        new Error('You must be authenticated to update an entry'),
      );
    }
    const [entry] = await this.writeEntry
      .where({ userId, id: data.id })
      .update(data);
    return entry;
  }

  public async deleteEntry(id: string): Promise<Pick<EntriesEntity, 'id'>> {
    const userId = await this.ctx.user.userId;
    if (!userId) {
      return Promise.reject(
        new Error('You must be authenticated to delete an entry'),
      );
    }
    const [deletedId] = await this.writeEntry
      .where({ userId, id })
      .del()
      .returning('id');
    return deletedId;
  }
}

export default EntrySource;
