import * as userRepo from "./../repositories/user.repository.ts";
import * as categoryRepo from "../repositories/category.repository.ts";
import { httpErrors } from "../deps.ts";
import * as encription from "../helpers/encription.ts";
import * as jwt from "../helpers/jwt.ts";
import { CreateUser, LoginCredential, UserInfo, UserRole } from "../types.ts";

export const registerUser = async (userData: CreateUser) => {
  try {
    const { password } = userData;
    userData.password = await encription.encript(password);

    const user: UserInfo = {
      roles: [UserRole.USER],
      ...userData,
    };

    const newUser = await userRepo.createUser(user);

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
    throw new httpErrors.Unauthorized("Wrong credential");
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
        };
      }
    } else {
      throw new httpErrors.Unauthorized("Invalid refresh token");
    }
  } catch (err) {
    throw new httpErrors.Unauthorized("Invalid token object");
  }
};
