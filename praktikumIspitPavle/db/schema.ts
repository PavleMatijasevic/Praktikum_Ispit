import { pgTable, text } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod";

export const message = pgTable("message", {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    msg: text('msg').notNull(),
    userID: text('user_id').notNull()
});

export const insertMsgSchema = createInsertSchema(message)