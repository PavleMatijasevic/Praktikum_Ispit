import {Hono} from "hono"
import {db} from '@/db/drizzle'
import { insertMsgSchema, message } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { createId } from "@paralleldrive/cuid2";
import { and, eq} from "drizzle-orm";
import { z } from "zod";


const app = new Hono()
    .get("/", async (c) => {
        const data = await db
            .select({
                id: message.id,
                name: message.name,
                email: message.email,
                msg: message.msg,
                user_id: message.userID
            })
            .from(message);

        return c.json({ data });
    })
    .get(
        "/:id",
        zValidator("param", z.object({
            id: z.string().optional(),
        })),
        clerkMiddleware(),
        async (c) => {
            const auth = getAuth(c);
            const { id } = c.req.valid("param");

            if (!id) {
                return c.json({ error: "Nedostaje ID" }, 400);
            }

            if (!auth?.userId) {
                return c.json({ error: "Nije autorizovan" }, 401)
            }

            const [data] = await db
                .select({
                    id: message.id,
                    name: message.name,
                })
                .from(message)
                .where(
                    and(
                        eq(message.userID, auth.userId),
                        eq(message.id, id)
                    ),
                );
            if (!data) {
                return c.json({ error: 'Nije pronadjen' }, 404);
            }

            return c.json({ data });
        }
    )
    .post(
        "/",
        clerkMiddleware(),
        zValidator("json", insertMsgSchema.pick({
            name: true,
            email: true,
            msg: true
        })),
        async (c) => {

            const auth = getAuth(c);
            const values = c.req.valid("json");

            if (!auth?.userId) {
                return c.json({ error: 'Nije autorizovan korisnik' }, 401);
            }

            const [data] = await db.insert(message).values({
                id: createId(),
                name: values.name,
                email: values.email,
                msg:values.msg,
                userID: auth.userId
            }).returning();

            return c.json({ data })
        })
    

export default app;

