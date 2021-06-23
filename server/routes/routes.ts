import { Router } from "../deps.ts"
import { Context } from "./../types.ts"
import * as authRoutes from "./auth.routes.ts"
import { requestValidator } from "./../middlewares/request-validator.middleware.ts"

const router: Router = new Router();

router.get("", (ctx: Context) => {
    ctx.response.body = "<hello world>";
});

router
    .post("/login",
        requestValidator({bodyRules: authRoutes.loginSchema}),
        authRoutes.login
    )
    .post("/register",
        requestValidator({bodyRules: authRoutes.registrationSchema}),
        authRoutes.register
    )
    .post("/token",
        requestValidator({bodyRules: authRoutes.refreshTokenSchema}),
        authRoutes.refreshToken
    );


export { router };
