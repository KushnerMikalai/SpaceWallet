import * as userRepo from "./../repositories/user.repository.ts";
import * as categoryRepo from "../repositories/category.repository.ts";
import { httpErrors } from "oak";
import * as encription from "../helpers/encription.ts";
import * as jwt from "../helpers/jwt.ts";
import {
  AuthCredential,
  CheckPasswordEmailCredential,
  CreateUser,
  LoginCredential,
  UserInfo,
  UserRole,
} from "../types.ts";
import mailerObj from "../helpers/smpt.ts";

export const registerUser = async (userData: CreateUser) => {
  try {
    const { password } = userData;
    userData.password = await encription.encript(password);

    const user: UserInfo = {
      roles: [UserRole.USER],
      ...userData,
    };

    const newUser = await userRepo.createUser(user);

    await mailerObj({
      to: newUser.email,
      body: `<h1>Hello from Deno!</h1>`, // TODO: generate validate token sent to email new user
    });

    const defaultCategoryList = [
      "car",
      "foodstuff",
      "health",
      "rest",
      "gas",
      "training",
      "home",
    ];

    defaultCategoryList.forEach((key) => {
      categoryRepo.createCategory({ name: key, image: "", userId: newUser.id });
    });

    return newUser;
  } catch (err) {
    const { message } = err;
    if (message.match("email_unique")) {
      throw new httpErrors.BadRequest(
        `Already user exists with email ${userData.email}`,
      );
    }

    throw err;
  }
};

export const loginUser = async (credential: LoginCredential) => {
  const { email, password } = credential;
  const user = await userRepo.getUserByEmail(email);

  if (user) {
    if (user["is_active"]) {
      const passHash = user.password;
      const isValidPass = await encription.compare(password, passHash);

      if (isValidPass) {
        return {
          "access_token": await jwt.getAuthToken(user),
          "refresh_token": await jwt.getRefreshToken(user),
        };
      } else {
        throw new httpErrors.Unauthorized("Invalid password");
      }
    } else {
      throw new httpErrors.Unauthorized("Inactive user status");
    }
  } else {
    throw new httpErrors.Unauthorized("wrong_credential");
  }
};

export const refreshToken = async (token: string) => {
  try {
    const payload = await jwt.getJwtPayload(token);

    if (payload && payload.type === "refresh") {
      const id = payload.id as number;
      const user = await userRepo.getUserById(id);

      if (user) {
        if (!user["is_active"]) {
          throw new httpErrors.Unauthorized("Inactive user status");
        }
        return {
          "access_token": await jwt.getAuthToken(user),
          "refresh_token": await jwt.getRefreshToken(user),
        };
      }
    } else {
      throw new httpErrors.Unauthorized("Invalid refresh token");
    }
  } catch (_err) {
    throw new httpErrors.Unauthorized("Invalid token object");
  }
};

export const auth = async (credential: AuthCredential) => {
  const { email } = credential;
  const user = await userRepo.getUserByEmail(email);
  const password = String(Math.floor(100000 + Math.random() * 900000));

  try {
    await mailerObj({
      to: email.trim(),
      body: `
        <h1>Hello from Clouds!!!!</h1>
        <p>Password for LogIn: ${password}</p>
      `,
    });
  } catch (err) {
    if (err?.name !== "BadResource") {
      throw new httpErrors.ServiceUnavailable("Service Email Unavailable");
    }
  }

  if (user) {
    await userRepo.updateUser(user.id, {
      name: user.name,
      email: user.email,
      password,
    });
  } else {
    const userData: UserInfo = {
      roles: [UserRole.USER],
      name: "",
      email,
      password,
    };

    await userRepo.createUser(userData);
  }

  return "ok";
};

export const checkPasswordEmail = async (
  credential: CheckPasswordEmailCredential,
) => {
  const { password, email } = credential;
  const user = await userRepo.getUserByEmail(email);

  if (user) {
    if (user.is_active) {
      const userPass = user.password;
      const isValidPass = userPass === password;

      if (isValidPass) {
        return {
          "access_token": await jwt.getAuthToken(user),
          "refresh_token": await jwt.getRefreshToken(user),
        };
      } else {
        throw new httpErrors.Unauthorized("Invalid password");
      }
    } else {
      throw new httpErrors.Unauthorized("Inactive user status");
    }
  } else {
    throw new httpErrors.Unauthorized("Invalid Email");
  }
};
