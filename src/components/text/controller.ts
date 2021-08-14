import { Request, Response, NextFunction } from "express";
import * as text from "@lib/text";

/**
 * @route POST /api/justify
 */

export const justify = ({ body }: Request, res: Response, next: NextFunction) => {
  try {
    return res.send(text.justify(body));
  } catch (error) {
    return next(error);
  }
};
