import { Router } from "../deps.ts";
import { Context } from "./../types.ts";

const router: Router = new Router();

router.get("", (ctx: Context) => {
    ctx.response.body = "<hello world>";
});

export { router };
