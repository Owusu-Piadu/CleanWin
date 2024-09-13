import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
   "postgresql://Ryde_owner:f0b4yausBltm@ep-gentle-snow-a5w1vgu4.us-east-2.aws.neon.tech/%20%20cleanwin?sslmode=require"
);
export const db = drizzle(sql, { schema });
