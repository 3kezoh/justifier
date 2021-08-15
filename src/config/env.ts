/**
 * .env
 */

import { logger } from "@config/winston";
import dotenv from "dotenv";

const path = ".env";

dotenv.config({ path });
logger.info(`Using ${path} file to supply environment variables`);

const { env } = process;

export const jwt = {
  secret: env.JWT_SECRET,
  expiration: env.JWT_EXPIRATION,
} as const;

export const port = env.PORT;

const MONGO_URIS: { [index: string]: string } = {
  production: env.MONGODB_URI,
  development: env.MONGODB_URI_LOCAL,
  test: env.MONGODB_URI_TEST,
} as const;

export const mongo = {
  uri: MONGO_URIS[env.NODE_ENV],
} as const;
