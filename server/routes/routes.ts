import { Context, Router } from "oak";
import * as validasaur from 'validasaur';
import { UserRole } from "./../types.ts";
import { requestValidator, userGuard } from "../middlewares/middlewares.ts";

import * as authRoutes from "./auth.routes.ts";
import * as userRoutes from "./user.routes.ts";
import * as appRoutes from "./app.routes.ts";

const userSchema = {
  name: [validasaur.required, validasaur.minLength(3)],
  email: [validasaur.required, validasaur.isEmail],
};

const router: Router = new Router();

router.get("", (ctx: Context) => {
  ctx.response.body = "<hello world>";
});

router
  .get(
    "/app",
    appRoutes.getAppData,
  );

router
  .get(
    "/check-tokens",
    authRoutes.checkTokens,
  )
  .post(
    "/login",
    requestValidator({ bodyRules: authRoutes.loginSchema }),
    authRoutes.login,
  )
  .post(
    "/register",
    requestValidator({ bodyRules: authRoutes.registrationSchema }),
    authRoutes.register,
  )
  .post(
    "/token",
    requestValidator({ bodyRules: authRoutes.refreshTokenSchema }),
    authRoutes.refreshToken,
  )
  .post(
    "/auth",
    requestValidator({
      bodyRules: {
        email: [validasaur.required, validasaur.isEmail],
      }
    }),
    authRoutes.auth,
  )
  .post(
    "/login-code",
    requestValidator({
      bodyRules: {
        email: [validasaur.required, validasaur.isEmail],
        password: [validasaur.required],
      }
    }),
    authRoutes.checkPasswordEmail,
  );

router
  .get("/users", userGuard(UserRole.ADMIN), userRoutes.getUsers)
  .get("/users/:id", userGuard(UserRole.ADMIN), userRoutes.getUserById)
  .put(
    "/users/:id",
    userGuard(),
    requestValidator({ bodyRules: userSchema }),
    userRoutes.updateUser,
  )
  .delete("/users/:id", userGuard(UserRole.ADMIN), userRoutes.deleteUser);

export { router };
