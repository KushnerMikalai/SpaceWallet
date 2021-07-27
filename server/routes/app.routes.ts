import { Context } from "../deps.ts";
import * as userService from "../services/user.service.ts";

const getAppData = async (ctx: Context) => {
  const stateUserId = ctx.state?.user?.id || null;

  const user = stateUserId ? await userService.getUserById(+stateUserId) : null;

  ctx.response.body = {
    user,
  };
};

export { getAppData };
