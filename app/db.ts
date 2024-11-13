import mysql from 'serverless-mysql';
import dotenv from 'dotenv';
dotenv.config()

const db = mysql({
    config: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
});
export default async function excuteQuery({ query, values }) {
    try {
      const results = await db.query(query, values);
      await db.end();
      return results;
    } catch (error) {
      return { error };
    }
}
