import { Result, ValidationError } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { APIError } from "./APIError";

export class UserInputError extends APIError {
  errors: ValidationError[];

  constructor(status: StatusCodes, errors: Result<ValidationError>, message?: string) {
    super(status, message);
    this.errors = errors.array();
  }
}
