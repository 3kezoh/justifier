import { Router } from "express";
import * as controller from "./controller";
import * as validation from "./validation";

export const authRouter = Router();

/**
 * @api {post} /auth/token
 * @apiVersion 0.1.0
 * @apiName Token
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type <code> application/json </code>
 *
 * @apiParam {String} email
 *
 * @apiSuccess (200 OK) accessToken Grants access to /api/*
 * @apiSuccessExample {json} Success Payload:
 * {
 *   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTE2N2MxMWJkMDI2YmQxYjZlYjFiNzciLCJpYXQiOjE2Mjg5MDAzNzgsImV4cCI6MTYyOTE1OTU3OH0.OGa4TJReWmYj41hNVYUrOypPaVhBhdlEVMULFV1waNE"
 * }
 *
 *
 * @apiError (422 Unprocessable Entity) ValidationError Some parameters may contain invalid values
 * @apiErrorExample {json} ValidationError Payload:
 * {
 *   "status": 422,
 *   "message": "Unprocessable Entity",
 *   "errors": [
 *       {
 *           "value": "user@gmail",
 *           "msg": "EMAIL_INVALID",
 *           "param": "email",
 *           "location": "body"
 *       }
 *   ]
 * }
 */

authRouter.post("/token", validation.token, controller.token);
