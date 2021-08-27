import { Context } from "../deps.ts";
import { AuthUser } from "./../types.ts";
import { getJwtPayload } from "../helpers/jwt.ts";

const JWTAuthMiddleware = async (ctx: Context, next: () => Promise<unknown>) => {
  try {
    const token = ctx.cookies.get('access_token');

    if (token) {
      const user = await getJwtPayload(token);

      if (user) {
        ctx.state.user = user as AuthUser;
      }
    }
  } catch (err) {
    console.log(err, "jwt-auth-middleware"); // TODO: handle Error
  }
  await next();
};

export { JWTAuthMiddleware };
