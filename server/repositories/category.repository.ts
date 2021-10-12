import { db } from "./../db/db.ts";
import { CreateCategory } from "../types.ts";

const getCategoryById = async (id: string) => {
  const categories = await db.query(
    `
              SELECT id, name, image, userId
              FROM category
              WHERE id = ? limit 0, 1;
          `,
    [id],
  );
  return categories.length ? categories[0] : null;
};

const getСategoriesByUserId = async (userId: number) => {
  return await db.query(
    `
            SELECT id, name, image
            FROM category
            WHERE userId = ?;
        `,
    [userId],
  );
};

const createCategory = async (category: CreateCategory) => {
  const { name, image, userId } = category;

  const { lastInsertId } = await db.query(
    `
              INSERT into category (id, name, image, userId, createdAt, updatedAt)
              VALUES (DEFAULT, ? , ? , ? , DEFAULT, DEFAULT);
          `,
    [name, image, userId],
  );

  return await getCategoryById(lastInsertId);
};

export { createCategory, getCategoryById, getСategoriesByUserId };
