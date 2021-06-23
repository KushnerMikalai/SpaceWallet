import { Context } from './../types.ts'
import { uuid } from '../deps.ts'

const requestIdMiddleware = async (ctx: Context, next: () => Promise<unknown>) => {
    let requestId = ctx.request.headers.get("X-Response-Id");
    if (!requestId) {
        requestId = uuid.generate();
        ctx.request.headers.set("X-Response-Id", requestId.toString());
    }
    await next();
    ctx.response.headers.set("X-Response-Id", requestId);
};

export { requestIdMiddleware }
