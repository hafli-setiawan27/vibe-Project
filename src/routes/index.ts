import { Elysia, t } from "elysia";
import { db } from "../db";
import { users } from "../db/schema";

export const routes = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Server is running smoothly",
    timestamp: new Date().toISOString(),
  }))
  .group("/users", (app) =>
    app
      .get("/", async () => {
        return await db.select().from(users);
      })
      .post(
        "/",
        async ({ body, set }) => {
          const result = await db.insert(users).values(body);
          set.status = 201;
          return {
            message: "User created successfully",
            id: result[0].insertId,
          };
        },
        {
          body: t.Object({
            name: t.String(),
            email: t.String(),
          }),
        }
      )
  );
