import { CreateUser, LoginCredential, RefreshToken } from "./../types.ts";
import { Context, validasaur } from "../deps.ts";
import * as authService from "./../services/auth.service.ts";

/**
 * REGISTER
 */
const registrationSchema = {
  name: [validasaur.required],
  email: [validasaur.required, validasaur.isEmail],
  password: [validasaur.required, validasaur.lengthBetween(6, 12)],
};

// TODO: add validation alphanumeric, spechal char
const register = async (ctx: Context) => {
  const request = ctx.request;
  const userData = await request.body().value as unknown as CreateUser;

  ctx.response.body = await authService.registerUser(userData);
};

/**
 * LOGIN
 */
const loginSchema = {
  email: [validasaur.required, validasaur.isEmail],
  password: [validasaur.required, validasaur.lengthBetween(6, 12)],
};

const login = async (ctx: Context) => {
  const request = ctx.request;
  const credential = await request.body().value as unknown as LoginCredential;
  const tokens = await authService.loginUser(credential);

  // TODO
  const options: any = {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    maxAge: 3600,
    domain: 'localhost',
    expires: new Date()
  }

  await ctx.cookies.set('access_token', tokens.access_token, options);
  await ctx.cookies.set('refresh_token', tokens.refresh_token, options);

  ctx.response.body = tokens;
};

/**
 * REFRESH TOKEN
 */
const refreshTokenSchema = {
  refresh_token: [validasaur.required],
};

const refreshToken = async (ctx: Context) => {
  const request = ctx.request;
  const data = await request.body().value as unknown as RefreshToken;
  ctx.response.body = await authService.refreshToken(data.refresh_token);
};

export {
  login,
  loginSchema,
  refreshToken,
  refreshTokenSchema,
  register,
  registrationSchema,
};
