import { UserInputError } from "@utils";
import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { EMAIL } from "./errors";

/**
 * Finds the validation errors in this request
 * @throws UserInputError
 */

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  throw new UserInputError(StatusCodes.UNPROCESSABLE_ENTITY, errors);
};

export const token = [body("email", EMAIL.INVALID).isEmail(), validate];
