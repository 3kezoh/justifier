import { IUserDocument } from "@User";
import { APIError } from "@utils";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import passport from "passport";

const handleJWT =
  (req: Request, _: Response, next: NextFunction) => (error: Error, user: IUserDocument) => {
    try {
      if (error || !user) throw new APIError(StatusCodes.UNAUTHORIZED);
      req.user = user;
      return next();
    } catch (error) {
      return next(error);
    }
  };

export const authenticate = (req: Request, res: Response, next: NextFunction) =>
  passport.authenticate("jwt", { session: false }, handleJWT(req, res, next))(req, res, next);
