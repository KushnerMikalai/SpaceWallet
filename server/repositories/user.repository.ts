import { db } from './../db/db.ts'
import { UserInfo } from '../types.ts'

const getUsers = async () => {
    return await db.query(`
        SELECT
            id, name, email, roles,
            is_active, created_at, updated_at
        FROM users
    `);
};

const getUserById = async (id: number) => {
    const users = await db.query(
        `
        SELECT
            id, name, email, roles,
            is_active, created_at, updated_at
        FROM users where id = ? limit 0, 1`,
        [id],
    );
    return users.length ? users[0] : null;
};

const getUserByEmail = async (email: string) => {
    const users = await db.query(
        `
        SELECT
            id, name, email, password, roles,
            is_active, created_at, updated_at
        FROM users where email = ? limit 0, 1`,
        [email],
    );
    return users.length ? users[0] : null;
};

const createUser = async (user: UserInfo) => {
    const { name, email, password } = user;
    const roles = user.roles.join(",");

    const { lastInsertId } = await db.query(
        `
        INSERT into users (
            id, name, email, roles, password,
            is_active, created_at, updated_at
        )
        VALUES (
            DEFAULT, ? , ? , ?, ?,
            1, DEFAULT, DEFAULT
        );
        `,
        [name, email, roles, password],
    );

    return await getUserById(lastInsertId);
};

const updateUser = async (
    id: number,
    user: { name: string; email: string },
) => {
    const { name, email } = user;
    const result = await db.query(`
        UPDATE users SET
            name = ?,
            email = ?,
            updated_at = DEFAULT
        WHERE id = ?;
        `,
        [name, email, id],
    );

    return result;
};

const deleteUser = async (id: number,) => {
    const result = await db.query(
        `
        DELETE FROM users
        WHERE id = ?;
        `,
        [id],
    );
    return result;
};

export {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
};
