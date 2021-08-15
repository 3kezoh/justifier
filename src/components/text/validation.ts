import { APIError } from "@utils";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ms from "ms";

const MAX_WORDS_PER_SLIDING_DAY = 80_000;

/**
 * @route POST /api/justify
 * @throws if the Content-Type header isn't text/plain
 * @throws if the user exceeds 80 000 justified words per sliding day
 */

export const justify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.is("text/plain")) throw new APIError(StatusCodes.UNSUPPORTED_MEDIA_TYPE);

    let threshold = 0;
    req.user.justifications = req.user.justifications.filter(({ words, createdAt }) => {
      if (createdAt.getTime() > Date.now() - ms("1d")) return (threshold += words);
      return false;
    });

    if (threshold + req.body.trim().split(/\s+/).length > MAX_WORDS_PER_SLIDING_DAY)
      throw new APIError(StatusCodes.PAYMENT_REQUIRED);

    await req.user.save();

    return next();
  } catch (error) {
    return next(error);
  }
};
