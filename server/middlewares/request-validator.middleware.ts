import { validasaur, httpErrors } from '../deps.ts';
import { Context } from "./../types.ts";

/**
 * get single error message from errors
 */
const getErrorMessage = (errors: validasaur.ValidationErrors): string | undefined => {
    for (let attr in errors) {
        const attrErrors = errors[attr];

        for (let rule in attrErrors) {
            return attrErrors[rule] as string;
        }
    }
};

/**
 * request validation middleware
 * validate request body with given validation rules
 */
const requestValidator = ({bodyRules}: { bodyRules: validasaur.ValidationRules }): any => {
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
