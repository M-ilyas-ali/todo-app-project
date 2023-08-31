
import{sql,} from "@vercel/postgres";
import { InferModel } from 'drizzle-orm';
import { drizzle} from "drizzle-orm/vercel-postgres";
import{pgTable,varchar,serial} from 'drizzle-orm/pg-core';
export const todo_table=pgTable("todo",{id:serial("id").primaryKey(),task:varchar("task",{length:40}).notNull()});
export const db=drizzle(sql);
export type todo_table=InferModel<typeof todo_table>;
export type newtodo=InferModel<typeof todo_table,"insert" >;
