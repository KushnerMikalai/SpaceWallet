import { config } from "./../config/config.ts";
import { jwtCreate, getNumericDate, jwtVerify, jwtHeader } from "../deps.ts";

const {
    JWT_TOKEN_SECRET,
    JWT_ACCESS_TOKEN_EXP,
    JWT_REFRESH_TOKEN_EXP,
} = config;

const header: jwtHeader = {
    alg: "HS256",
    typ: "JWT",
};

const getAuthToken = async (user: any): Promise<string | null> => {
    const payload = {
        iss: "deno_api",
        type: 'access',
        id: user.id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        exp: getNumericDate(Number(JWT_ACCESS_TOKEN_EXP)),
    };

    return await jwtCreate(header, payload, JWT_TOKEN_SECRET);
};

const getRefreshToken = async (user: any): Promise<string | null> => {
    const payload = {
        iss: 'deno_api',
        type: 'refresh',
        id: user.id,
        exp: getNumericDate(Number(JWT_REFRESH_TOKEN_EXP)),
    };

    return await jwtCreate(header, payload, JWT_TOKEN_SECRET);
};


const getJwtPayload = async (token: string): Promise<any | null> => {
    return await jwtVerify(token, JWT_TOKEN_SECRET, header.alg);
};

export { getAuthToken, getJwtPayload, getRefreshToken }
