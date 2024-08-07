import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import {
  serial,
  text,
  varchar,
  pgTable,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { db } from '@/db';

export const statusEnum = pgEnum('status', ['OPEN', 'IN_PROGRESS', 'CLOSED']);

export const userTable = pgTable('user', {
  id: text('id').primaryKey(),
});

export const issueTable = pgTable('issue', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }),
  description: text('description'),
  status: statusEnum('status').default('OPEN'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const sessionTable = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
});

export const adapter = new DrizzlePostgreSQLAdapter(
  db,
  sessionTable,
  userTable
);
