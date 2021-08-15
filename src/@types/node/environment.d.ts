declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      JWT_EXPIRATION: string;
      MONGODB_URI: string;
      MONGODB_URI_LOCAL: string;
      MONGODB_URI_TEST: string;
      NODE_ENV: "production" | "development" | "test";
      PORT: string;
    }
  }
}

export {};
