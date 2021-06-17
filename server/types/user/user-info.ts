import { CreateUser, UserRole } from "../../types.ts";

export type UserInfo = CreateUser & {
    roles: [UserRole];
};
