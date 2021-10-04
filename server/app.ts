import { Application } from "oak";
import { oakCors } from "cors";
import * as middlewares from "./middlewares/middlewares.ts";
import { router } from "./routes/routes.ts";

const port = 8000;
const app = new Application();

app.use(oakCors());
app.use(middlewares.loggerMiddleware);
app.use(middlewares.errorMiddleware);
app.use(middlewares.timingMiddleware);
app.use(middlewares.JWTAuthMiddleware);
app.use(middlewares.requestIdMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
