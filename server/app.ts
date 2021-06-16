import { Application, Context } from "https://deno.land/x/oak/mod.ts";

const port = 8000;
const app = new Application<Context>();


app.use((ctx) => {
    ctx.response.body = "Hellosss World!";
});

await app.listen({ port });
