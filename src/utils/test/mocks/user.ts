/**
 * Represents a user
 */

import { User } from "@User";

// eslint-disable-next-line import/no-mutable-exports
export let accessToken = "";

export const user = { email: "user@gmail.com" } as const;

export const setupUser = () => {
  beforeEach(async () => {
    const user = await User.create({ email: "user@gmail.com" });
    accessToken = await user.token();
  });
};
