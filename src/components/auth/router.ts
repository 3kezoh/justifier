import { Router } from "express";
import * as controller from "./controller";
import * as validation from "./validation";

export const authRouter = Router();

/**
 * @api {post} /auth/token
 * @apiVersion 1.0.0
 * @apiName Token
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam {String} email
 *
 * @apiSuccess (200 OK) accessToken
 *
 * @apiError (422 Unprocessable Entity) ValidationError Some parameters may contain invalid values
 */

authRouter.post("/token", validation.token, controller.token);
