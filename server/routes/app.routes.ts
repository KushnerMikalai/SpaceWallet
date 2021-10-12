import { Context } from "oak";
import * as userService from "../services/user.service.ts";
import { getСategoriesByUserId } from "../repositories/category.repository.ts";
import { App } from '../types/app.types.ts'

const getAppData = async (ctx: Context) => {
  const stateUserId = ctx.state?.user?.id || null;

  const user = stateUserId ? await userService.getUserById(+stateUserId) : {
    roles: "guest",
  };
  user.isAuth = Boolean(stateUserId);

  const body: App = {
    account: user,
  };

  if (user.isAuth) {
    body.categories = await getСategoriesByUserId(user.id);
  }

  ctx.response.body = body;
};

export { getAppData };
