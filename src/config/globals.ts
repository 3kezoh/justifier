import { logger } from "@config/winston";
import dotenv from "dotenv";
import fs from "fs";

const paths = [".env", ".env.example", "env.local"];

for (const path of paths) {
  if (fs.existsSync(path)) {
    dotenv.config({ path });
    logger.info(`Using ${path} file to supply environment variables`);
    break;
  }
}

const { env } = process;

export const jwt = {
  secret: env.JWT_SECRET ?? "",
  expiration: env.JWT_EXPIRATION ?? "1m",
} as const;

export const port = env.PORT;

const MONGO_URIS: { [index: string]: string } = {
  production: env.MONGODB_URI ?? "",
  development: env.MONGODB_URI_LOCAL ?? "",
  test: env.MONGODB_URI_TEST ?? "",
} as const;

export const mongo = {
  uri: MONGO_URIS[env.NODE_ENV ?? "development"],
} as const;
