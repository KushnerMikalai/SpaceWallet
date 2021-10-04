import { config } from "./../config/config.ts";
import { create, getNumericDate, Header, verify } from "djwt";

// TODO
const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);

const {
  JWT_ACCESS_TOKEN_EXP,
  JWT_REFRESH_TOKEN_EXP,
} = config;

const header: Header = { alg: "HS512", typ: "JWT" };

const getAuthToken = async (user: any): Promise<string | null> => {
  const payload = {
    iss: "deno_api",
    type: "access",
    id: user.id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    exp: getNumericDate(Number(JWT_ACCESS_TOKEN_EXP)),
  };

  return await create(header, payload, key);
};

const getRefreshToken = async (user: any): Promise<string | null> => {
  const payload = {
    iss: "deno_api",
    type: "refresh",
    id: user.id,
    exp: getNumericDate(Number(JWT_REFRESH_TOKEN_EXP)),
  };

  return await create(header, payload, key);
};

const getJwtPayload = async (token: string): Promise<any | null> => {
  return await verify(token, key);
};

export { getAuthToken, getJwtPayload, getRefreshToken };
