import { db } from "./../db/db.ts";
import { CreateCategory } from "../types.ts";

const getCategoryById = async (categoryId: string) => {
  const categories = await db.query(
    `
              SELECT categoryId, name, image, userId
              FROM category
              WHERE categoryId = ? limit 0, 1;
          `,
    [categoryId],
  );
  return categories.length ? categories[0] : null;
};

const createCategory = async (category: CreateCategory) => {
  const { name, image, userId } = category;

  const { lastInsertId } = await db.query(
    `
              INSERT into category (categoryId, name, image, userId, createdAt, updatedAt)
              VALUES (DEFAULT, ? , ? , ? , DEFAULT, DEFAULT);
          `,
    [name, image, userId],
  );

  return await getCategoryById(lastInsertId);
};

export { createCategory, getCategoryById };
