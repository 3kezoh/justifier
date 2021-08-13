import { getReasonPhrase, StatusCodes } from "http-status-codes";

export class APIError extends Error {
  status: StatusCodes;
  message: string;

  constructor(status: StatusCodes, message?: string) {
    super(message);
    this.status = status;
    this.message = message ?? getReasonPhrase(status);
  }
}
