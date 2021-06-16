import { Application, oakCors } from "./deps.ts"
import { router } from "./routes/routes.ts";
import { Context } from "./types.ts";

const port = 8000;
const app = new Application<Context>();

app.use(oakCors());

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
