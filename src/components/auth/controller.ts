import { User } from "@User";
import { NextFunction, Request, Response } from "express";

/**
 * Finds a user by his email or creates him if he doesn't exist
 * @route POST /auth/token
 */

export const token = async ({ body }: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = body;
    const user = await User.findOneAndUpdate({ email }, { email }, { upsert: true, new: true });
    const accessToken = await user.token();
    res.json({ accessToken });
  } catch (error) {
    return next(error);
  }
};
