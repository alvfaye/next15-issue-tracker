import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import {
  serial,
  text,
  varchar,
  pgTable,
  timestamp,
  pgEnum,
  uuid,
  integer,
} from 'drizzle-orm/pg-core';
import { db } from '@/db';
import { unique } from 'drizzle-orm/pg-core';


export const issueTable = pgTable('issue', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  description: text('description'),
  status: text('status').default('OPEN'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  assignedToUserId: varchar('assigned_to_userid', { length: 255 }),
  assignedToUser: uuid('assigned_to_user').references(() => userTable.id),
});

export const accountTable = pgTable('account', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('userId'),
  type: text('type'),
  provider: text('provider'),
  providerAccountId: text('provider_account_id'),
  refresh_token: text('refresh_token'),
  access_token: text('access_token'),
  expires_at: serial('expires_at'),
  token_type: text('token_type'),
  scope: text('scope'),
  id_token: text('id_token'),
  session_state: text('session_state'),
  user: uuid('user').references(() => userTable.id, { onDelete: 'cascade' }),
});

export const sessionTable = pgTable('session', {
  id: uuid('id').primaryKey().default('gen_random_uuid()'),
  sessionToken: text('session_token').unique(),
  userId: uuid('user_id'),
  expires: timestamp('expires'),
  user: uuid('user').references(() => userTable.id, { onDelete: 'cascade' }),
});

export const userTable = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: timestamp('email_verified'),
  image: text('image'),
  username: text('username').unique(),
  password_hash: text('password_hash'),
  // accounts: accountTable[],
  // sessions: Session[],
  // assignedIssues: issue[],
});


// export const userIssuesTable = pgTable('userissue', {
//   id: serial("id").primaryKey(),
//   userid: integer("user_id").references(() => userTable.id),
//   issueid: integer("issue_id").references((()=>issueTable.id))
// })

export const VerificationToken = pgTable('verification_tokens', {
  identifier: text('identifier'),
  token: text('token').unique(),
  expires: timestamp('expires'),
}, (t) => ({
  unq: unique().on(t.identifier, t.token),
}));







// export const statusEnum = pgEnum('status', ['OPEN', 'IN_PROGRESS', 'CLOSED']);

// export const userTable = pgTable('user', {
//   id: 
// });

// export const issueTable = pgTable('issue', {
//   id: serial('id').primaryKey(),
//   title: varchar('title', { length: 256 }),
//   description: text('description'),
//   status: statusEnum('status').default('OPEN'),
//   createdAt: timestamp('created_at').defaultNow(),
//   updatedAt: timestamp('updated_at').defaultNow(),
// });

// export const sessionTable = pgTable('session', {
//   id: text('id').primaryKey(),
//   userId: text('user_id')
//     .notNull()
//     .references(() => userTable.id),
//   expiresAt: timestamp('expires_at', {
//     withTimezone: true,
//     mode: 'date',
//   }).notNull(),
// });

// export const adapter = new DrizzlePostgreSQLAdapter(
//   db,
//   sessionTable,
//   userTable
// );
