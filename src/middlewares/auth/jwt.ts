import { IUserDocument } from "@User";
import { NextFunction, Request, Response } from "express";
import passport from "passport";

const handleJWT =
  (req: Request, _: Response, next: NextFunction) => (error: Error, user: IUserDocument) => {
    if (error || !user) throw new Error("TODO add status code");
    req.user = user;
    return next();
  };

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  passport.authenticate("jwt", { session: false }, handleJWT(req, res, next))(req, res, next);
};
