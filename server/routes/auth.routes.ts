import { Context, CreateUser, LoginCredential, RefreshToken } from './../types.ts';
import { validasaur } from '../deps.ts';
import * as authService from './../services/auth.service.ts';

const registrationSchema = {
    name: [validasaur.required],
    email: [validasaur.required, validasaur.isEmail],
    password: [validasaur.required, validasaur.lengthBetween(6, 12)],
};
//todo: add validation alphanumeric, spechal char
const register = async (ctx: Context) => {
    const request = ctx.request;
    const userData = await request.body().value as unknown as CreateUser;
    ctx.response.body = await authService.registerUser(userData);
};


const loginSchema = {
    email: [validasaur.required, validasaur.isEmail],
    password: [validasaur.required, validasaur.lengthBetween(6, 12)],
};
const login = async (ctx: Context) => {
    const request = ctx.request;
    const credential = await request.body().value as unknown as LoginCredential;
    ctx.response.body = await authService.loginUser(credential);
};


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
    register,
    registrationSchema,
    refreshToken,
    refreshTokenSchema
};
