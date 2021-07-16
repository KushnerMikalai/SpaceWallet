import { db } from "./../db/db.ts";
import { CreateCategory } from "../types.ts";

const getCategoryById = async (category_id: string) => {
    const categories = await db.query(
      `
              SELECT category_id, name, image, user_id
              FROM category
              WHERE category_id = ? limit 0, 1;
          `,
      [category_id],
    );
    return categories.length ? categories[0] : null;
};

const createCategory = async (category: CreateCategory) => {
    const { name, image, user_id } = category;

    const { lastInsertId } = await db.query(
      `
              INSERT into category (category_id, name, image, user_id, created_at, updated_at)
              VALUES (DEFAULT, ? , ? , ? , DEFAULT, DEFAULT);
          `,
      [name, image, user_id],
    );

    return await getCategoryById(lastInsertId);
};

export {
    getCategoryById,
    createCategory
};
