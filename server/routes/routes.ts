import { Context, Router, validasaur } from "../deps.ts";
import { UserRole } from "./../types.ts";
import { requestValidator, userGuard } from "../middlewares/middlewares.ts";

import * as authRoutes from "./auth.routes.ts";
import * as userRoutes from "./user.routes.ts";

const userSchema = {
  name: [validasaur.required, validasaur.minLength(3)],
  email: [validasaur.required, validasaur.isEmail],
};

const router: Router = new Router();

router.get("", (ctx: Context) => {
  ctx.response.body = "<hello world>";
});

router
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
