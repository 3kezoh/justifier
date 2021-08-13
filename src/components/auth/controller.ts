import { User } from "@User";
import { NextFunction, Request, Response } from "express";
import { USER } from "./errors";
import { APIError } from "@utils";
import { StatusCodes } from "http-status-codes";

/**
 * @route POST /auth/token
 */

export const token = async ({ body }: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = body;
    const user = await User.findOneAndUpdate({ email }, { email }, { upsert: true, new: true });
    if (!user) throw new APIError(StatusCodes.UNPROCESSABLE_ENTITY, USER.NOT_FOUND);
    const { accessToken } = await user.token();
    res.json({ accessToken });
  } catch (error) {
    return next(error);
  }
};
