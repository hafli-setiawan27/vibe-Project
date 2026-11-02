import { Elysia } from "elysia";
import { routes } from "./routes";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const app = new Elysia()
  .use(routes)
  .listen(port);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
