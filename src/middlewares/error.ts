import { APIError, UserInputError } from "@utils";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

/**
 * Sends `err.stack` only during development
 */

export const errorHandler = (
  err: APIError | UserInputError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (process.env.NODE_ENV === "production") delete err.stack;
  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR);
  return res.json(err);
};

export const notFound = () => {
  throw new APIError(StatusCodes.NOT_FOUND);
};
