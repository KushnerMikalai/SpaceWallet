import { Application, oakCors } from './deps.ts'
import * as middlewares from './middlewares/middlewares.ts'
import { router } from './routes/routes.ts'
import { Context } from './types.ts'

const port = 8000
const app = new Application<Context>()

app.use(oakCors());
// @ts-ignore
app.use(middlewares.loggerMiddleware)
// @ts-ignore
app.use(middlewares.errorMiddleware)
// @ts-ignore
app.use(middlewares.timingMiddleware)
// app.use(middlewares.JWTAuthMiddleware)
// app.use(middlewares.requestIdMiddleware)

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({port})
