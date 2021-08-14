import { APIError } from "@utils";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const justify = (req: Request, res: Response, next: NextFunction) => {
  if (req.is("text/plain")) return next();
  throw new APIError(StatusCodes.UNSUPPORTED_MEDIA_TYPE);
};
