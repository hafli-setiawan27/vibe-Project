import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connectionUrl = process.env.DATABASE_URL || "mysql://root:password@localhost:3306/proyek_belajar";

const pool = mysql.createPool(connectionUrl);

export const db = drizzle(pool, { schema, mode: "default" });
