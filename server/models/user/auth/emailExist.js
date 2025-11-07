import pool from "../../../config/database.js";

export async function emailExist(email) {
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    return rows;
  } catch (error) {
    console.error("error selecting from database", error);
    throw error;
  }
}
