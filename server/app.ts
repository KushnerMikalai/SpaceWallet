import { Application } from "oak";
import { oakCors } from "cors";
import * as middlewares from "./middlewares/middlewares.ts";
import { router } from "./routes/routes.ts";
import { red, green, rgb24 } from "fmt/colors.ts";

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

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(rgb24(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  { r: 255, g: 153, b: 204 }));
});

await app.listen({ port });
