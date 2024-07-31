// import { datetime, timestamp } from 'drizzle-orm/mysql-core';
import {
  serial,
  text,
  varchar,
  pgTable,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';

// export const mySchema = pgSchema('public');

export const statusEnum = pgEnum('status', ['OPEN', 'IN_PROGRESS', 'CLOSED']);

export const issue = pgTable('issue', {
  id: serial('id').primaryKey(),
  title: varchar('title', {length:256}),
  description: text('description'),
  status: statusEnum('status').default('OPEN'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
