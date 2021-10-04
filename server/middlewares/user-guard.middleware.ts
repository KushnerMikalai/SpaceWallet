import { Context, httpErrors } from "oak";
import { UserRole } from "../types.ts";
import { hasUserRole } from "../helpers/roles.ts";

const userGuard = (roles?: UserRole | UserRole[]): any => {
  return async (ctx: Context, next: () => Promise<void>) => {
    const { user } = ctx.state;
    if (!user) {
      throw new httpErrors.Unauthorized("unauthorized_user");
    }

    if (roles) {
      const isRoleMatched = hasUserRole(user, roles);

      if (!isRoleMatched) {
        throw new httpErrors.Forbidden("forbidden_user_role");
      }
    }

    await next();
  };
};

export { userGuard };
