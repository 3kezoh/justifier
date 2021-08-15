import * as text from "@lib/text";
import { NextFunction, Request, Response } from "express";

/**
 * @route POST /api/justify
 */

export const justify = async ({ body, user }: Request, res: Response, next: NextFunction) => {
  try {
    user.justifications.push({ words: body.trim().split(/\s+/).length, createdAt: new Date() });
    await user.save();
    return res.send(text.justify(body));
  } catch (error) {
    return next(error);
  }
};
