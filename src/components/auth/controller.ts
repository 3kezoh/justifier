import { User } from "@User";
import { NextFunction, Request, Response } from "express";

/**
 * @route POST /auth/token
 */

export const token = async ({ body }: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = body;
    const user = await User.findOneAndUpdate({ email }, { email }, { upsert: true, new: true });
    const accessToken = await user.token();
    return res.json({ accessToken });
  } catch (error) {
    return next(error);
  }
};
