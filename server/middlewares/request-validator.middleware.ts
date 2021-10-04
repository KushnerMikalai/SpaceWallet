import { Context, httpErrors } from "oak";
import * as validasaur from "validasaur";

const getErrorMessage = (
  errors: validasaur.ValidationErrors,
): string | undefined => {
  for (const attr in errors) {
    const attrErrors = errors[attr];

    for (const rule in attrErrors) {
      return attrErrors[rule] as string;
    }
  }
};

const requestValidator = (
  { bodyRules }: { bodyRules: validasaur.ValidationRules },
): any => {
  return async (ctx: Context, next: () => Promise<void>) => {
    const request = ctx.request;
    const body: any = await request.body().value;

    const [isValid, errors] = await validasaur.validate(body, bodyRules);
    if (!isValid) {
      const message = getErrorMessage(errors);
      throw new httpErrors.BadRequest(message);
    }

    await next();
  };
};

export { requestValidator };
