import {
  CreateUser,
  LoginCredential,
  RefreshToken,
  AuthCredential,
  CheckPasswordEmailCredential
} from "./../types.ts";
import { Context, validasaur } from "../deps.ts";
import * as authService from "./../services/auth.service.ts";
import { config } from "./../config/config.ts";
import { Tokens } from "../types/auth.types.ts";

const {
  JWT_ACCESS_TOKEN_EXP,
  JWT_REFRESH_TOKEN_EXP,
} = config;

const options: any = {
  httpOnly: true,
  path: "/",
  sameSite: "strict",
};

const getExpires = (exp: number) => {
  return new Date(Date.now() + exp * 1000);
};

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

  await ctx.cookies.set(
    "access_token",
    tokens.access_token,
    {
      ...options,
      expires: getExpires(Number(JWT_ACCESS_TOKEN_EXP)),
    },
  );
  await ctx.cookies.set(
    "refresh_token",
    tokens.refresh_token,
    {
      ...options,
      expires: getExpires(Number(JWT_REFRESH_TOKEN_EXP)),
    },
  );

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

/**
 * AUTH CHECK TOKENS
 */
const checkTokens = async (ctx: Context) => {
  const accessToken = ctx.cookies.get("access_token");
  const refreshToken = ctx.cookies.get("refresh_token");
  const body: Tokens = {
    "access_token": refreshToken || null,
    "refresh_token": refreshToken || null,
  };

  if (!accessToken && refreshToken) {
    const res = await authService.refreshToken(refreshToken);

    if (res) {
      body.access_token = res.access_token || null;
      body.refresh_token = res.refresh_token || null;
    }
  }

  await ctx.cookies.set(
    "access_token",
    body.access_token,
    {
      ...options,
      expires: getExpires(Number(JWT_ACCESS_TOKEN_EXP)),
    },
  );
  await ctx.cookies.set(
    "refresh_token",
    body.refresh_token,
    {
      ...options,
      expires: getExpires(Number(JWT_REFRESH_TOKEN_EXP)),
    },
  );

  ctx.response.body = body;
};

/**
 * Auth
 */
const auth = async (ctx: Context) => {
  const request = ctx.request;
  const credential = await request.body().value as unknown as AuthCredential;
  ctx.response.body = await authService.auth(credential);
};

/**
 * Check Password Email
 */
 const checkPasswordEmail = async (ctx: Context) => {
  const request = ctx.request;
  const credential = await request.body().value as unknown as CheckPasswordEmailCredential;
  const tokens = await authService.checkPasswordEmail(credential);

  await ctx.cookies.set(
    "access_token",
    tokens.access_token,
    {
      ...options,
      expires: getExpires(Number(JWT_ACCESS_TOKEN_EXP)),
    },
  );
  await ctx.cookies.set(
    "refresh_token",
    tokens.refresh_token,
    {
      ...options,
      expires: getExpires(Number(JWT_REFRESH_TOKEN_EXP)),
    },
  );

  ctx.response.body = tokens;
};

export {
  checkTokens,
  login,
  loginSchema,
  refreshToken,
  refreshTokenSchema,
  register,
  registrationSchema,
  auth,
  checkPasswordEmail,
};
