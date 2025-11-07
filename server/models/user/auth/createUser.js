import pool from "../../../config/database.js";

export async function createUser({
  fullname,
  gender,
  country,
  email,
  password,
}) {
  try {
    const [rows] = await pool.query(
      "INSERT INTO user (fullname,gender,country,email,password) VALUES (?,?,?,?,?)",
      [fullname, gender, country, email, password]
    );
    return rows;
  } catch (error) {
    console.error("error inserting from database, verifyOtp", error);
  }
}
